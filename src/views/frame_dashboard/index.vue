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
            <div class="mt-2 font-bold text-lg">
              本项目配套了讲解视频，教你一步一步的自己搭建一个后台管理系统模板，有购买意愿的可以给我发私信或扫码添加（前100名购买者只需88,100名后108）
            </div>
            <div class="mt-2 font-bold text-lg">
              扫码右侧二维码，加入我们
            </div>

            <div class="mt-2">
              <a class="text-[#409eff]" href="https://gitee.com/nideweixiaonuannuande/xt-admin-vue3" target="_blank">gitee</a>

              <a class="text-[#409eff] ml-2" href="https://www.bilibili.com/video/BV1nu4y1r7Hb/?spm_id_from=333.788&vd_source=cb84374b498a3c0a374554582dfced70" target="_blank">试看连接</a>
            </div>

            <div class="flex justify-between">
              <div class="mt-4 p-5 rounded  bg-[#f6f6f7] w-300px dark:bg-[#252529]">
                <div class="mb-4 flex items-center">
                  <el-icon :size="35">
                    <svg-icon name="strong_new" />
                  </el-icon>
                  <span class="ml-2 text-[#000] font-bold text-lg dark:text-white">最新的技术栈</span>
                </div>
                <div class="text-[#3c3c43bf] dark:text-white">
                  Vite4 + Vue3.3 + TypeScript5 + Vue-router4 + Pinia2 ，学习快人一步
                </div>
              </div>

              <div class="mt-4 ml-2 p-5 rounded  bg-[#f6f6f7] w-300px dark:bg-[#252529]">
                <div class="mb-4 flex items-center">
                  <el-icon :size="35">
                    <svg-icon name="theme" />
                  </el-icon>
                  <span class="ml-2 text-[#000] font-bold text-lg dark:text-white">样式多样</span>
                </div>
                <div class="text-[#3c3c43bf] dark:text-white">
                  4种最主流的布局模式支持，随心所欲的配色支持
                </div>
              </div>
            </div>

            <div class="flex justify-between">
              <div class="mt-4 p-5 rounded  bg-[#f6f6f7] w-300px dark:bg-[#252529]">
                <div class="mb-4 flex items-center">
                  <el-icon :size="35">
                    <svg-icon name="permission" />
                  </el-icon>
                  <span class="ml-2 text-[#000] font-bold text-lg dark:text-white">全场景的权限验证</span>
                </div>
                <div class="text-[#3c3c43bf] dark:text-white">
                  菜单权限，按钮权限，一门课程，完全理解权限管理
                </div>
              </div>

              <div class="mt-4 ml-2 p-5 rounded  bg-[#f6f6f7] w-300px dark:bg-[#252529]">
                <div class="mb-4 flex items-center">
                  <el-icon :size="35">
                    <svg-icon name="i18n" />
                  </el-icon>
                  <span class="ml-2 text-[#000] font-bold text-lg dark:text-white">走向国际</span>
                </div>
                <div class="text-[#3c3c43bf] dark:text-white">
                  通用国际化解决方案，通过简单配置实现语言切换
                </div>
              </div>
            </div>
          </div>

          <div class="ml-4 flex-shrink-0 w-150px h-150px">
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
