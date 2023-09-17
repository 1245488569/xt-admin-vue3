import type { RouteRecordRaw } from 'vue-router'

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      isWhite: true,
    },
  },
  {
    path: '/',
    name: 'root',
    component: () => import('@/layouts/index.vue'),
    children: [
      {
        parentIndex: 0,
        path: '',
        name: 'frame_dashboard',
        component: () => import('@/views/frame_dashboard/index.vue'),
        meta: {
          title: 'route.dashboard',
          icon: 'ri:home-heart-fill',
        },
      },
      {
        path: 'personal',
        name: 'personal',
        component: () => import('@/views/personal/index.vue'),
      },
      {
        path: 'reload',
        name: 'reload',
        component: () => import('@/views/reload.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: () => import('@/views/404.vue'),
  },
]

export default constantRoutes
