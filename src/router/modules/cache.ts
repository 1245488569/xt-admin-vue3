import { RouteRecordRaw } from 'vue-router'
const Layout = () => import('@/layouts/index.vue')
const EmptyRoute = () => import('@/layouts/empty.vue')

export default {
  path: '/cache',
  name: 'cache',
  component: Layout,
  redirect: '/cache/normal',
  // redirect: { name: 'cacheNormal' },
  meta: {
    title: '缓存demo',
    icon: 'ep:avatar'
  },
  children: [
    {
      path: 'normal',
      name: 'cacheNormal',
      component: () => import('@/views/cache/normal/index.vue'),
      meta: {
        title: '普通缓存',
        icon: 'ep:bell',
        cache: true,
      }
    },
    {
      path: 'special',
      name: 'special',
      redirect: { name: 'cacheSpecial' },
      component: EmptyRoute,
      meta: {
        title: '多级缓存1',
        icon: 'ep:alarm-clock'
      },
      children: [
        {
          path: 'cache-special',
          name: 'cacheSpecial',
          redirect: { name: 'cacheSpecialSpecial' },
          component: EmptyRoute,
          meta: {
            title: '多级缓存1-1',
            icon: 'ep:alarm-clock'
          },
          children: [
            {
              path: 'cache-special-special',
              name: 'cacheSpecialSpecial',
              redirect: { name: 'cacheSpecialSpecialSpecial' },
              component: EmptyRoute,
              meta: {
                title: '多级缓存1-1-1',
                icon: 'ep:alarm-clock'
              },
              children: [
                {
                  path: 'cache-special-special-special',
                  name: 'cacheSpecialSpecialSpecial',
                  component: () => import('@/views/cache/special/index.vue'),
                  meta: {
                    title: '多级缓存1-1-1-1',
                    icon: 'ep:alarm-clock',
                    cache: true
                  },
                }
              ]
            }
          ]
        }
      ]
    },
  ]
} as RouteRecordRaw
