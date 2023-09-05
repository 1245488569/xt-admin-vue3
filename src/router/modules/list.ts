import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/list',
  name: 'List',
  component: () => import('@/layouts/index.vue'),
  redirect: { name: 'UserIndex' },
  meta: {
    title: '列表',
    icon: 'ep:list',
  },
  children: [
    {
      path: 'user',
      name: 'UserIndex',
      component: () => import('@/views/list/user/index.vue'),
      meta: {
        title: '用户列表',
      },
    },
    {
      path: 'detail',
      name: 'UserDetail',
      component: () => import('@/views/list/user/detail.vue'),
      meta: {
        title: '用户详情',
        hideInMenu: true,
        hideInSearch: true,
        activeMenu: '/list/user',
        mergeTabbarPath: '/list/user',
      },
    },

    {
      path: 'goods',
      name: 'Goods',
      redirect: { name: 'GoodsIndex' },
      meta: {
        title: '商品列表',
      },
      children: [
        {
          path: 'index',
          name: 'GoodsIndex',
          component: () => import('@/views/list/goods/index.vue'),
          meta: {
            title: '商品列表',
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
            title: '商品详情',
            hideInMenu: true,
            hideInSearch: true,
            activeMenu: '/list/goods',
          },
        },
      ],
    },
  ],
} as RouteRecordRaw
