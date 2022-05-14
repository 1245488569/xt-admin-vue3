import zhCh from 'element-plus/lib/locale/lang/zh-cn'
import zhTw from 'element-plus/lib/locale/lang/zh-tw'
import en from 'element-plus/lib/locale/lang/en'
import { useAppConfigStore } from '@/store/app'

export default function useElementI18n() {
  const useAppConfig = useAppConfigStore()
  const locale = computed(() => {
    return useAppConfig.getLanguage === 'zh-ch' ? zhCh : useAppConfig.getLanguage === 'zh-tw' ? zhTw : en
  })

  return {
    locale
  }
}
