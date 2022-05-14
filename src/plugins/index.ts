import { App } from 'vue'
import setupGlobalProperties from './globalProperties'
import setupPinia from './pinia'
import setupI18n from './i18n'
import setupDirective from './directive'

export function setupPlugins(app: App) {
  setupGlobalProperties(app)
  setupPinia(app)
  setupI18n(app)
  setupDirective(app)
}
