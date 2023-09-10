import type { App } from 'vue'
import useAuth from '@/hooks/useAuth'

export default function setupDirective(app: App) {
  app.directive('auth', {
    mounted(el, binding) {
      if (!useAuth().auth(binding.value))
        el.remove()
    },
  })

  app.directive('auth-all', {
    mounted(el, binding) {
      if (!useAuth().authAll(binding.value))
        el.remove()
    },
  })
}
