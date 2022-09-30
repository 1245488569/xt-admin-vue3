import { defineConfig } from 'windicss/helpers'
import Animations from '@windicss/plugin-animations'

export default defineConfig({
  darkMode: 'class',
  attributify: false, // 属性化css，默认关闭
  plugins: [
    Animations({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000
      }
    })
  ]
})
