import components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default function setupComponents() {
  return components({
    resolvers: [IconsResolver()],
    dirs: ['src/components'],
    include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
    dts: 'types/components.d.ts',
  })
}
