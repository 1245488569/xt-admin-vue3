import { APP_CONFIG, STORAGE_PREFIX } from '@/config/cache'
import sysGlobalConfig from '@/app'

export const useAppConfigStore = defineStore('app', () => {
  const appConfig = ref({
    ...sysGlobalConfig,
  })

  const getEnablePermission = computed(() => {
    return appConfig.value.app.enablePermission
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

  const getLanguage = computed(() => {
    return appConfig.value.defaultLanguage
  })

  return { appConfig, getEnablePermission, getLayoutMode, getCollapse, getColorScheme, getTheme, getLanguage }
}, {
  persist: {
    key: `${STORAGE_PREFIX}${APP_CONFIG}`,
    paths: ['appConfig.defaultLanguage', 'appConfig.app.colorScheme', 'appConfig.theme'],
    storage: localStorage,
  },
})
