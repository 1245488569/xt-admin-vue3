import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/cache',
  name: 'cache',
  component: () => import('@/layouts/index.vue'),
  redirect: { name: 'cache1' },
  meta: {
    title: '多级导航缓存',
    icon: 'ri:menu-3-line',
  },
  children: [
    {
      path: 'cache1',
      name: 'cache1',
      redirect: { name: 'cache1-1' },
      meta: {
        title: '导航1',
      },
      children: [
        {
          path: 'cache1-1',
          name: 'cache1-1',
          redirect: { name: 'cache1-1-1' },
          meta: {
            title: '导航1-1',
          },
          children: [
            {
              path: 'cache1-1-1',
              name: 'cache1-1-1',
              component: () => import('@/views/cache/cache1.vue'),
              meta: {
                title: '导航1-1-1',
              },
            },
          ],
        },
        {
          path: 'cache1-2',
          name: 'cache1-2',
          component: () => import('@/views/cache/cache1-2.vue'),
          meta: {
            title: '导航1-2',
          },
        },
      ],
    },
    {
      path: 'cache2',
      name: 'cache2',
      meta: {
        title: '导航2',
      },
      component: () => import('@/views/cache/cache2.vue'),
    },
  ],
} as RouteRecordRaw
