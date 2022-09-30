import { RouteRecordRaw } from 'vue-router'
const Layout = () => import('@/layouts/index.vue')

export default {
  path: '/test',
  name: 'test',
  component: Layout,
  redirect: '/test/test1',
  children: [
    {
      path: 'test1',
      name: 'test1',
      component: () => import('@/views/test/test1/index.vue'),
      meta: {
        title: 'test1',
        icon: 'ep:apple',
        auth: ['test']
      }
    }
  ]
} as RouteRecordRaw
