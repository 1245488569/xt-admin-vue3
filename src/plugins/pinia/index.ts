import { App } from 'vue'
import { createPinia } from 'pinia'

import piniaPersist from 'pinia-plugin-persist'

export default function setupPinia(app: App) {
  const pinia = createPinia()
  pinia.use(piniaPersist)
  app.use(pinia)
}
