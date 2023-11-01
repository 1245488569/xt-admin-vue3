import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/component',
  name: 'Component',
  component: () => import('@/layouts/index.vue'),
  redirect: '/component/form',
  meta: {
    title: '组件',
    icon: 'ep:list',
  },
  children: [
    {
      path: 'form',
      name: 'ComponentForm',
      component: () => import('@/views/component/form.vue'),
      meta: {
        title: '表单组件',
      },
    },
    {
      path: 'icon',
      name: 'ComponentIcon',
      component: () => import('@/views/component/icon.vue'),
      meta: {
        title: '图标选择器',
      },
    },
    {
      path: 'pcas',
      name: 'ComponentPcas',
      component: () => import('@/views/component/pcas.vue'),
      meta: {
        title: '省市区选择',
      },
    },
  ],
} as RouteRecordRaw
