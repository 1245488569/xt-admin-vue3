<script setup lang="ts">
import TeachCard from './coms/TeachCard.vue'
import DetailDialog from './coms/DetailDialog.vue'

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

const freeCourseList = [
  {
    id: 1001,
    colorFrom: '#FF8008',
    colorTo: '#FFC837',
    coverDesc: 'typescript零基础入门',
    title: '从0开始学习typescript（前10集由于设备原因声音较小）',
    price: '免费(已完成)',
  },
]

const courseList = [
  {
    id: 1,
    colorFrom: '#843cf6',
    colorTo: '#759bff',
    coverDesc: '从0到1带你写一个企业级的后台管理系统框架',
    title: 'vue3+vite+ts用一个项目教你如何从0到1开发一个企业级的后台管理系统框架',
    price: '88.00',
  },
  {
    id: 2,
    colorFrom: '#7367F0',
    colorTo: '#FF7367',
    coverDesc: 'go零基础入门',
    title: '从0开始学习go语言',
    price: '39.00',
  },
  {
    id: 201,
    colorFrom: '#843cf6',
    colorTo: '#759bff',
    coverDesc: 'gin+vue3实战权限管理系统',
    title: '课程包括gin零基础入门，gorm零基础入门，gin+vue3实战权限管理系统',
    price: '88.00',
  },
]

// const noEndCourseList = []

const detailDialogRef = ref<InstanceType<typeof DetailDialog> | null>()
function opneDetailDialog(id: number) {
  detailDialogRef.value?.open(id)
}
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
            <div class="mt-2 text-lg font-bold">
              本项目配套了讲解视频，教你一步一步的自己搭建一个后台管理系统模板，有购买意愿的可以给我发私信或扫码添加（前100名购买者只需88,100名后108）
            </div>
            <div class="mt-2 text-lg font-bold">
              扫码右侧二维码，加入我们
            </div>

            <div class="mt-2">
              <a class="text-[#409eff]" href="https://gitee.com/nideweixiaonuannuande/xt-admin-vue3" target="_blank">gitee</a>

              <a class="ml-2 text-[#409eff]" href="https://www.bilibili.com/video/BV1nu4y1r7Hb/?spm_id_from=333.788&vd_source=cb84374b498a3c0a374554582dfced70" target="_blank">试看连接</a>
            </div>

            <div class="flex justify-between">
              <div class="mt-4 w-300px rounded bg-[#f6f6f7] p-5 dark:bg-[#252529]">
                <div class="mb-4 flex items-center">
                  <el-icon :size="35">
                    <svg-icon name="strong_new" />
                  </el-icon>
                  <span class="ml-2 text-lg text-[#000] font-bold dark:text-white">最新的技术栈</span>
                </div>
                <div class="text-[#3c3c43bf] dark:text-white">
                  Vite4 + Vue3.3 + TypeScript5 + Vue-router4 + Pinia2 ，学习快人一步
                </div>
              </div>

              <div class="ml-2 mt-4 w-300px rounded bg-[#f6f6f7] p-5 dark:bg-[#252529]">
                <div class="mb-4 flex items-center">
                  <el-icon :size="35">
                    <svg-icon name="theme" />
                  </el-icon>
                  <span class="ml-2 text-lg text-[#000] font-bold dark:text-white">样式多样</span>
                </div>
                <div class="text-[#3c3c43bf] dark:text-white">
                  4种最主流的布局模式支持，随心所欲的配色支持
                </div>
              </div>
            </div>

            <div class="flex justify-between">
              <div class="mt-4 w-300px rounded bg-[#f6f6f7] p-5 dark:bg-[#252529]">
                <div class="mb-4 flex items-center">
                  <el-icon :size="35">
                    <svg-icon name="permission" />
                  </el-icon>
                  <span class="ml-2 text-lg text-[#000] font-bold dark:text-white">全场景的权限验证</span>
                </div>
                <div class="text-[#3c3c43bf] dark:text-white">
                  菜单权限，按钮权限，一门课程，完全理解权限管理
                </div>
              </div>

              <div class="ml-2 mt-4 w-300px rounded bg-[#f6f6f7] p-5 dark:bg-[#252529]">
                <div class="mb-4 flex items-center">
                  <el-icon :size="35">
                    <svg-icon name="i18n" />
                  </el-icon>
                  <span class="ml-2 text-lg text-[#000] font-bold dark:text-white">走向国际</span>
                </div>
                <div class="text-[#3c3c43bf] dark:text-white">
                  通用国际化解决方案，通过简单配置实现语言切换
                </div>
              </div>
            </div>

            <div class="mt-2">
              <div class="text-lg font-bold">
                我的开源项目:
              </div>
              <div class="flex justify-between">
                <div class="mt-4 w-300px rounded bg-[#f6f6f7] p-5 dark:bg-[#252529]">
                  <div class="mb-4 flex items-center">
                    <span class="text-lg font-bold">
                      🔥 <a class="text-[#409eff]" href="https://gitee.com/nideweixiaonuannuande/xt-admin-vue3" target="_blank">xt-admin-vue3</a>
                    </span>
                  </div>
                  <div class="text-[#3c3c43bf] dark:text-white">
                    一款基于Vue3+Typescript Vite pinia+ element plus+unocss且超级好用的中后台管理框架
                  </div>
                </div>

                <div class="mt-4 w-300px rounded bg-[#f6f6f7] p-5 dark:bg-[#252529]">
                  <div class="mb-4 flex items-center">
                    <span class="text-lg font-bold">
                      🔥 xt-admin-react18
                    </span>
                  </div>
                  <div class="text-[#3c3c43bf] dark:text-white">
                    准备中...
                  </div>
                </div>
              </div>
              <div class="flex justify-between">
                <div class="mt-4 w-300px rounded bg-[#f6f6f7] p-5 dark:bg-[#252529]">
                  <div class="mb-4 flex items-center">
                    <span class="text-lg font-bold">
                      🎉 <a class="text-[#409eff]" href="https://gitee.com/nideweixiaonuannuande/nxtm" target="_blank">nxtm</a>
                    </span>
                  </div>
                  <div class="text-[#3c3c43bf] dark:text-white">
                    node切换源工具
                  </div>
                </div>

                <div class="mt-4 w-300px rounded bg-[#f6f6f7] p-5 dark:bg-[#252529]">
                  <div class="mb-4 flex items-center">
                    <span class="text-lg font-bold">
                      🎉 <a class="text-[#409eff]" href="https://gitee.com/nideweixiaonuannuande/unplugin-antd-resolver" target="_blank">unplugin-antd-resolver</a>
                    </span>
                  </div>
                  <div class="text-[#3c3c43bf] dark:text-white">
                    用于在 unplugin-auto-import 中实现 antd 组件的按需引入(antd5版本)。
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="ml-4 h-150px w-150px flex-shrink-0">
            <el-image src="https://my-self-xt.oss-cn-chengdu.aliyuncs.com/IMG_202309143802_791x772.jpg" />
          </div>
        </div>
      </page-main>

      <page-main class="flex-1">
        <span class="text-lg font-bold">免费课程：</span>
        <div class="flex flex-wrap">
          <template v-for="item in freeCourseList" :key="item.id">
            <TeachCard class="mb-10px mr-10px" :course="item" :color-from="item.colorFrom" :color-to="item.colorTo" @click="opneDetailDialog(item.id)" />
          </template>
        </div>

        <span class="text-lg font-bold">我教的课（已完成）：</span>
        <div class="flex flex-wrap">
          <template v-for="item in courseList" :key="item.id">
            <TeachCard class="mb-10px mr-10px" :course="item" :color-from="item.colorFrom" :color-to="item.colorTo" @click="opneDetailDialog(item.id)" />
          </template>
        </div>

        <!-- <span class="mt-20px text-lg font-bold">我教的课（更新中）：</span>
        <div class="flex flex-wrap">
          <template v-for="item in noEndCourseList" :key="item.id">
            <TeachCard class="mb-10px mr-10px" :course="item" :color-from="item.colorFrom" :color-to="item.colorTo" @click="opneDetailDialog(item.id)" />
          </template>
        </div> -->
      </page-main>
    </div>

    <DetailDialog ref="detailDialogRef" />
  </div>
</template>
