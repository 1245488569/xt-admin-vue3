import type { App } from 'vue'
import { ElMessage } from 'element-plus'
import useAuth from '@/hooks/useAuth'

async function handleClick(this: any) {
  try {
    await navigator.clipboard.writeText(this.copyData)
  }
  catch (err) {
    console.error('复制操作不被支持或失败: ', err)
  }
  ElMessage({
    type: 'success',
    message: '复制成功',
  })
}

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

  app.directive('copy', {
    mounted(el, binding) {
      el.copyData = binding.value
      el.addEventListener('click', handleClick)
    },
    updated(el, binding) {
      el.copyData = binding.value
    },
    beforeUnmount(el) {
      el.removeEventListener('click', el.__handleClick__)
    },
  })
}
