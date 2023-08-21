import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/demo2',
  name: 'demo2',
  component: () => import('@/layouts/index.vue'),
  children: [
    {
      path: '',
      name: 'demo2-1',
      component: () => import('@/views/demo2/index.vue'),
      meta: {
        title: '演示2-1',
        icon: 'ep:apple',
      },
    },
  ],
} as RouteRecordRaw
