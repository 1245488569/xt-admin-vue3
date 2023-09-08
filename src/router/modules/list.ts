import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/list',
  name: 'List',
  component: () => import('@/layouts/index.vue'),
  redirect: '/list/user',
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
        auth: ['user.read1'],
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
        auth: 'user.detail',
      },
    },

    {
      path: 'goods',
      name: 'Goods',
      redirect: '/list/goods/index',
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
