import { App } from 'vue'
import { useAppConfigOutsideStore } from '@/store/app'
import { createI18n } from 'vue-i18n'
import mZhChLocale from './lang/zh-ch'
import mZhTwLocale from './lang/zh-tw'
import mEnLocale from './lang/en'

const messages = {
  en: {
    ...mEnLocale
  },
  'zh-ch': {
    ...mZhChLocale
  },
  'zh-tw': {
    ...mZhTwLocale
  }
}

/**
 * 返回当前 lang
 */
function getLanguage() {
  const useAppConfigOutside = useAppConfigOutsideStore()
  return useAppConfigOutside.getLanguage
}

export const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale: getLanguage(),
  messages
})

export default function setupI18n(app: App) {
  app.use(i18n)
}
