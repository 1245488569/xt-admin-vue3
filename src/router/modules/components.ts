import { RouteRecordRaw } from 'vue-router'
const Layout = () => import('@/layouts/index.vue')

export default {
  path: '/components',
  name: 'components',
  component: Layout,
  redirect: '/components/form',
  meta: {
    title: '组件',
    icon: 'ep:apple',
  },
  children: [
    {
      path: 'form',
      name: 'form',
      component: () => import('@/views/components/form/index.vue'),
      meta: {
        title: '表单',
        icon: 'ep:apple',
      }
    },
    {
      path: 'dialog',
      name: 'dialog',
      component: () => import('@/views/components/dialog/index.vue'),
      meta: {
        title: '弹框',
        icon: 'ep:apple',
      }
    },
    {
      path: 'table',
      name: 'table',
      component: () => import('@/views/components/table/index.vue'),
      meta: {
        title: '普通表格',
        icon: 'ep:apple',
      }
    },
  ]
} as RouteRecordRaw