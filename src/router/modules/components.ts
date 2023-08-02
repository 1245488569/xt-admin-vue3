import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'components',
  name: 'components',
  children: [
    {
      path: 'dialog',
      name: 'dialog',
      component: () => import('@/views/components/dialog/index.vue'),
    },
  ],
} as RouteRecordRaw
