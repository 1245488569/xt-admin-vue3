import * as path from 'path-browserify'
import { isEmpty } from '@/util'
import { useAppConfigStore } from '@/store/app'
import { usePermissionsStore } from '@/store/permission'
export default function useMenus() {
  const permissionsStore = usePermissionsStore()
  const useAppConfig = useAppConfigStore()

  /**
   * 合并 path 作为跳转路径
   * @param {*} routes router.getRoutes()
   */
  const mergeRoutePath = (route, basePath = '') => {
    for (let i = 0; i < route.length; i++) {
      const r = route[i]
      r.path = path.resolve(basePath, r.path)
      if (!isEmpty(r.children)) {
        mergeRoutePath(r.children, r.path)
      }
    }
    return route
  }
  /**
   * 根据 filterRouters 数据，返回对应 menu 规则数组
   * forEach中的return 相当于 continue
   */
  const generateMenus = filterRoutersData => {
    const result: any[] = []
    filterRoutersData.forEach(item => {
      // meta为空 children为空  比如登录 404...
      if (isEmpty(item.meta) && isEmpty(item.children)) return

      // meta为空 children不为空  比如 '/'
      if (isEmpty(item.meta) && !isEmpty(item.children)) {
        result.push(...generateMenus(item.children))
        return
      }
      // 1.meta children都不为空 2.meta不为空 children为空
      let route = result.find(res => res.name === item.name)
      if (!route) {
        route = {
          ...item,
          children: []
        }

        if (route?.meta?.title && item.meta.hideInMenu !== true) {
          // 这里可能出现的情况是 dashboard已经在tabbar中了 但是又设置了enableDashboard为false 就出现bug了
          // 这里不去处理此bug 是因为 是否开始dashboard是在一开始就决定的 就算出现了 自己手动关闭一下就好
          if (!useAppConfig.app.enableDashboard && route.name === 'dashboard')
            return

          result.push(route)
        }

        if (item.children) {
          route?.children?.push(...generateMenus(item.children))
        }
      }
    })

    return result
  }
  // 过滤权限并补全路径后的路由
  const allDealRoute = mergeRoutePath(permissionsStore.routes)
  // 所有在侧边可以展示的菜单
  const allSidebarMenu = generateMenus(allDealRoute)

  // 展示的次菜单
  const menus = computed(() => {
    if (['onlyTopNav', 'onlySubSideNav'].includes(useAppConfig.getLayoutMode)) {
      return allSidebarMenu
    } else {
      return allMainMenu.value[permissionsStore.mainMenuActive].children
    }
  })
  // 所有菜单
  const allMainMenu = computed(() => {
    return permissionsStore.newPrivateRoutes.map(v => {
      return {
        parentIndex: v.parentIndex,
        title: v.title,
        icon: v.icon,
        children: allSidebarMenu.filter(k => k.parentIndex === v.parentIndex)
      }
    })
  })

  return {
    menus,
    allMainMenu,
    allSidebarMenu,
    allDealRoute,
    generateMenus
  }
}
