import { createRouter, createWebHashHistory } from 'vue-router'
import constantRoutes from './constant'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    ...constantRoutes,
  ],
})

export default router
