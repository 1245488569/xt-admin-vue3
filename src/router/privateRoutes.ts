import cacheRoutes from './modules/cache'
import listRoutes from './modules/list'
import permission from './modules/permission'
import tabbar from './modules/tabbar'
import mock from './modules/mock'
import type { IPrivateRoutes } from './types/privateRoutes'

const privateRoutes: IPrivateRoutes[] = [
  {
    title: '演示',
    icon: 'ep:apple',
    children: [cacheRoutes, listRoutes, permission, tabbar, mock],
  },
]

export default privateRoutes
