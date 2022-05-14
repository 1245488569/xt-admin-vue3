import { RouteRecordRaw } from 'vue-router'
const Layout = () => import('@/layouts/index.vue')
const EmptyRoute = () => import('@/layouts/empty.vue')

export default {
  path: '/demo',
  name: 'demo',
  component: Layout,
  redirect: '/demo/demo1',
  meta: {
    title: 'demo',
    icon: 'ep:avatar'
  },
  children: [
    {
      path: 'demo1',
      name: 'demo1',
      component: () => import('@/views/demo/demo1/index.vue'),
      meta: {
        title: 'demo1',
        icon: 'ep:bell'
      }
    },
    {
      path: 'demo2',
      name: 'demo2',
      redirect: { name: 'demo2Index' },
      component: EmptyRoute,
      meta: {
        title: 'demo2',
        icon: 'ep:alarm-clock'
      },
      children: [
        {
          path: 'index',
          name: 'demo2Index',
          component: EmptyRoute,
          redirect: { name: 'demo2IndexIndex' },
          meta: {
            title: 'demo2-1'
          },
          children: [
            {
              path: 'index',
              name: 'demo2IndexIndex',
              component: () => import('@/views/demo/demo2/index.vue'),
              meta: {
                title: 'demo2-1',
                icon: 'ep:alarm-clock',
                hideInMenu: true,
                hideInBreadcrumb: true,
                activeMenu: '/demo/demo2/index'
              },
            },
            {
              path: 'detail',
              name: 'demo2Detail',
              component: () => import('@/views/demo/demo2/detail.vue'),
              meta: {
                title: 'demo2Detail',
                hideInMenu: true,
                hideInSearch: true,
                activeMenu: '/demo/demo2/index',
                mergeTabbarPath: '/demo/demo2/index/index'
              }
            }
          ]
        },
      ]
    },
    {
      path: 'demo3',
      name: 'demo3',
      redirect: { name: 'demo3Index' },
      component: EmptyRoute,
      meta: {
        title: 'demo3',
        icon: 'ep:alarm-clock'
      },
      children: [
        {
          path: 'index',
          name: 'demo3Index',
          component: () => import('@/views/demo/demo3/index.vue'),
          meta: {
            title: 'demo3',
            icon: 'ep:alarm-clock'
          }
        },
        {
          path: 'detail',
          name: 'demo3Detail',
          component: () => import('@/views/demo/demo3/detail.vue'),
          meta: {
            title: 'demo3Detail',
            hideInMenu: true,
            hideInSearch: true,
            activeMenu: '/demo/demo3/index'
          }
        }
      ]
    },

    // {
    //   path: 'demo4',
    //   name: 'demo4',
    //   component: () => import('@/views/demo/demo3/index.vue'),
    //   meta: {
    //     title: 'demo4'
    //   }
    // },
    // {
    //   path: 'demo5',
    //   name: 'demo5',
    //   component: () => import('@/views/demo/demo3/index.vue'),
    //   meta: {
    //     title: 'demo3'
    //   }
    // },
    // {
    //   path: 'demo6',
    //   name: 'demo6',
    //   component: () => import('@/views/demo/demo3/index.vue'),
    //   meta: {
    //     title: 'demo3'
    //   }
    // },
    // {
    //   path: 'demo7',
    //   name: 'demo7',
    //   component: () => import('@/views/demo/demo3/index.vue'),
    //   meta: {
    //     title: 'demo3'
    //   }
    // },
    // {
    //   path: 'demo8',
    //   name: 'demo8',
    //   component: () => import('@/views/demo/demo3/index.vue'),
    //   meta: {
    //     title: 'demo3'
    //   }
    // },
    // {
    //   path: 'demo9',
    //   name: 'demo9',
    //   component: () => import('@/views/demo/demo3/index.vue'),
    //   meta: {
    //     title: 'demo3'
    //   }
    // },
    // {
    //   path: 'demo10',
    //   name: 'demo10',
    //   component: () => import('@/views/demo/demo3/index.vue'),
    //   meta: {
    //     title: 'demo3'
    //   }
    // },
    // {
    //   path: 'demo11',
    //   name: 'demo11',
    //   component: () => import('@/views/demo/demo3/index.vue'),
    //   meta: {
    //     title: 'demo3'
    //   }
    // },
    // {
    //   path: 'demo12',
    //   name: 'demo12',
    //   component: () => import('@/views/demo/demo3/index.vue'),
    //   meta: {
    //     title: 'demo3'
    //   }
    // },
    // {
    //   path: 'demo13',
    //   name: 'demo13',
    //   component: () => import('@/views/demo/demo3/index.vue'),
    //   meta: {
    //     title: 'demo3'
    //   }
    // },
    // {
    //   path: 'demo14',
    //   name: 'demo14',
    //   component: () => import('@/views/demo/demo3/index.vue'),
    //   meta: {
    //     title: 'demo3'
    //   }
    // },
    // {
    //   path: 'demo15',
    //   name: 'demo15',
    //   component: () => import('@/views/demo/demo3/index.vue'),
    //   meta: {
    //     title: 'demo3'
    //   }
    // },
    // {
    //   path: 'demo16',
    //   name: 'demo16',
    //   component: () => import('@/views/demo/demo3/index.vue'),
    //   meta: {
    //     title: 'demo3'
    //   }
    // },
    // {
    //   path: 'demo17',
    //   name: 'demo17',
    //   component: () => import('@/views/demo/demo3/index.vue'),
    //   meta: {
    //     title: 'demo3'
    //   }
    // },
    // {
    //   path: 'demo18',
    //   name: 'demo18',
    //   component: () => import('@/views/demo/demo3/index.vue'),
    //   meta: {
    //     title: 'demo3'
    //   }
    // },
    // {
    //   path: 'demo19',
    //   name: 'demo19',
    //   component: () => import('@/views/demo/demo3/index.vue'),
    //   meta: {
    //     title: 'demo3'
    //   }
    // },
    // {
    //   path: 'demo20',
    //   name: 'demo20',
    //   component: () => import('@/views/demo/demo3/index.vue'),
    //   meta: {
    //     title: 'demo3'
    //   }
    // },
    // {
    //   path: 'demo21',
    //   name: 'demo21',
    //   component: () => import('@/views/demo/demo3/index.vue'),
    //   meta: {
    //     title: 'demo3'
    //   }
    // },
    // {
    //   path: 'demo22',
    //   name: 'demo22',
    //   component: () => import('@/views/demo/demo3/index.vue'),
    //   meta: {
    //     title: 'demo3'
    //   }
    // },
    // {
    //   path: 'demo23',
    //   name: 'demo23',
    //   component: () => import('@/views/demo/demo3/index.vue'),
    //   meta: {
    //     title: 'demo23'
    //   }
    // },
  ]
} as RouteRecordRaw
