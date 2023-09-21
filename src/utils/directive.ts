import type { App } from 'vue'
import { ElMessage } from 'element-plus'
import useAuth from '@/hooks/useAuth'

async function handleCopyClick(this: any) {
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

function addWaterMarker(str: string, parentNode: any, font: any, textColor: string) {
  // 水印文字，父元素，字体，文字颜色
  const can: HTMLCanvasElement = document.createElement('canvas')
  parentNode.appendChild(can)
  can.width = 205
  can.height = 140
  can.style.display = 'none'
  const cans = can.getContext('2d') as CanvasRenderingContext2D
  cans.rotate((-20 * Math.PI) / 180)
  cans.font = font || '16px Microsoft JhengHei'
  cans.fillStyle = textColor || 'rgba(180, 180, 180, 0.3)'
  cans.textAlign = 'left'
  cans.textBaseline = 'Middle' as CanvasTextBaseline
  cans.fillText(str, can.width / 10, can.height / 2)
  parentNode.style.backgroundImage = `url(${can.toDataURL('image/png')})`
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
      el.addEventListener('click', handleCopyClick)
    },
    updated(el, binding) {
      el.copyData = binding.value
    },
    beforeUnmount(el) {
      el.removeEventListener('click', el.__handleClick__)
    },
  })

  app.directive('watermarker', {
    mounted(el, binding) {
      addWaterMarker(binding.value.text, el, binding.value.font, binding.value.textColor)
    },
  })
}
