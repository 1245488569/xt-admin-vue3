import { useI18n } from 'vue-i18n'
import { useAppConfigStore } from '@/stores/app'

export default function useLocalI18n() {
  function generateTitle(title: string) {
    if (!title)
      return ''

    const i18n = useI18n()

    return i18n.te(title) ? i18n.t(title) : title
  }

  function watchSwitchLang(...cbs: any[]) {
    const useAppConfig = useAppConfigStore()

    watch(
      () => useAppConfig.getLanguage,
      () => {
        cbs.forEach(cb => cb(useAppConfig.getLanguage))
      },
    )
  }

  return {
    generateTitle,
    watchSwitchLang,
  }
}
