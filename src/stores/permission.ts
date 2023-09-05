import type { RouteRecordRaw } from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import { useAppConfigStore } from './app'
import { useUserStore } from './user'
import type { Ipermissions } from './types/permission'
import privateRoutes from '@/router/privateRoutes'
import constantRoutes from '@/router/constant'
import type { IPrivateRoutes } from '@/router/types/privateRoutes'
import { isEmpty } from '@/utils'

function hasPermission(permissions: Ipermissions, route: RouteRecordRaw) {
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

function filterPrivateRoutes(routes: RouteRecordRaw[], permissions: Ipermissions) {
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
          // ...
        }
        else {
          const permissions = await useUser.getPermissions()
          routes = filterPrivateRoutes(allPrivateChildrenRoutes.value, permissions)
          console.log(routes)
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

  return { routes, mainMenuActive, addIndexPrivateRoutes, filterPermissionsRoutes, changeMainMenu }
})
