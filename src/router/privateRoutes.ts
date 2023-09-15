import cacheRoutes from './modules/cache'
import listRoutes from './modules/list'
import type { IPrivateRoutes } from './types/privateRoutes'

const privateRoutes: IPrivateRoutes[] = [
  {
    title: '演示',
    icon: 'ep:apple',
    children: [cacheRoutes, listRoutes],
  },
]

export default privateRoutes
