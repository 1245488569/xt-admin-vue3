import { RouteRecordRaw } from 'vue-router'
const Layout = () => import('@/layouts/index.vue')

export default {
  path: '/backend',
  name: 'backend',
  component: Layout,
  redirect: '/backend/backend1',
  meta: {
    title: 'backend',
    icon: 'ep:apple'
  },
  children: [
    {
      path: 'backend1',
      name: 'backend1',
      component: () => import('@/views/backend/backend1/index.vue'),
      meta: {
        title: 'backend1',
        icon: 'ep:apple'
      }
    },
    {
      path: 'backend2',
      name: 'backend2',
      component: () => import('@/views/backend/backend2/index.vue'),
      meta: {
        title: 'backend2',
        icon: 'ep:apple'
      }
    }
  ]
} as RouteRecordRaw
