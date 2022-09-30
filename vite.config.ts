import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import alias from './vite/alias'
import css from './vite/css'
import setupVitePlugins from './vite/plugins'
export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command === 'build'
  const root = process.cwd()
  const env = loadEnv(mode, root)
  return defineConfig({
    plugins: setupVitePlugins(isBuild, env),
    build: {
      outDir: mode === 'production' ? 'dist' : `dist-${mode}`,
      assetsDir: 'assets',
      minify: 'terser', // 'terser' 相对较慢，但大多数情况下构建后的文件体积更小。'esbuild' 最小化混淆更快但构建后的文件相对更大。
      sourcemap: env.VITE_BUILD_SOURCEMAP === 'true', // 构建后是否生成 source map 文件。如果为 true，将会创建一个独立的 source map 文件
      terserOptions: {
        compress: {
          keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
          drop_console: env.VITE_BUILD_DROP_CONSOLE === 'true',
          drop_debugger: env.VITE_BUILD_DROP_DEBUGGER === 'true'
        }
      },
      chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位）默认500
      rollupOptions: {
        output: {
          // 静态资源分类打包
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js'
          // assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
        }
      }
    },
    resolve: {
      alias
    },
    base: './',
    server: {
      port: 3000,
      open: true,
      // cors: true, // 为开发服务器配置 CORS，配置为允许跨域
      proxy: {
        '/proxy': {
          target: env.VITE_APP_API_BASEURL,
          changeOrigin: command === 'serve' && env.VITE_OPEN_PROXY === 'true',
          rewrite: path => path.replace(/\/proxy/, '')
        }
      }
    },
    css
  })
}
