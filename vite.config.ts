import { defineConfig, loadEnv } from 'vite'

import alias from './vite/alias'
import setupVitePlugins from './vite/plugins'

// eslint-disable-next-line no-control-regex
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g
const DRIVE_LETTER_REGEX = /^[a-z]:/i

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: setupVitePlugins(env, command === 'build'),
    resolve: {
      alias,
    },
    base: './',
    server: {
      proxy: {
        '/proxy': {
          target: env.VITE_APP_API_BASEURL,
          changeOrigin: command === 'serve' && env.VITE_OPEN_PROXY === 'true',
          rewrite: path => path.replace(/\/proxy/, ''),
        },
      },
    },
    build: {
      outDir: mode === 'production' ? 'dist' : `dist-${mode}`,
      assetsDir: 'assets',
      minify: 'terser',
      sourcemap: env.VITE_BUILD_SOURCEMAP === 'true',
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: env.VITE_BUILD_DROP_CONSOLE === 'true',
          drop_debugger: env.VITE_BUILD_DROP_DEBUGGER === 'true',
        },
      },
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',

          // 解决无法再github pages上访问的问题
          sanitizeFileName(name) {
            const match = DRIVE_LETTER_REGEX.exec(name)
            const driveLetter = match ? match[0] : ''
            return (
              driveLetter
              + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '')
            )
          },
        },
      },
    },
  }
})
