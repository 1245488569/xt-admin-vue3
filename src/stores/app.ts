import { APP_CONFIG, STORAGE_PREFIX } from '@/config/cache'
import sysGlobalConfig from '@/app'

export const useAppConfigStore = defineStore('app', () => {
  const appConfig = ref({
    ...sysGlobalConfig,
  })

  const getLayoutMode = computed(() => {
    return appConfig.value.app.layoutMode
  })

  const getCollapse = computed(() => {
    return appConfig.value.nav.subMenuCollapse
  })

  const getColorScheme = computed(() => {
    return appConfig.value.app.colorScheme
  })

  const getTheme = computed(() => {
    return appConfig.value.theme
  })

  return { appConfig, getLayoutMode, getCollapse, getColorScheme, getTheme }
}, {
  persist: {
    key: `${STORAGE_PREFIX}${APP_CONFIG}`,
    paths: ['appConfig.defaultLanguage', 'appConfig.app.colorScheme', 'appConfig.theme'],
    storage: localStorage,
  },
})
