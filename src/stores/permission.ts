import type { RouteRecordRaw } from 'vue-router'
import { useAppConfigStore } from './app'
import privateRoutes from '@/router/privateRoutes'
import constantRoutes from '@/router/constant'

export const usePermissionStore = defineStore('route', () => {
  // 过滤完成的路由表（固定路由+动态路由）
  let routes = [] as RouteRecordRaw[]

  const allPrivateChildrenRoutes = computed(() => {
    // let routes: RouteRecordRaw[] = []
    // privateRoutes.forEach((item) => {
    //   routes = [...routes, ...item.children]
    // })
    // return routes
    return privateRoutes.map(item => item.children).flat()
  })

  function setRoutes(needDynamicallyAddRoutes: RouteRecordRaw[]) {
    routes = [...constantRoutes, ...needDynamicallyAddRoutes]
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

  return { routes, filterPermissionsRoutes }
})
