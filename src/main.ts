import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from '@/router'
import { setupPlugins } from '@/plugins'
import 'virtual:svg-icons-register'
import 'virtual:windi.css'
// 全局样式
import '@/assets/styles/public.scss'

// import './pwa'

function bootstrap() {
  const app = createApp(App)
  // 设置路由
  setupRouter(app)
  // 设置插件
  setupPlugins(app)

  app.mount('#app')
}

bootstrap()
