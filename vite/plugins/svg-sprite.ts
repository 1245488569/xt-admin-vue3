import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export default function setupSvgIcons(isBuild: boolean) {
  return createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/')],
    svgoOptions: isBuild,
    symbolId: 'icon-[dir]-[name]'
  })
}
