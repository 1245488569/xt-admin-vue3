import { defineStore } from 'pinia'
import { piniaStore } from '@/store'
import sysGlobalConfig from '@/app'
import { STORAGE_PREFIX, APP_CONFIG } from '@/enums/cacheEnum'

export const useAppConfigStore = defineStore('app', {
  state: () => ({
    ...sysGlobalConfig
  }),

  getters: {
    getEnablePermission(): boolean {
      return this.app.enablePermission
    },
    getRouteMode(): RouteMode {
      return this.routeMode
    },
    getLanguage(): Language {
      return this.defaultLanguage
    },
    getTheme(): IGlobalTheme {
      return {
        ...this.theme
      }
    },
    getLayoutMode(): LayoutMode {
      return this.app.layoutMode
    },
    getCollapse(): boolean {
      return this.nav.subMenuCollapse
    }
  },

  actions: {
    changeLanguage(language: Language) {
      this.defaultLanguage = language
    },
    changTheme(key: ThemeKey, color: string) {
      this.theme[key] = color
    },
    changeCollapse() {
      this.nav.subMenuCollapse = !this.nav.subMenuCollapse
    },
    changeLayoutMode(layoutMode: LayoutMode) {
      this.app.layoutMode = layoutMode
    }
  },

  persist: {
    enabled: true,
    strategies: [
      {
        key: `${STORAGE_PREFIX}${APP_CONFIG}`,
        storage: localStorage,
        paths: ['defaultLanguage', 'theme']
      }
    ]
  }
})

export function useAppConfigOutsideStore() {
  return useAppConfigStore(piniaStore)
}
