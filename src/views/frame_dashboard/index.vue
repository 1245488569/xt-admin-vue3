<script setup lang="ts">
const topList = [
  {
    id: 1,
    title: '访问人数(人)',
    number: 100,
    from: '#CE9FFC',
    to: '#7367F0',
    icon: 'ri:movie-line',
  },
  {
    id: 2,
    title: '下载人数(人)',
    number: 80,
    from: '#FF8008',
    to: '#FFC837',
    icon: 'ep:folder-opened',
  },
  {
    id: 3,
    title: '购买人数(人)',
    number: 80,
    from: '#FF5E8D',
    to: '#FFD4A3',
    icon: 'ep:box',
  },
  {
    id: 4,
    title: '点赞人数(人)',
    number: 90,
    from: '#7367F0',
    to: '#FF7367',
    icon: 'ri:heart-2-line',
  },
]

const docList = [
  { id: 1, name: 'Vue3' },
  { id: 2, name: 'Vite4' },
  { id: 3, name: 'Typescript5' },
  { id: 4, name: 'pinia' },
  { id: 5, name: 'element plus' },
  { id: 6, name: 'Unocss' },
  { id: 7, name: 'pnpm 包管理器' },
  { id: 8, name: '权限菜单支持（前端与后端模式都支持，极大程度简化开发工作）' },
  { id: 9, name: '4种布局模式随意切换' },
  { id: 10, name: '布局高度 宽度随意切换' },
  { id: 11, name: 'Api 自动引入' },
  { id: 12, name: 'Mock 支持' },
  { id: 13, name: '暗黑模式 支持' },
  { id: 14, name: 'i18n 国际化支持' },
  { id: 15, name: '图标自动引入（iconify万种图标自动且按需引入）' },
  { id: 16, name: '组件自动引入（components目录下组件自动且按需引入）' },
  { id: 17, name: '菜单搜索' },
  { id: 18, name: '全屏' },
  { id: 19, name: '页面刷新' },
  { id: 20, name: '动态换肤' },
  { id: 21, name: 'VueUse 支持' },
  { id: 22, name: 'gzip brotli资源压缩支持' },
  { id: 23, name: '环境变量配置支持' },
  { id: 24, name: '统一的代码规范与风格支持' },
  { id: 25, name: '漂亮的 login 404 页 支持' },
  { id: 26, name: '配置选择支持' },
  { id: 27, name: 'svg-icon支持' },
  { id: 28, name: '多级缓存' },
  { id: 29, name: '历史菜单' },
  { id: 30, name: '面包屑导航' },
  { id: 31, name: '其余的（请查看app.ts 或者 .env文件 或者assets/styles/globals/layout.scss）' },
]

const directoryList = [
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
]
</script>

<template>
  <div>
    <page-main>
      <el-row :gutter="20">
        <el-col v-for="item in topList" :key="item.id" :span="6">
          <color-card class="h-200px" :header="item.title" :num="item.number" tip="今日数据" :color-from="item.from" :color-to="item.to" :icon="item.icon" />
        </el-col>
      </el-row>
    </page-main>

    <div class="flex">
      <page-main class="flex-1">
        <div class="flex justify-between">
          <div>
            <div class="font-bold mt-2 text-lg">
              本项目配套了讲解视频，教你一步一步的自己搭建一个后台管理系统模板，有购买意愿的可以给我发私信或扫码添加（前100名购买者只需88,100名后108）
            </div>
            <div class="font-bold mt-2 text-lg">
              扫码右侧二维码，加入我们
            </div>

            <div class="mt-2">
              <a class="text-[#409eff]" href="https://gitee.com/nideweixiaonuannuande/xt-admin-vue3" target="_blank">gitee</a>

              <a class="ml-2 text-[#409eff]" href="https://www.bilibili.com/video/BV1nu4y1r7Hb/?spm_id_from=333.788&vd_source=cb84374b498a3c0a374554582dfced70" target="_blank">试看连接</a>
            </div>

            <div class="flex justify-between">
              <div class="rounded bg-[#f6f6f7] mt-4  p-5 w-300px dark:bg-[#252529]">
                <div class="flex mb-4 items-center">
                  <el-icon :size="35">
                    <svg-icon name="strong_new" />
                  </el-icon>
                  <span class="font-bold text-lg ml-2 text-[#000] dark:text-white">最新的技术栈</span>
                </div>
                <div class="text-[#3c3c43bf] dark:text-white">
                  Vite4 + Vue3.3 + TypeScript5 + Vue-router4 + Pinia2 ，学习快人一步
                </div>
              </div>

              <div class="rounded bg-[#f6f6f7] mt-4 ml-2  p-5 w-300px dark:bg-[#252529]">
                <div class="flex mb-4 items-center">
                  <el-icon :size="35">
                    <svg-icon name="theme" />
                  </el-icon>
                  <span class="font-bold text-lg ml-2 text-[#000] dark:text-white">样式多样</span>
                </div>
                <div class="text-[#3c3c43bf] dark:text-white">
                  4种最主流的布局模式支持，随心所欲的配色支持
                </div>
              </div>
            </div>

            <div class="flex justify-between">
              <div class="rounded bg-[#f6f6f7] mt-4  p-5 w-300px dark:bg-[#252529]">
                <div class="flex mb-4 items-center">
                  <el-icon :size="35">
                    <svg-icon name="permission" />
                  </el-icon>
                  <span class="font-bold text-lg ml-2 text-[#000] dark:text-white">全场景的权限验证</span>
                </div>
                <div class="text-[#3c3c43bf] dark:text-white">
                  菜单权限，按钮权限，一门课程，完全理解权限管理
                </div>
              </div>

              <div class="rounded bg-[#f6f6f7] mt-4 ml-2  p-5 w-300px dark:bg-[#252529]">
                <div class="flex mb-4 items-center">
                  <el-icon :size="35">
                    <svg-icon name="i18n" />
                  </el-icon>
                  <span class="font-bold text-lg ml-2 text-[#000] dark:text-white">走向国际</span>
                </div>
                <div class="text-[#3c3c43bf] dark:text-white">
                  通用国际化解决方案，通过简单配置实现语言切换
                </div>
              </div>
            </div>

            <div>
              <div class="font-bold mt-2 text-lg">
                课程目录展示
              </div>
              <template v-for="item in directoryList" :key="item">
                <div>{{ item }}</div>
              </template>
            </div>
          </div>

          <div class="flex-shrink-0 h-150px ml-4 w-150px">
            <el-image src="https://my-self-xt.oss-cn-chengdu.aliyuncs.com/IMG_202309143802_791x772.jpg" />
          </div>
        </div>
      </page-main>

      <page-main class="flex-1">
        <span class="font-bold text-lg">项目特点：</span>
        <div v-for="(item, index) in docList" :key="item.id">
          {{ index + 1 }}. {{ item.name }}
        </div>
      </page-main>
    </div>
  </div>
</template>
