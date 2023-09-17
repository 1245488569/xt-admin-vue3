import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/permission',
  name: 'permission',
  component: () => import('@/layouts/index.vue'),
  redirect: '/permission/index',
  children: [
    {
      path: 'index',
      name: 'PermissionIndex',
      component: () => import('@/views/permission/index.vue'),
      meta: {
        title: '权限验证',
        icon: 'ri:lock-fill',
      },
    },
  ],
} as RouteRecordRaw
