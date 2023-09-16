import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/list',
  name: 'List',
  component: () => import('@/layouts/index.vue'),
  redirect: '/list/user',
  meta: {
    title: 'route.list.root',
    icon: 'ep:list',
  },
  children: [
    {
      path: 'user',
      name: 'UserIndex',
      component: () => import('@/views/list/user/index.vue'),
      meta: {
        title: 'route.list.page1',
        auth: 'user.read',
      },
    },
    {
      path: 'detail',
      name: 'UserDetail',
      component: () => import('@/views/list/user/detail.vue'),
      meta: {
        title: 'route.list.detail1',
        hideInMenu: true,
        hideInSearch: true,
        activeMenu: '/list/user',
        mergeTabbarPath: '/list/user',
        auth: 'user.detail',
      },
    },

    {
      path: 'goods',
      name: 'Goods',
      redirect: '/list/goods/index',
      meta: {
        title: 'route.list.page2',
      },
      children: [
        {
          path: 'index',
          name: 'GoodsIndex',
          component: () => import('@/views/list/goods/index.vue'),
          meta: {
            title: 'route.list.page2',
            hideInMenu: true,
            hideInBreadcrumb: true,
            activeMenu: '/list/goods',
          },
        },
        {
          path: 'detail',
          name: 'GoodsDetail',
          component: () => import('@/views/list/goods/detail.vue'),
          meta: {
            title: 'route.list.detail2',
            hideInMenu: true,
            hideInSearch: true,
            activeMenu: '/list/goods',
          },
        },
      ],
    },
  ],
} as RouteRecordRaw
