import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
     // 标题
     title?: string
     // 菜单图标
     icon?: string
     // 是否在菜单中显示
     hideInMenu?: boolean
     // 是否在面包屑中显示
     hideInBreadcrumb?: boolean
     // 是否在搜索菜单中显示
     hideInSearch?: boolean
     // 要合并Tabbar的fullpath
     mergeTabbarPath?: string
     // 高亮的菜单
     activeMenu?: string
     // 权限
     auth?: string | string[]
     // 是否需要缓存
     cache?: boolean | string | string[]
     // 不缓存的页面name（当cache存在才生效）
     noCache?: string | string[]
  }

  interface _RouteRecordBase {
    parentIndex?: number
  }
 }