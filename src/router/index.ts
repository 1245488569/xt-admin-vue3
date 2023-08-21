import { createRouter, createWebHashHistory } from 'vue-router'
import constantRoutes from './constant'
import { usePermissionStore } from '@/stores/permission'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    ...constantRoutes,
  ],
})

let sign = false
router.beforeEach(async (to, from, next) => {
  const usePermission = usePermissionStore()

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
})

export default router
