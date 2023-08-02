import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import zhTw from 'element-plus/dist/locale/zh-tw.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { useAppConfigStore } from '@/stores/app'

export default function useElementI18n() {
  const useAppConfig = useAppConfigStore()

  const locale = computed(() => {
    console.log(useAppConfig.appConfig.defaultLanguage)

    return useAppConfig.appConfig.defaultLanguage === 'zh-cn'
      ? zhCn
      : useAppConfig.appConfig.defaultLanguage === 'zh-tw'
        ? zhTw
        : en
  })

  return { locale }
}
