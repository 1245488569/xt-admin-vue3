import cacheRoutes from './modules/cache'
import listRoutes from './modules/list'
import permission from './modules/permission'
import type { IPrivateRoutes } from './types/privateRoutes'

const privateRoutes: IPrivateRoutes[] = [
  {
    title: '演示',
    icon: 'ep:apple',
    children: [cacheRoutes, listRoutes, permission],
  },
]

export default privateRoutes
