import { IPrivateRoute } from './type'
import demo1Routes from './modules/demo1'
import testRoutes from './modules/test'
import cacheRoutes from './modules/cache'
import backendRoutes from './modules/backend'
import components from './modules/components'

const privateRoutes: IPrivateRoute[] = [
  {
    title: '演示1',
    icon: 'ep:apple',
    children: [demo1Routes, components]
  },
  {
    title: '演示2',
    icon: 'ep:apple',
    children: [cacheRoutes, backendRoutes]
  },
  {
    title: '演示3',
    icon: 'ep:apple',
    children: [testRoutes]
  }
]

export default privateRoutes
