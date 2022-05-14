import { defineStore } from 'pinia'
import { piniaStore } from '@/store'
import { RouteRecordRaw } from 'vue-router'
import constantRoutes from '@/router/constant'
import privateRoutes from '@/router/privateRoutes'
import { deepClone } from '@/util'
import { useUserStore } from '@/store/user'
import { useAppConfigStore } from './app'

// --------------前端路由处理-------------------
function hasPermission(permissions, route) {
  let isAuth = false
  if (route.meta && route.meta.auth) {
    isAuth = permissions.some(auth => {
      if (typeof route.meta.auth === 'string') {
        return route.meta.auth === auth
      } else {
        return route.meta.auth.some(routeAuth => {
          return routeAuth === auth
        })
      }
    })
  } else {
    isAuth = true
  }
  return isAuth
}

function filterPrivateRoutes(routes, permissions) {
  const res = [] as RouteRecordRaw[]
  routes.forEach(route => {
    const tmpRoute = deepClone(route)
    if (hasPermission(permissions, tmpRoute)) {
      if (tmpRoute.children) {
        tmpRoute.children = filterPrivateRoutes(tmpRoute.children, permissions)
        tmpRoute.children.length && res.push(tmpRoute)
      } else {
        res.push(tmpRoute)
      }
    }
  })
  return res
}

// --------------后端路由处理-------------------
function hasBackRoutePermission(backendRoutes: any[], route: RouteRecordRaw) {
  let isAuth = false
  if (backendRoutes.some(v => v.name === route.name)) {
    isAuth = true
  }
  return isAuth
}
// 从前端路由中过滤出后端返回的路由  并进行处理
function filterBackendRoutes(routes: RouteRecordRaw[], backendRoutes: any[]): RouteRecordRaw[] {
  const res = [] as RouteRecordRaw[]
  routes.forEach(route => {
    const tmpRoute = deepClone(route)
    const backendRouteItem = backendRoutes.find(item => item.name === tmpRoute.name)
    if (hasBackRoutePermission(backendRoutes, tmpRoute)) {
      if (tmpRoute.children) {
        tmpRoute.children = filterBackendRoutes(tmpRoute.children, backendRoutes)
        if (tmpRoute.children.length) {
          // 如果后端返回了meta 则以后端返回的meta里的内容为准  没返回的则已前端为准
          if (backendRouteItem.meta) {
            Object.keys(backendRouteItem.meta).forEach(key => {
              tmpRoute.meta[key] = backendRouteItem.meta[key]
            })
          }
          res.push(tmpRoute)
        }
      } else {
        // 如果后端返回了meta 则以后端返回的meta里的内容为准  没返回的则已前端为准
        if (backendRouteItem.meta) {
          Object.keys(backendRouteItem.meta).forEach(key => {
            tmpRoute.meta[key] = backendRouteItem.meta[key]
          })
        }
        res.push(tmpRoute)
      }
    }
  })
  return res
}

export const usePermissionsStore = defineStore('route', {
  state: () => ({
    // 路由表
    routes: [] as RouteRecordRaw[]
  }),

  getters: {

  },

  actions: {
    init() {
      this.routes = []
    },
    // 增加路由
    setRoutes(newRoutes) {
      this.routes = [...constantRoutes, ...newRoutes]
    },
    // 根据权限筛选路由
    filterPermissionsRoutes(): Promise<RouteRecordRaw[]> {
      const useAppConfig = useAppConfigStore()
      return new Promise(async resolve => {
        let routes = [] as RouteRecordRaw[]
        if (useAppConfig.getEnablePermission) {
          const userStore = useUserStore()

          // 后端路由
          if (useAppConfig.getRouteMode === 'backend') {
            const backendRoutes = await userStore.getBackendRoutes()
            routes = filterBackendRoutes(privateRoutes, backendRoutes)
          } else {
            // 前端路由
            const permissions = await userStore.getPermissions()
            routes = filterPrivateRoutes(privateRoutes, permissions)
          }
        } else {
          routes = [...privateRoutes]
        }
        // 最后添加 不匹配路由进入 404
        routes.push({
          path: '/:pathMatch(.*)',
          name: '404',
          component: () => import('@/views/404.vue')
        })
        this.setRoutes(routes)

        // routes 处理后的异步路由
        resolve(routes)
      })
    }
  }
})

export function usePermissionsOutsideStore() {
  return usePermissionsStore(piniaStore)
}
