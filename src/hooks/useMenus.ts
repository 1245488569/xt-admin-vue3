import type { RouteRecordRaw } from 'vue-router'
import * as path from 'path-browserify'
import cloneDeep from 'lodash/cloneDeep'
import { usePermissionStore } from '@/stores/permission'
import { useAppConfigStore } from '@/stores/app'
import { isEmpty } from '@/utils'

function mergeRoutePath(routes: RouteRecordRaw[], basePath = '') {
  for (let i = 0; i < routes.length; i++) {
    const r = routes[i]
    r.path = path.resolve(basePath, r.path)
    if (!isEmpty(r.children))
      mergeRoutePath(r.children!, r.path)
  }
  return routes
}

function generateMenus(allMergePathRoutes: RouteRecordRaw[]) {
  const result: RouteRecordRaw[] = []
  for (const item of allMergePathRoutes) {
    if (isEmpty(item.meta) && isEmpty(item.children))
      continue
    if (isEmpty(item.meta) && !isEmpty(item.children)) {
      result.push(...generateMenus(item.children!))
      continue
    }
    let route = result.find(res => res.path === item.path)
    if (!route) {
      route = {
        ...item,
        children: [],
      }

      if (route.meta?.title && !route.meta.hideInMenu) {
        // TODO: dashboard页面是否开启的判断
        // ...
        result.push(route)
      }

      if (!isEmpty(item.children))
        route.children?.push(...generateMenus(item.children!))
    }
  }

  return result
}

export default function useMenus() {
  const usePermission = usePermissionStore()
  const useAppConfig = useAppConfigStore()
  const allMergePathRoutes = mergeRoutePath(cloneDeep(usePermission.routes))
  const allSubMenu = generateMenus(allMergePathRoutes)

  const allMainMenu = computed(() => {
    return usePermission.addIndexPrivateRoutes.map((v) => {
      return {
        parentIndex: v.parentIndex,
        title: v.title,
        icon: v.icon,
        children: allSubMenu.filter(k => k.parentIndex === v.parentIndex),
      }
    })
  })

  const menus = computed(() => {
    if (['onlyTopNav', 'onlySubSideNav'].includes(useAppConfig.getLayoutMode))
      return allSubMenu

    else
      return allMainMenu.value[usePermission.mainMenuActive].children
  })

  return {
    menus,
    allMainMenu,
  }
}
