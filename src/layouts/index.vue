<script setup lang="ts" name="Layout">
  import Top from '@/layouts/components/top/index.vue'
  import SubSidebar from '@/layouts/components/sidebar/SubSidebar.vue'

  import { useAppConfigStore } from '@/store/app'
  import { useKeepAliveStore } from '@/store/keepAlive'
  import MainSidebar from './components/sidebar/MainSidebar.vue'
  import Toolbar from './components/toolbar/index.vue'
  import Tabbar from './components/tabbar/index.vue'
  import router from '@/router'
  import useCurrentInstance from '@/hooks/useCurrentInstance'

  const { globalProperties } = useCurrentInstance()
  const useAppConfig = useAppConfigStore()
  const useKeepAlive = useKeepAliveStore()

  function reload() {
    router.push({
      name: 'reload'
    })
  }
  onMounted(() => {
    globalProperties.$hotkeys('f5', e => {
      if (useAppConfig.toolbar.enablePageReload) {
        e.preventDefault()
        reload()
      }
    })
  })
  provide('reload', reload)

  const miancontentbgcolor = computed(() => {
    return useAppConfig.getTheme.mianContentBgColor
  })
  const showTop = computed(() => {
    return ['onlyTopNav','topSubSideNav'].includes(useAppConfig.getLayoutMode)
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
  const showActionbar = computed(() => {
    return useAppConfig.tabbar.enable || useAppConfig.toolbar.enable
  })
  const fixedActionbar = computed(() => {
    if (useAppConfig.nav.fixed) {
      return 'fixed'
    }
  })
  const showToolbar = computed(() => {
    return useAppConfig.toolbar.enable
  })
  const showTabbar = computed(() => {
    return useAppConfig.tabbar.enable
  })

  // --------这里可以看到以下方法几乎相同 但是却没有抽取--------
  // --------原因是抽取后我发现，当重启项目是样式不会生效，（html上有样式 但是却没有解析--》推测是windcss自身原因导致）--------

  const sideBarWidth = computed(() => {
    if (!useAppConfig.getCollapse) {
      if (useAppConfig.getLayoutMode === 'mainSubSideNav') {
        return 'w-[calc(var(--xt-main-sidebar-width)+var(--xt-sub-sidebar-width))]'
      } else {
        return 'w-[var(--xt-sub-sidebar-width)]'
      }
    } else {
      if (useAppConfig.getLayoutMode === 'mainSubSideNav') {
        return 'w-[calc(var(--xt-main-sidebar-width)+var(--xt-sub-sidebar-collapse-width))]'
      } else {
        return 'w-[var(--xt-sub-sidebar-collapse-width)]'
      }
    }
  })
  const sideBarMarginTop = computed(() => {
    if (['onlyTopNav','topSubSideNav'].includes(useAppConfig.getLayoutMode)) {
      return 'top-[var(--xt-top-nav-height)]'
    } else {
      return 'top-0'
    }
  })
  const mainMarginLeft = computed(() => {
    if (!showSidebar.value) return 'ml-0'
    if (!useAppConfig.getCollapse) {
      if (useAppConfig.getLayoutMode === 'mainSubSideNav') {
        return 'ml-[calc(var(--xt-main-sidebar-width)+var(--xt-sub-sidebar-width))]'
      } else {
        return 'ml-[var(--xt-sub-sidebar-width)]'
      }
    } else {
      if (useAppConfig.getLayoutMode === 'mainSubSideNav') {
        return 'ml-[calc(var(--xt-main-sidebar-width)+var(--xt-sub-sidebar-collapse-width))]'
      } else {
        return 'ml-[var(--xt-sub-sidebar-collapse-width)]'
      }
    }
  })
  const actionbarLeft = computed(() => {
    if (!showSidebar.value) return 'left-0'
    if (!useAppConfig.getCollapse) {
      if (useAppConfig.getLayoutMode === 'mainSubSideNav') {
        return 'left-[calc(var(--xt-main-sidebar-width)+var(--xt-sub-sidebar-width))]'
      } else {
        return 'left-[var(--xt-sub-sidebar-width)]'
      }
    } else {
      if (useAppConfig.getLayoutMode === 'mainSubSideNav') {
        return 'left-[calc(var(--xt-main-sidebar-width)+var(--xt-sub-sidebar-collapse-width))]'
      } else {
        return 'left-[var(--xt-sub-sidebar-collapse-width)]'
      }
    }
  })
  const actionbarTop = computed(() => {
    if (['onlyTopNav','topSubSideNav'].includes(useAppConfig.getLayoutMode)) {
      return 'top-[var(--xt-top-nav-height)]'
    } else {
      return 'top-0'
    }
  })
  const routerViewContentMarginTop = computed(() => {
    if (!useAppConfig.nav.fixed) return 'mt-0'
    if (showToolbar.value && showTabbar.value) {
      return 'mt-[calc(var(--xt-toolbar-height)+var(--xt-tabbar-height))]'
    } else if (showToolbar.value && !showTabbar.value) {
      return 'mt-[var(--xt-toolbar-height)]'
    } else if (!showToolbar.value && showTabbar.value) {
      return 'mt-[var(--xt-tabbar-height)]'
    } else {
      return 'mt-0'
    }
  })
  const routerViewContentFontSize = computed(() => {
    let fs = ''
    switch (useAppConfig.elementSize) {
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
      <div class="flex flex-1" :class="{ 'mt-[var(--xt-top-nav-height)]': showTop }">
        <template v-if="showSidebar">
          <div class="flex bottom-0 z-999 duration-300 fixed" :class="[sideBarWidth,sideBarMarginTop]">
            <template v-if="showMainSidebar">
              <main-sidebar />
            </template>
            <template v-if="showSubSidebar">
              <sub-sidebar />
            </template>
          </div>
        </template>

        <main class="flex flex-col flex-1" :class="mainMarginLeft">
          <div v-if="showActionbar" class="shadow right-0 z-999" :class="[fixedActionbar, actionbarLeft, actionbarTop]">
            <Tabbar v-if="showTabbar" />
            <Toolbar v-if="showToolbar" />
          </div>
          <section class="flex-1 mian-content" :class="[routerViewContentMarginTop, routerViewContentFontSize]">
            <router-view v-slot="{ Component, route }">
              <keep-alive :include="[...useKeepAlive.getAliveList]">
                <component :is="Component" :key="route.fullPath" />
              </keep-alive>
            </router-view>

            <!-- <router-view></router-view> -->
          </section>
        </main>
      </div>
    </section>
    <el-backtop :right="20" :bottom="20" title="UP" />
  </div>
</template>

<style lang="scss" scoped>
.mian-content {
  background-color: v-bind(miancontentbgcolor);
}
</style>
