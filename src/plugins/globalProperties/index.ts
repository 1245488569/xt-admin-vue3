import { App } from 'vue'
import hotkeys from 'hotkeys-js'
import { auth, authAll } from '@/util/auth'

export default function setupGlobalProperties(app: App) {
  app.config.globalProperties.$hotkeys = hotkeys
  app.config.globalProperties.$auth = auth
  app.config.globalProperties.$authAll = authAll
}
