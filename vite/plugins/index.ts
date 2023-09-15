import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import setupAutoImport from './auto-import'
import setupComponents from './components'
import setupSvgIcon from './svg-icon'
import setupIcons from './icon'
import setupMock from './mock'

export default function setupVitePlugins(viteEnv: Record<string, string>, isBulid: boolean) {
  const { VITE_USE_MOCK } = viteEnv

  const plugins: PluginOption[] = [vue(), vueJsx(), UnoCSS()]
  plugins.push(setupAutoImport())
  plugins.push(setupComponents())
  plugins.push(setupIcons())
  plugins.push(setupSvgIcon(isBulid))
  VITE_USE_MOCK === 'true' && plugins.push(setupMock(isBulid))
  return plugins
}
