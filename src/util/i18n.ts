import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAppConfigStore } from '@/store/app'

/**
 * @param title 要转化的文字（比如菜单标题，面包屑标题等）
 */
export function generateTitle(title: string) {
  const i18n = useI18n()
  return i18n.te(title) ? i18n.t(title) : title
}

/**
 * @param  {...any} cbs 所有的回调
 */
export function watchSwitchLang(...cbs) {
  const useAppConfig = useAppConfigStore()
  watch(
    () => useAppConfig.getLanguage,
    () => {
      cbs.forEach(cb => cb(useAppConfig.getLanguage))
    }
  )
}
