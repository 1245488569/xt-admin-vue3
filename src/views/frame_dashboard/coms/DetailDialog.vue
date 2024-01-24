<script setup lang="ts">
const dialogVisible = ref(false)
const courseId = ref()

const m: any = {
  1: {
    directoryList: [
      '00_项目介绍新',
      '01_项目创建',
      '02_代码规范_eslint',
      '03_代码规范_stylelint',
      '04_代码规范_husky',
      '05_集成ep和windcss',
      '06_如何使用windcss',
      '07_抽离vite配置',
      '08_自动引入组件配置',
      '09_登录页面编写',
      '10_登录逻辑编写',
      '11_如何在vue中使用svg',
      '12_svg网络图标使用',
      '13_使用env',
      '14_使用mock',
      '15_axios封装',
      '16_pinia介绍',
      '17_pinia的使用',
      '18_本地缓存的两种方式',
      '19_错误',
      '20_ep的全局配置',
      '21_4种布局分析',
      '22_基础布局搭建',
      '23_4种布局初步实现',
      '24_封装布局切换组件',
      '25_改造路由',
      '26_处理超出时的布局效果',
      '27_侧导航收缩功能',
      '28_logo组件封装及在主导航中使用',
      '29_侧边次导航logo处理',
      '30_添加env的类型声明',
      '31_返回顶部',
      '32_实现暗黑模式',
      '33_2次封装dialog组件',
      '34_主题选择弹框',
      '35_替换成unocss',
      '36_滚动公告组件实现',
      '37_数字滚动组件',
      '38_版本大更新',
      '39_无限层级菜单',
      '40_菜单类型定义',
      '41_侧边栏样式初步修改',
      '42_顶部导航设计',
      '43_侧边栏支持配色',
      '44_优化菜单配色',
      '45_主导航栏结构定义',
      '46_顶部主导航结构编写',
      '47_顶部主导航样式',
      '48_顶部主导航暗黑模式样式修改',
      '49_侧边主导航样式编写',
      '50_菜单细节调整',
      '51_支持主菜单选色',
      '52_菜单样式遗留问题处理',
      '53_动态菜单前置知识',
      '54_实现动态路由1',
      '55_实现动态路由2',
      '56_实现动态路由3',
      '57_将路由转为菜单数据1',
      '58_将路由转为菜单数据2',
      '59_将路由转为菜单数据3',
      '60_主导航菜单数据处理1',
      '61_主导航菜单数据处理2',
      '62_主导航菜单数据处理3',
      '63_实现路由切换进度条',
      '64_实现动态标题',
      '65_路由白名单',
      '66_实现框架首页是否显示',
      '67_操作栏类型定义',
      '68_操作栏样式实现',
      '69_主内容区字体大小更随',
      '70_tabbar样式实现',
      '71_tabbar配色',
      '72_toolbar样式及配色',
      '73_toolbar初步实现',
      '74_面包屑导航',
      '75_页面刷新实现',
      '76_右键菜单样式实现',
      '77_tabbar的初步实现',
      '78_通过store管理tabbar',
      '79_关闭tabbar方法分析',
      '80_tabbar单个关闭',
      '81_右侧菜单中的刷新与单个关闭',
      '82_完成tabbar多个关闭',
      '83_多级缓存路由添加',
      '84_keepalive讲解',
      '85_编写keepalivestore',
      '86_路由守卫中实现页面缓存',
      '87_完成页面缓存功能',
      '88_详情菜单如何配置',
      '89_层级详情菜单如何配置',
      '90_合并tab',
      '91_权限路由演示',
      '92_前端权限控制实现',
      '93_前端权限控制bug修复',
      '94_带权限的面包屑实现梳理',
      '95_完成带权限的面包屑',
      '96_完成后端路由',
      '97_权限指令封装',
      '98_权限组件封装',
      '99_退出登录实现',
      '100_初始i18n文件',
      '101_完成i18n-hook封装',
      '102_多语言切换',
      '103_全屏功能',
      '104_初始化搜索菜单',
      '105_实现搜索菜单1',
      '105_实现搜索菜单2',
      '106_设置组件封装',
      '107_打包配置',
      '108_完结与展望',
    ],
    giteeLink: 'https://gitee.com/nideweixiaonuannuande/xt-admin-vue3',
    videoLink: 'https://pan.baidu.com/s/1MmU-ATFGI54vum_0p0dbOQ?pwd=kjht',
  },
  2: {
    directoryList: [
      'go的环境安装',
      '第一个go程序',
      'go语言中的变量1',
      'go语言中的变量2',
      '05_匿名变量和值拷贝',
      '06_规范',
      '07_计算机的一点基础知识',
      '08_整型',
      '09_浮点型和布尔类型',
      '10_字符串类型',
      '11_常量和iota',
      '12_转义符',
      '13_格式化输入输出',
      '14_字符串拼接',
      '15_字符串的常用方法',
      '16_运算符1',
      '17_运算符2',
      '18_单分支语句',
      '19_其他分支语句',
      '20_switch',
      '21_for循环语句1',
      '22_for循环2',
      '23_跳出循环',
      '24_指针',
      '25_new函数',
      '...',
      '83_泛型',
      '84_总结',
    ],
    videoLink: 'https://pan.baidu.com/s/1v92BITKj5Kmal1pBL49kEA?pwd=4jhw',
  },
  201: {
    directoryList: [
      '01_项目介绍',
      '02_gin初始化',
      '03_gin中使用http方法',
      '04_路由分组',
      '05_路径参数的获取',
      '06_get和post参数',
      '07_返回值',
      '08_validator包1',
      '09_自定义验证规则',
      '10_将错误翻译成中文',
      '11_post几种绑定参数的方式',
      '12_gin中把错误翻译成中文',
      '13_gin的中间件1',
      '14_gin中间件2',
      '15_优雅的重启和退出',
      '16_gorm介绍',
      '17_DockerDesktop安装',
      '18_gorm连接数据库',
      '19_生成表',
      '20_快速体验crud',
      '持续更新中...',
      '持续更新中...',
      '持续更新中...',
    ],
    videoLink: 'https://www.bilibili.com/video/BV1HQ4y1V7DJ/',
  },
}

const curDetail = computed(() => {
  return m[courseId.value]
})

function open(id: number) {
  courseId.value = id
  dialogVisible.value = true
}

defineExpose({
  open,
})
</script>

<template>
  <xt-dialog v-model="dialogVisible" width="800px" title="课程详情" :show-cancel="false" :show-confirm="false">
    <div class="max-h-60vh flex justify-between overflow-hidden">
      <div class="max-h-60vh flex-1 overflow-y-auto">
        <div class="mt-2 text-lg font-bold">
          课程目录
        </div>
        <template v-for="item in curDetail.directoryList" :key="item">
          <div>{{ item }}</div>
        </template>
      </div>
      <div class="w-300px flex-shrink-0 px-10px">
        <div class="mb-2 font-bold">
          课程为本人录制，所以购买课程，提供全套答疑服务
        </div>
        <div v-if="curDetail.giteeLink" class="mb-2">
          码云地址：<a class="text-[#409eff]" :href="curDetail.giteeLink" target="_blank">gitee</a>
        </div>
        <div class="mb-2">
          试看地址: <a class="ml-2 text-[#409eff]" :href="curDetail.videoLink" target="_blank">试看连接</a>
        </div>
        <div class="ml-4 h-150px w-150px flex-shrink-0">
          <el-image src="https://my-self-xt.oss-cn-chengdu.aliyuncs.com/IMG_202309143802_791x772.jpg" />
        </div>
      </div>
    </div>
  </xt-dialog>
</template>
