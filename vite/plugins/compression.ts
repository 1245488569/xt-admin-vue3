import compression from 'vite-plugin-compression'
import { Plugin } from 'vite'

export default function setupCompression(env: Record<string, string>) {
  const { VITE_BUILD_COMPRESS } = env
  const plugin:Plugin[] = []
  const compressList = VITE_BUILD_COMPRESS.split(',')
  if (compressList.includes('gzip')) {
    plugin.push(
      compression({
        ext: '.gz',
        deleteOriginFile: false
      })
    )
  }
  if (compressList.includes('brotli')) {
    plugin.push(
      compression({
        ext: '.br',
        algorithm: 'brotliCompress',
        deleteOriginFile: false
      })
    )
  }
  return plugin
}
