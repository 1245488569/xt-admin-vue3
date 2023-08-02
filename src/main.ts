import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import pinia from './stores'
import App from './App.vue'
import router from './router'

import 'virtual:svg-icons-register'
import 'virtual:uno.css'
import '@/assets/styles/index.scss'
import '@unocss/reset/tailwind-compat.css'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(pinia)

app.mount('#app')
