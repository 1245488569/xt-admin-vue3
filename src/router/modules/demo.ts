import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/demo1',
  name: 'demo1',
  component: () => import('@/layouts/index.vue'),
  redirect: '/demo1/demo1-1',
  children: [
    {
      path: 'demo1-1',
      name: 'demo1-1',
      component: () => import('@/views/demo/index.vue'),
    },
  ],

} as RouteRecordRaw
