import demoRoutes from './modules/demo'
import type { IPrivateRoutes } from './types/privateRoutes'

const privateRoutes: IPrivateRoutes[] = [
  {
    title: '演示1',
    icon: 'ep:apple',
    children: [demoRoutes],
  },
  {
    title: '演示1',
    icon: 'ep:apple',
    children: [demoRoutes],
  },
]

export default privateRoutes
