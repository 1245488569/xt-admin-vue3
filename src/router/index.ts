import { App } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { useAppConfigStore } from '@/store/app'
import { usePermissionsStore } from '@/store/permission'
import { useKeepAliveStore } from '@/store/keepAlive'
import { useUserStore } from '@/store/user'
import { useNProgress } from '@vueuse/integrations/useNProgress'
import constantRoutes from './constant'
import useMenus from '@/hooks/useMenus'
import { i18n } from '@/plugins/i18n'
import { useTitle } from '@vueuse/core'

const { isLoading } = useNProgress()

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...constantRoutes],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { left: 0, top: 0 }
    }
  }
})

// ------------------------------路由守卫相关------------------------------
// 白名单(无token可以进入的页面)
const whiteList = ['/login']
router.beforeEach(async(to, from, next) => {
  const useAppConfig = useAppConfigStore()
  const useUser = useUserStore()
  const usePermissions = usePermissionsStore()
  useAppConfig.app.enableProgress && (isLoading.value = true)
  // 设置页面标题
  const title = useTitle()
  if (useAppConfig.app.enableDynamicTitle) {
    if (to.meta.title) {
      title.value = i18n.global.te(to.meta.title) ? i18n.global.t(to.meta.title) : to.meta.title
    } else {
      title.value = import.meta.env.VITE_APP_TITLE
    }
  } else {
    title.value = import.meta.env.VITE_APP_TITLE
  }

  // 已登录
  if (useUser.getToken) {
    // 还没挂载过路由
    if (!usePermissions.routes.length) {
      const filterRoutes: RouteRecordRaw[] = await usePermissions.filterPermissionsRoutes()
      filterRoutes.forEach(item => {
        router.addRoute(item)
      })
      next({ ...to, replace: true })
    } else {
      // 已挂载过路由
      if (to.name) {
        if (to.matched.length) {
          // 已登录状态下 不允许前往登录页
          if (to.name === 'login') {
            next({
              name: 'dashboard',
              replace: true
            })
            // 如果前往的是dashboard 但是dashboard不存在
          } else if (to.name === 'dashboard' && !useAppConfig.app.enableDashboard) {
            // 进入第一个侧边栏导航
            const { menus } = useMenus()
            if (menus.value.length) {
              next({
                path: menus.value[0].path,
                replace: true
              })
            } else {
              next()
            }
          } else {
            next()
          }
        } else {
          // 手动到404
          next('/404')
        }
      } else {
        next()
      }
    }
  } else {
    if (!whiteList.includes(to.path)) {
      next({
        name: 'login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  }
})

router.afterEach((to, from) => {

  const useAppConfig = useAppConfigStore()
  const useKeepAlive = useKeepAliveStore()
  useAppConfig.app.enableProgress && (isLoading.value = false)

  if (to.meta.cache) {
    const componentName = to.matched[to.matched.length - 1].components.default.name
    if (componentName) {
      useKeepAlive.add(componentName)
    } else {
      console.warn('该页面没有设置name，无法缓存')
    }
  }

  if (from.meta.cache) {
    const componentName = from.matched[from.matched.length - 1].components.default.name
    if (componentName) {
      switch (typeof from.meta.cache) {
        case 'string':
          if (from.meta.cache !== to.name) {
            useKeepAlive.remove(componentName)
          }
          break
        case 'object':
          if (!from.meta.cache.includes(to.name as string)) {
            useKeepAlive.remove(componentName)
          }
          break
      }
      if (from.meta.noCache) {
        switch (typeof from.meta.noCache) {
          case 'string':
            if (from.meta.noCache === to.name) {
              useKeepAlive.remove(componentName)
            }
            break
          case 'object':
            if (from.meta.noCache.includes(to.name as string)) {
              useKeepAlive.remove(componentName)
            }
            break
        }
      }
      if (to.name === 'reload') {
        useKeepAlive.remove(componentName)
      }
    }
  }

})


export async function setupRouter(app: App) {
  app.use(router)
  await router.isReady()
}

export default router
