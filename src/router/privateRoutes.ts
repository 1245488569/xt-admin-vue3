import cacheRoutes from './modules/cache'
import demoRoutes from './modules/demo'
import demoRoutes2 from './modules/demo2'
import type { IPrivateRoutes } from './types/privateRoutes'

const privateRoutes: IPrivateRoutes[] = [
  {
    title: '演示',
    icon: 'ep:apple',
    children: [cacheRoutes],
  },
  {
    title: '主导航2',
    icon: 'ep:apple',
    children: [demoRoutes],
  },
  {
    title: '主导航3',
    icon: 'ep:apple',
    children: [demoRoutes2],
  },
]

export default privateRoutes
