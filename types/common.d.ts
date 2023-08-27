
type Language = 'zh-cn' | 'zh-tw' | 'en'
type ElementSize = 'large' | 'default' | 'small'
type LayoutMode = 'onlyTopNav' | 'onlySubSideNav' | 'mainSubSideNav' | 'topSubSideNav'
type ColorScheme = '' | 'light' | 'dark'

interface IGlobalApp {
  enablePermission: boolean
  enableProgress: boolean
  enableDynamicTitle: boolean
  enableDashboard: boolean
  layoutMode: LayoutMode
  colorScheme: ColorScheme
}

interface IGlobalNav {
  subMenuCollapse: boolean
  fixed: boolean
}
interface IGlobalTabbar {
  enable: boolean
}

interface IGlobalToolbar {
  enable: boolean
  enableSidebarCollapse: boolean
  enableBreadcrumb: boolean
  enableMenuSearch: boolean
  enableNotification: boolean
  enableI18n: boolean
  enableFullscreen: boolean
  enableChangeTheme: boolean
  enablePageReload: boolean
  enableAppSetting: boolean
}

interface IGlobalTheme {
  // logoBgColor: string
  logoTextColor: string

  mainMenuBgColor: string
  mainMenuActiveBgColor: string
  mainMenuHoverBgColor: string
  mainMenuTextColor: string
  mainMenuActiveTextColor: string
  mainMenuHoverTextColor: string

  menuBgColor: string
  menuActiveBgColor: string
  menuHoverBgColor: string
  menuTextColor: string
  menuActiveTextColor: string
  menuHoverTextColor: string
}

declare interface IGlobalConfig {
  defaultLanguage: Language
  elementSize: ElementSize
  app: IGlobalApp
  nav: IGlobalNav
  tabbar: IGlobalTabbar
  toolbar: IGlobalToolbar
  theme: IGlobalTheme
}

declare namespace Menu {
  interface recordMainRaw {
    title: string
    icon: string
    parentIndex?: number
    children: recordRaw[]
  }
}