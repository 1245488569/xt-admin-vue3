<script setup lang="ts">
import mainSidebar from './components/sidebar/MainSidebar.vue'
import subSidebar from './components/sidebar/SubSidebar.vue'
import Top from './components/top/index.vue'
import Tabbar from './components/tabbar/index.vue'
import Toolbar from './components/toolbar/index.vue'
import Setting from './components/tools/Setting/index.vue'
import { useAppConfigStore } from '@/stores/app'
import { useKeepAliveStore } from '@/stores/keepAlive'

const useAppConfig = useAppConfigStore()
const useKeepAlice = useKeepAliveStore()

const showTop = computed(() => {
  return ['onlyTopNav', 'topSubSideNav'].includes(useAppConfig.getLayoutMode)
})
const showSidebar = computed(() => {
  return useAppConfig.getLayoutMode !== 'onlyTopNav'
})
const showMainSidebar = computed(() => {
  return useAppConfig.getLayoutMode === 'mainSubSideNav'
})
const showSubSidebar = computed(() => {
  return useAppConfig.getLayoutMode !== 'onlyTopNav'
})

const sideBarWidth = computed(() => {
  if (!useAppConfig.getCollapse) {
    if (useAppConfig.getLayoutMode === 'mainSubSideNav')
      return 'w-[calc(var(--xt-main-sidebar-width)+var(--xt-sub-sidebar-width))]'

    return 'w-[var(--xt-sub-sidebar-width)]'
  }
  else {
    if (useAppConfig.getLayoutMode === 'mainSubSideNav')
      return 'w-[calc(var(--xt-main-sidebar-width)+var(--xt-sub-sidebar-collapse-width))]'

    return 'w-[var(--xt-sub-sidebar-collapse-width)]'
  }
})

const fixedActionbar = computed(() => {
  if (useAppConfig.appConfig.nav.fixed)
    return 'fixed'

  return ''
})

const showToolbar = computed(() => {
  return useAppConfig.appConfig.toolbar.enable
})

const showTabbar = computed(() => {
  return useAppConfig.appConfig.tabbar.enable
})

const actionbarLeft = computed(() => {
  if (!showSidebar.value)
    return 'left-0'

  if (!useAppConfig.getCollapse) {
    if (useAppConfig.getLayoutMode === 'mainSubSideNav')
      return 'left-[calc(var(--xt-main-sidebar-width)+var(--xt-sub-sidebar-width))]'

    else
      return 'left-[var(--xt-sub-sidebar-width)]'
  }
  else {
    if (useAppConfig.getLayoutMode === 'mainSubSideNav')
      return 'left-[calc(var(--xt-main-sidebar-width)+var(--xt-sub-sidebar-collapse-width))]'

    else
      return 'left-[var(--xt-sub-sidebar-collapse-width)]'
  }
})

const actionbarTop = computed(() => {
  if (['onlyTopNav', 'topSubSideNav'].includes(useAppConfig.getLayoutMode))
    return 'top-[var(--xt-top-nav-height)]'

  return 'top-0'
})

const routerViewContentMarginTop = computed(() => {
  if (!useAppConfig.appConfig.nav.fixed)
    return 'mt-0'

  if (showToolbar.value && showTabbar.value)
    return 'mt-[calc(var(--xt-tabbar-height)+var(--xt-toolbar-height))]'

  else if (showToolbar.value && !showTabbar.value)
    return 'mt-[var(--xt-toolbar-height)]'

  else if (!showToolbar.value && showTabbar.value)
    return 'mt-[var(--xt-tabbar-height)]'

  else
    return 'mt-0'
})

const routerViewContentFontSize = computed(() => {
  let fs = ''
  switch (useAppConfig.appConfig.elementSize) {
    case 'large':
      fs = 'text-base'
      break
    case 'small':
      fs = 'text-xs'
      break
    default:
      fs = 'text-sm'
      break
  }
  return fs
})
</script>

<template>
  <div class="h-full">
    <section class="flex flex-col h-full relative">
      <template v-if="showTop">
        <Top />
      </template>

      <div class="flex-1 flex overflow-hidden">
        <template v-if="showSidebar">
          <div class="h-full flex" :class="[sideBarWidth]">
            <template v-if="showMainSidebar">
              <main-sidebar />
            </template>
            <template v-if="showSubSidebar">
              <sub-sidebar />
            </template>
          </div>
        </template>

        <main class="flex-1 main-box flex flex-col overflow-x-hidden" :class="useAppConfig.appConfig.nav.fixed ? '' : 'overflow-auto'">
          <div class="right-0" :class="[fixedActionbar, actionbarLeft, actionbarTop]">
            <Tabbar v-if="showTabbar" />
            <Toolbar v-if="showToolbar" />
          </div>
          <section
            class="flex-1"
            :class="[routerViewContentMarginTop, routerViewContentFontSize, {
              'overflow-auto': useAppConfig.appConfig.nav.fixed,
            }]"
          >
            <router-view v-slot="{ Component, route }">
              <keep-alive :include="[...useKeepAlice.list]">
                <component :is="Component" :key="route.fullPath" />
              </keep-alive>
            </router-view>
          </section>
        </main>
      </div>
    </section>

    <el-backtop target=".main-box" :right="20" :bottom="20" />

    <div v-if="useAppConfig.appConfig.toolbar.enableAppSetting" class="fixed top-50% right-0">
      <Setting />
    </div>
  </div>
</template>
