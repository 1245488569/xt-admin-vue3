import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/component',
  name: 'Component',
  component: () => import('@/layouts/index.vue'),
  redirect: '/component/form',
  meta: {
    title: '组件',
    icon: 'ep:list',
  },
  children: [
    {
      path: 'icon',
      name: 'ComponentIcon',
      component: () => import('@/views/component/icon.vue'),
      meta: {
        title: '图标选择器',
      },
    },
  ],
} as RouteRecordRaw
