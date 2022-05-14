import { App } from 'vue'
import { auth, authAll } from '@/util/auth'

export default function setupDirective(app: App) {
  // 注册 v-auth 和 v-auth-all 指令
  app.directive('auth', {
    mounted: (el, binding) => {
      if (!auth(binding.value)) {
        el.remove()
      }
    }
  })
  app.directive('auth-all', {
    mounted: (el, binding) => {
      if (!authAll(binding.value)) {
        el.remove()
      }
    }
  })
}
