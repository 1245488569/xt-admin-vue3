const sysGlobalConfig: IGlobalConfig = {
  defaultLanguage: 'zh-cn',
  elementSize: 'default',
  app: {
    /**
     * 布局模式
     * onlyTopNav 只有顶部导航
     * onlySubSideNav 只有侧边栏导航
     * mainSubSideNav 侧边主导航+侧边次栏导航
     * topSubSideNav 顶部主导航+侧边次栏导航
     */
    layoutMode: 'onlySubSideNav',
    /**
     * 颜色方案
     * '' 用户系统默认
     * light 明亮模式
     * dark 暗黑模式
     */
    colorScheme: 'dark',
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
    // logo背景色
    logoBgColor: '#FFFFFF',
    // logo文字色
    logoTextColor: '#000000',
  },
}

export default sysGlobalConfig
