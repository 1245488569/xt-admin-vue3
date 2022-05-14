import router from '@/router'
import { RouteRecordRaw } from 'vue-router'
import * as path from 'path-browserify'
import { isEmpty } from '@/util'
import { useAppConfigStore } from '@/store/app'

export default function useMenus() {
  const menus = computed(() => {
    const filterRoutes = filterRouters(router.getRoutes())
    return generateMenus(filterRoutes)
  })

  const getChildrenRoutes = routes => {
    const result: RouteRecordRaw[] = []
    routes.forEach(route => {
      if (route.children && route.children.length) {
        result.push(...route.children)
      }
    })

    return result
  }

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
  * 处理脱离层级的路由：某个路由为其他子路由，则剔除该路由，保留路由顶层(因为顶层中已经含有了被剔除的路由)
  * @param {*} routes router.getRoutes()
  */
  const filterRouters = routes => {
    const childrenRoutes = getChildrenRoutes(routes)
    const res = routes.filter(route => {
      return !childrenRoutes.find(childrenRoute => childrenRoute.name === route.name)
    })
    return mergeRoutePath(res)
  }

  /**
  * 根据 filterRouters 数据，返回对应 menu 规则数组
  * forEach中的return 相当于 continue
  */
  const generateMenus = (filterRoutersData) => {
    const useAppConfig = useAppConfigStore()
    const result: RouteRecordRaw[] = []
    filterRoutersData.forEach(item => {
      if (isEmpty(item.meta) && isEmpty(item.children)) return

      if (isEmpty(item.meta) && !isEmpty(item.children)) {
        result.push(...generateMenus(item.children))
        return
      }
      let route = result.find(res => res.name === item.name)
      if (!route) {
        route = {
          ...item,
          children: []
        }

        if (route?.meta?.title && item.meta.hideInMenu !== true) {
          if (!useAppConfig.app.enableDashboard && route.name === 'dashboard') return
          result.push(route)
        }

        if (item.children) {
          route?.children?.push(...generateMenus(item.children))
        }
      }

    })

    return result
  }

  return {
    menus,
    filterRouters,
    generateMenus
  }
}
