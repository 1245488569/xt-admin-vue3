import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/directives',
  name: 'Directives',
  component: () => import('@/layouts/index.vue'),
  redirect: '/directives/copy',
  meta: {
    title: 'route.directives.root',
    icon: 'ri:secure-payment-fill',
  },
  children: [
    {
      path: 'copy',
      name: 'DirectivesCopy',
      component: () => import('@/views/directives/copy/index.vue'),
      meta: {
        title: 'route.directives.copy',
      },
    },
    {
      path: 'watermarker',
      name: 'DirectivesWatermarker',
      component: () => import('@/views/directives/watermarker/index.vue'),
      meta: {
        title: 'route.directives.watermarker',
      },
    },
  ],
} as RouteRecordRaw
