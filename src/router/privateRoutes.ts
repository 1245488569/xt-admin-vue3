import cacheRoutes from './modules/cache'
import listRoutes from './modules/list'
import permission from './modules/permission'
import tabbar from './modules/tabbar'
import mock from './modules/mock'
import directives from './modules/directives'
import component from './modules/component'
import type { IPrivateRoutes } from './types/privateRoutes'

const privateRoutes: IPrivateRoutes[] = [
  {
    title: '演示',
    icon: 'ep:apple',
    children: [cacheRoutes, listRoutes, permission, tabbar, mock, directives, component],
  },
]

export default privateRoutes
