import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/mock',
  name: 'mock',
  component: () => import('@/layouts/index.vue'),
  redirect: '/mock/index',
  children: [
    {
      path: 'index',
      name: 'MockIndex',
      component: () => import('@/views/mock/index.vue'),
      meta: {
        title: 'mock',
        icon: 'ri:discord-fill',
      },
    },
  ],
} as RouteRecordRaw
