import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/components',
  name: 'components',
  redirect: '/components/dialog',
  component: () => import('@/layouts/index.vue'),
  children: [
    {
      path: 'dialog',
      name: 'dialog',
      component: () => import('@/views/components/dialog/index.vue'),
    },
  ],
} as RouteRecordRaw
