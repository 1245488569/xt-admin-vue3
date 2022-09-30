import { RouteRecordRaw } from 'vue-router'
const Layout = () => import('@/layouts/index.vue')

const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        parentIndex: 0,
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: 'route.dashboard',
          icon: 'ep:baseball'
        }
      },
      {
        path: 'personal',
        name: 'personal',
        component: () => import('@/views/personal/index.vue'),
        meta: {
          title: 'personal.personal',
          hideInMenu: true
        }
      },
      {
        path: 'reload',
        name: 'reload',
        component: () => import('@/views/reload.vue')
      }
    ]
  }
] as RouteRecordRaw[]

export default constantRoutes
