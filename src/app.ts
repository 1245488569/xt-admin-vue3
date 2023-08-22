const sysGlobalConfig: IGlobalConfig = {
  defaultLanguage: 'zh-cn',
  elementSize: 'default',
  app: {
    /**
     * 是否开启权限功能
     */
    enablePermission: false,
    /**
     * 布局模式
     * onlyTopNav 只有顶部导航
     * onlySubSideNav 只有侧边栏导航
     * mainSubSideNav 侧边主导航+侧边次栏导航
     * topSubSideNav 顶部主导航+侧边次栏导航
     */
    layoutMode: 'topSubSideNav',
    /**
     * 颜色方案
     * '' 用户系统默认
     * light 明亮模式
     * dark 暗黑模式
     */
    colorScheme: 'light',
  },
  nav: {
    // 次导航栏是否收起
    subMenuCollapse: false,
  },
  // 样式设置
  theme: {
    // --------------app----------------
    // 主区域背景色
    // mianContentBgColor: '#f5f5f5',
    // --------------logo----------------
    // logo背景色（目前是让logo的背景色跟随菜单主题）
    // logoBgColor: '#cad7fe',
    // logo文字色
    logoTextColor: '#ffffff',

    // --------------主菜单----------------
    // 主菜单背景色
    mainMenuBgColor: '#303643',
    // 选中主菜单背景色
    mainMenuActiveBgColor: '#FF6600',
    // 鼠标经过主菜单背景色
    mainMenuHoverBgColor: '#FF6600',
    // 主菜单文字颜色
    mainMenuTextColor: '#d6d7d9',
    // 选中主菜单文字颜色
    mainMenuActiveTextColor: '#ffffff',
    // 鼠标经过主菜单文字颜色
    mainMenuHoverTextColor: '#ffffff',

    // --------------次菜单----------------
    // 次菜单背景色
    menuBgColor: 'linear-gradient(to right,#c9d6ff,#e2e2e2)',
    // 选中次菜单背景色
    menuActiveBgColor: '#409eff',
    // 鼠标经过次菜单背景色
    menuHoverBgColor: '#409eff',
    // 次菜单文字颜色
    menuTextColor: '#2f4f4f',
    // 选中次菜单文字颜色
    menuActiveTextColor: '#ffffff',
    // 鼠标经过次菜单文字颜色
    menuHoverTextColor: '#ffffff',
  },
}

export default sysGlobalConfig
