import type { RouteRecordRaw } from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import { useAppConfigStore } from './app'
import privateRoutes from '@/router/privateRoutes'
import constantRoutes from '@/router/constant'
import type { IPrivateRoutes } from '@/router/types/privateRoutes'
import { isEmpty } from '@/utils'

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
    return new Promise((resolve) => {
      let routes: RouteRecordRaw[] = []
      if (useAppConfig.getEnablePermission) {
        // TODO: 按权限过滤路由
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
