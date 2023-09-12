import { createI18n } from 'vue-i18n'
import type { App } from 'vue'
import mZhCnLocale from './lang/zh-cn'
import mZhTwLocale from './lang/zh-tw'
import mEnCnLocale from './lang/en'
import { useAppConfigStore } from '@/stores/app'

const messages = {
  'en': {
    ...mEnCnLocale,
  },
  'zh-cn': {
    ...mZhCnLocale,
  },
  'zh-tw': {
    ...mZhTwLocale,
  },
}

// eslint-disable-next-line import/no-mutable-exports
export let i18n: any

export default function setupI18n(app: App) {
  const useAppConfig = useAppConfigStore()
  i18n = createI18n({
    legacy: false,
    locale: useAppConfig.getLanguage,
    messages,
  })
  app.use(i18n)
}
