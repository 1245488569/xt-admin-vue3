type Language = 'zh-ch' | 'zh-tw' | 'en'
type ElementSize = 'large' | 'default' | 'small'
type ThemeKey = 'menuBgColor' | 'menuActiveBgColor' | 'menuTextColor' | 'menuActiveTextColor'
type LayoutMode = 'onlyTopNav' | 'onlySubSideNav' | 'mainSubSideNav' | 'topSubSideNav'
type RouteMode = 'frontend' | 'backend'

interface IGlobalApp {
  enablePermission: boolean
  enableProgress: boolean
  enableDynamicTitle: boolean
  enableDashboard: boolean
  layoutMode: LayoutMode
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
  mianContentBgColor: string
  logoBgColor: string
  logoTextColor: string
  mainMenuBgColor: string
  mainMenuActiveBgColor: string
  mainMenuTextColor: string
  mainMenuActiveTextColor: string
  menuBgColor: string
  menuActiveBgColor: string
  menuTextColor: string
  menuActiveTextColor: string
}

interface IGlobalConfig {
  defaultLanguage: Language
  elementSize: ElementSize
  routeMode: RouteMode
  app: IGlobalApp
  nav: IGlobalNav
  tabbar: IGlobalTabbar
  toolbar:IGlobalToolbar
  theme: IGlobalTheme
}
