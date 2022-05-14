import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default function setupComponents() {
  return Components({
    resolvers: [IconsResolver(), ElementPlusResolver()],
    dirs: ['src/components'],
    include: [/\.vue$/, /\.vue\?vue/, /\.jsx$/, /\.tsx$/],
    dts: 'types/components.d.ts'
  })
}
