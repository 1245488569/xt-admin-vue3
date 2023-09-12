import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import pinia from './stores'
import App from './App.vue'
import router from './router'

import setupI18n from './locales/index'

import directive from '@/utils/directive'

import 'virtual:svg-icons-register'
import 'virtual:uno.css'
import '@/assets/styles/index.scss'
import '@unocss/reset/tailwind-compat.css'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(pinia)

setupI18n(app)

directive(app)

app.mount('#app')
