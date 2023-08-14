import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'demo2',
  name: 'demo2',
  component: () => import('@/views/demo2/index.vue'),
} as RouteRecordRaw
