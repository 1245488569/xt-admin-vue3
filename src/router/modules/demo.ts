import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/demo1',
  name: 'demo1',
  component: () => import('@/layouts/index.vue'),
  redirect: '/demo1/demo1-1',
  meta: {
    title: '演示1',
    icon: 'ep:apple',
  },
  children: [
    {
      path: 'demo1-1',
      name: 'demo1-1',
      component: () => import('@/views/demo/index.vue'),
      meta: {
        title: '演示1-1',
        icon: 'ep:apple',
      },
    },
  ],

} as RouteRecordRaw
