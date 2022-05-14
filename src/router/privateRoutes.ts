import { RouteRecordRaw } from 'vue-router'
import demo1Routes from './modules/demo1'
import testRoutes from './modules/test'
import cacheRoutes from './modules/cache'
import backendRoutes from './modules/backend'

const privateRoutes: RouteRecordRaw[] = [
  demo1Routes,
  testRoutes,
  cacheRoutes,
  backendRoutes,
]

export default privateRoutes
