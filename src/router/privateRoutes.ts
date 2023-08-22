import demoRoutes from './modules/demo'
import demoRoutes2 from './modules/demo2'
import components from './modules/components'
import type { IPrivateRoutes } from './types/privateRoutes'

const privateRoutes: IPrivateRoutes[] = [
  {
    title: '主导航1',
    icon: 'ep:apple',
    children: [demoRoutes],
  },
  {
    title: '主导航2',
    icon: 'ep:apple',
    children: [demoRoutes2],
  },
  {
    title: '主导航3',
    icon: 'ep:apple',
    children: [components],
  },
]

export default privateRoutes
