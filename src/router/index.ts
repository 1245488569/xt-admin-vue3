import { createRouter, createWebHashHistory } from 'vue-router'
import { useNProgress } from '@vueuse/integrations/useNProgress'
import { useTitle } from '@vueuse/core'
import constantRoutes from './constant'
import { usePermissionStore } from '@/stores/permission'
import { useAppConfigStore } from '@/stores/app'
import { useUserStore } from '@/stores/user'

const { isLoading } = useNProgress()
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    ...constantRoutes,
  ],
})

let sign = false
router.beforeEach(async (to, from, next) => {
  const useUser = useUserStore()
  const useAppConfig = useAppConfigStore()
  const usePermission = usePermissionStore()

  useAppConfig.appConfig.app.enableProgress && (isLoading.value = true)
  const title = useTitle()
  if (useAppConfig.appConfig.app.enableDynamicTitle)
    to.meta.title ? title.value = to.meta.title : title.value = import.meta.env.VITE_APP_TITLE
  else
    title.value = import.meta.env.VITE_APP_TITLE

  if (useUser.getToken) {
    if (!sign && !usePermission.routes.length) {
      const filterRoutes = await usePermission.filterPermissionsRoutes()
      sign = true
      filterRoutes.forEach((item) => {
        router.addRoute(item)
      })
      next(to.fullPath)
    }
    else {
      next()
    }
  }
  else {
    if (to.meta.isWhite) {
      next()
    }
    else {
      next({
        path: '/login',
        query: {
          redirectPath: to.fullPath,
        },
      })
    }
  }
})

router.afterEach(() => {
  const useAppConfig = useAppConfigStore()
  useAppConfig.appConfig.app.enableProgress && (isLoading.value = false)
})

export default router
