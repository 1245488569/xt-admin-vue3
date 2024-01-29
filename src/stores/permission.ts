import type { RouteRecordRaw } from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import { isObject } from 'lodash'
import { useAppConfigStore } from './app'
import { useUserStore } from './user'
import type { Ipermissions } from './types/permission'
import privateRoutes from '@/router/privateRoutes'
import constantRoutes from '@/router/constant'
import type { IPrivateRoutes } from '@/router/types/privateRoutes'
import { isEmpty } from '@/utils'

function hasPermission(permissions: Ipermissions, route: RouteRecordRaw): boolean {
  let isAuth = false
  if (route.meta?.auth) {
    isAuth = permissions.some((auth) => {
      if (typeof route.meta?.auth === 'string')
        return route.meta.auth === auth

      else
        return route.meta?.auth?.includes(auth)
    })
  }
  else {
    isAuth = true
  }
  return isAuth
}

function filterPrivateRoutes(routes: RouteRecordRaw[], permissions: Ipermissions): RouteRecordRaw[] {
  const res = [] as RouteRecordRaw[]
  routes.forEach((route) => {
    const tmpRoute = cloneDeep(route)
    if (hasPermission(permissions, tmpRoute)) {
      if (tmpRoute.children) {
        tmpRoute.children = filterPrivateRoutes(tmpRoute.children, permissions)
        tmpRoute.children.length && res.push(tmpRoute)
      }
      else {
        res.push(tmpRoute)
      }
    }
  })
  return res
}

function hasBackRoutePermission(backendRoutes: any[], route: RouteRecordRaw): boolean {
  let isAuth = false
  if (backendRoutes.some(v => v.name === route.name))
    isAuth = true

  return isAuth
}

function filterBackendRoutes(routes: RouteRecordRaw[], backendRoutes: any[]): RouteRecordRaw[] {
  const res = [] as RouteRecordRaw[]

  routes.forEach((route) => {
    const tmpRoute = cloneDeep(route)
    if (hasBackRoutePermission(backendRoutes, tmpRoute)) {
      const backendRouteItem = backendRoutes.find(item => item.name === tmpRoute.name)
      if (tmpRoute.children?.length) {
        tmpRoute.children = filterBackendRoutes(tmpRoute.children, backendRoutes)
        if (tmpRoute.children.length) {
          if (isObject(tmpRoute.meta) && isObject(backendRouteItem.meta)) {
            Object.keys(backendRouteItem.meta).forEach((key) => {
              tmpRoute.meta![key] = backendRouteItem.meta[key]
            })
          }
          res.push(tmpRoute)
        }
      }
      else {
        if (isObject(tmpRoute.meta) && isObject(backendRouteItem.meta)) {
          Object.keys(backendRouteItem.meta).forEach((key) => {
            tmpRoute.meta![key] = backendRouteItem.meta[key]
          })
        }
        res.push(tmpRoute)
      }
    }
  })

  return res
}

function addPrivateChildrenIndex(privateChildrenRoutes: RouteRecordRaw[], parentIndex: number) {
  privateChildrenRoutes.forEach((item) => {
    item.parentIndex = parentIndex
    if (!isEmpty(item.children))
      addPrivateChildrenIndex(item.children!, item.parentIndex)
  })
}

function addPrivateIndex(clonePrivateRoutes: IPrivateRoutes[]) {
  clonePrivateRoutes.forEach((item, i) => {
    item.parentIndex = i
    if (!isEmpty(item.children))
      addPrivateChildrenIndex(item.children, item.parentIndex)
  })

  return clonePrivateRoutes
}

export const usePermissionStore = defineStore('route', () => {
  // 过滤完成的路由表（固定路由+动态路由）
  const routes = ref<RouteRecordRaw[]>([])
  const mainMenuActive = ref(0)

  const addIndexPrivateRoutes = computed(() => {
    const clonePrivateRoutes = cloneDeep(privateRoutes)
    return addPrivateIndex(clonePrivateRoutes)
  })

  const allPrivateChildrenRoutes = computed(() => {
    // let routes: RouteRecordRaw[] = []
    // addIndexPrivateRoutes.value.forEach((item) => {
    //   routes = [...routes, ...item.children]
    // })
    // return routes
    return addIndexPrivateRoutes.value.map(item => item.children).flat()
  })

  function init() {
    routes.value = []
    mainMenuActive.value = 0
  }

  function setRoutes(needDynamicallyAddRoutes: RouteRecordRaw[]) {
    routes.value = [...constantRoutes, ...needDynamicallyAddRoutes]
  }

  function filterPermissionsRoutes(): Promise<RouteRecordRaw[]> {
    const useAppConfig = useAppConfigStore()
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve) => {
      let routes: RouteRecordRaw[] = []
      if (useAppConfig.getEnablePermission) {
        const useUser = useUserStore()
        if (useAppConfig.appConfig.app.routeMode === 'backend') {
          const backendRoutes = await useUser.getBackendRoutes()
          routes = filterBackendRoutes(allPrivateChildrenRoutes.value, backendRoutes)
        }
        else {
          const permissions = await useUser.getPermissions()
          routes = filterPrivateRoutes(allPrivateChildrenRoutes.value, permissions)
        }
      }
      else {
        routes = [...allPrivateChildrenRoutes.value]
      }

      setRoutes(routes)

      resolve(routes)
    })
  }

  function changeMainMenu(index: number) {
    mainMenuActive.value = index
  }

  return { routes, mainMenuActive, addIndexPrivateRoutes, init, filterPermissionsRoutes, changeMainMenu }
})
