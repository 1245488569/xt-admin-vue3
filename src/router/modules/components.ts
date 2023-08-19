import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'components',
  name: 'components',
  redirect: '/components/dialog',
  children: [
    {
      path: 'dialog',
      name: 'dialog',
      redirect: '/components/dialog/dialog1-1',
      children: [
        {
          path: 'dialog1-1',
          name: 'dialog1-1',
          component: () => import('@/views/components/dialog/index.vue'),
        },
      ],
    },
  ],
} as RouteRecordRaw
