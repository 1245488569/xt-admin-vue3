import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'demo',
  name: 'demo',
  component: () => import('@/views/demo/index.vue'),
} as RouteRecordRaw
