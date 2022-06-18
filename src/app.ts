import { LocalStorageService } from '@/util/storage'
import { APP_CONFIG } from '@/enums/cacheEnum'

const sysGlobalConfig: IGlobalConfig = {
  // 默认语言. zh-ch: 简体中文 zh-tw: 繁体中文 en: 英文
  defaultLanguage: LocalStorageService.get(APP_CONFIG)?.defaultLanguage || 'zh-ch',
  /**
    * Element 组件尺寸
    * 这里有和主内容区默认文字大小关联
    * 可选：large、default、small
    * large 主内容区默认文字大小 16px
    * default 主内容区默认文字大小 14px
    * small 主内容区默认文字大小 12px
    */
  elementSize: 'default',
  /**
   * 路由模式（如果为backend  请设置enablePermission为true）
   * frontend 前端
   * backend 后端（个人认为路由后端生成是个不怎么有必要的需求，所以并不推荐）
   * 后端路由：一般是你需要随时对菜单改名字，或者随时调整菜单顺序且不希望前端发包，只需修改数据库的时候才会用
   * 后端路由使用方式本框架就算你使用后端路由，你依然需要在前端先添加路由数据，且后端返回数据中必须有name且与你写的路由的name一致，其他的参数无所谓。（具体看moke数据）
   */
  routeMode: 'frontend',
  // 应用
  app: {
    /**
     * 是否开启权限功能(如果你的项目中不需要根据后端数据动态生成路由，设置为false就行)
     * 鉴权指令：v-auth、v-auth-all
     * 鉴权函数：globalProperties.$auth()、globalProperties.$authAll()  (globalProperties 封装在hooks/useCurrentInstance下 使用时请先导入)
     */
    enablePermission: true,
    // 是否开启载入进度条
    enableProgress: true,
    // 是否开启动态标题
    enableDynamicTitle: true,
    // 是否开启dashboard(当你所有侧边路由都需要权限动态生成时，将其设置为false，登录后框架将跳转到菜单中的第一个模块)
    enableDashboard: true,
    /**
    * 布局模式
    * onlyTopNav 只有顶部导航
    * onlySubSideNav 只有侧边栏导航
    * mainSubSideNav 侧边主导航+侧边次栏导航
    * topSubSideNav 顶部主导航+侧边次栏导航
    */
    layoutMode: 'mainSubSideNav'
  },
  // 导航
  nav: {
    // 次导航是否收起
    subMenuCollapse: false,
    // 操作栏（tabbar与toolbar）是否固定
    fixed: true,
  },
  // 标签栏
  tabbar: {
    // 是否开启
    enable: true,
  },
  // 工具栏
  toolbar: {
    // 是否开启
    enable: true,
    // 是否开启全屏
    enableFullscreen: true,
    // 是否开启换肤
    enableChangeTheme: true,
    // 是否开启国际化
    enableI18n: true,
    // 是否开启侧边栏展开收起按钮
    enableSidebarCollapse: true,
    // 是否开启面包屑导航
    enableBreadcrumb: true,
    // 是否开启页面刷新
    enablePageReload: true,
    // 是否开启菜单搜索
    enableMenuSearch: true,
    // 是否开启应用配置（建议在生产环境关闭）
    enableAppSetting: true,

    // 是否开启通知中心(未实现)
    enableNotification: false,
  },
  // 样式设置
  theme: LocalStorageService.get(APP_CONFIG)?.theme || {
    // --------------app----------------
    // 主区域背景色
    mianContentBgColor: '#f5f5f5',
    // --------------logo----------------
    // logo背景色
    logoBgColor: '#000000',
    // logo文字色
    logoTextColor: '#FFFFFF',
    // --------------主菜单----------------
    // 主菜单背景色
    mainMenuBgColor: '#FFFFFF',
    // 选中主菜单背景色
    mainMenuActiveBgColor: '#CCCCCC',
    // 主菜单文字颜色
    mainMenuTextColor: '#000000',
    // 选中主菜单文字颜色
    mainMenuActiveTextColor: '#FFFFFF',
    // --------------次菜单----------------
    // 次菜单背景色
    menuBgColor: '#FFFFFF',
    // 选中次菜单背景色
    menuActiveBgColor: '#CCCCCC',
    // 次菜单文字颜色
    menuTextColor: '#000000',
    // 选中次菜单文字颜色
    menuActiveTextColor: '#FFFFFF',
  }
}

export default sysGlobalConfig
