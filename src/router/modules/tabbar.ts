import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/tabbar',
  name: 'tabbar',
  component: () => import('@/layouts/index.vue'),
  redirect: '/tabbar/index',
  children: [
    {
      path: 'index',
      name: 'TabbarIndex',
      component: () => import('@/views/tabbar/index.vue'),
      meta: {
        title: 'route.tabbar',
        icon: 'ri:ai-generate',
      },
    },
  ],
} as RouteRecordRaw
