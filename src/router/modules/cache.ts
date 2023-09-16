import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/cache',
  name: 'cache',
  component: () => import('@/layouts/index.vue'),
  redirect: '/cache/cache1',
  meta: {
    title: 'route.multimenu.root',
    icon: 'ri:menu-3-line',
  },
  children: [
    {
      path: 'cache1',
      name: 'cache1',
      redirect: '/cache/cache1/cache1-1',
      meta: {
        title: 'route.multimenu.page1',
      },
      children: [
        {
          path: 'cache1-1',
          name: 'cache1-1',
          redirect: '/cache/cache1/cache1-1/cache1-1-1',
          meta: {
            title: 'route.multimenu.level2.page1',
          },
          children: [
            {
              path: 'cache1-1-1',
              name: 'cache1-1-1',
              component: () => import('@/views/cache/cache1.vue'),
              meta: {
                title: 'route.multimenu.level2.level3.page',
                cache: true,
              },
            },
          ],
        },
        {
          path: 'cache1-2',
          name: 'cache1-2',
          component: () => import('@/views/cache/cache1-2.vue'),
          meta: {
            title: 'route.multimenu.level2.page2',
            cache: true,
          },
        },
      ],
    },
    {
      path: 'cache2',
      name: 'cache2',
      meta: {
        title: 'route.multimenu.page2',
        cache: true,
      },
      component: () => import('@/views/cache/cache2.vue'),
    },
  ],
} as RouteRecordRaw
