import vue from '@vitejs/plugin-vue'
import { Plugin } from 'vite'

import WindiCSS from 'vite-plugin-windicss'
import setupRestart from './restart'
import setupComponents from './components'
import setupAutoImport from './auto-import'
import setupIcons from './icon'
import setupSvgIcons from './svg-sprite'
import setupStyleImport from './style-import'
import setupCompression from './compression'
import setupMock from './mock'
import setupPwa from './pwa'
import setupSetupExtend from './setup-extend'

export default function setupVitePlugins(isBuild: boolean, env: Record<string, string>) {
  const { VITE_BUILD_COMPRESS, VITE_USE_PWA, VITE_USE_MOCK } = env
  const plugins: (Plugin | Plugin[])[] = [vue()]
  plugins.push(WindiCSS())
  !isBuild && plugins.push(setupRestart())
  plugins.push(setupAutoImport())
  plugins.push(setupComponents())
  plugins.push(setupStyleImport())

  plugins.push(setupSetupExtend())

  plugins.push(setupIcons())
  plugins.push(setupSvgIcons(isBuild))
  if (isBuild) {
    const compressList = VITE_BUILD_COMPRESS.split(',')
    if (compressList.includes('gzip') || compressList.includes('brotli')) {
      plugins.push(...setupCompression(env))
    }
  }
  VITE_USE_MOCK === 'true' && plugins.push(setupMock(isBuild))
  isBuild && VITE_USE_PWA === 'true' && plugins.push(setupPwa(env))
  return plugins
}
