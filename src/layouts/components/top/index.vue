<script setup lang="ts" name="Top">
  import { useAppConfigStore } from '@/store/app'
  import useMenus from '@/hooks/useMenus'
  import Logo from '../logo/index.vue'
  import SidebarItem from '../sidebar/SidebarItem.vue'
  import MenuSearch from '../tool/MenuSearch/index.vue'
  import Reload from '../tool/Reload/index.vue'
  import LangSelect from '../tool/LangSelect/index.vue'
  import Screenfull from '../tool/Screenfull/index.vue'
  import ThemeSelect from '../tool/ThemeSelect/index.vue'
  import Setting from '../tool/Setting/index.vue'
  import Personal from '../personal/index.vue'
  const useAppConfig = useAppConfigStore()
  const { menus } = useMenus()

  const topnavbgcolor = computed(() => {
    if (useAppConfig.getLayoutMode === 'topSubSideNav') {
      return useAppConfig.getTheme.mainMenuBgColor
    } else if (useAppConfig.getLayoutMode === 'onlyTopNav') {
      return useAppConfig.getTheme.menuBgColor
    }
  })
</script>

<template>
  <div class="flex h-[var(--xt-top-nav-height)] flex-shrink-0 top-nav-container px-4 top-0 right-0 left-0 z-1000 fixed items-center">
    <Logo class="mr-4 text-xl" />
    <!-- 顶部主导航+侧边次栏导航 -->
    <div class="flex-1" v-if="useAppConfig.getLayoutMode === 'topSubSideNav'">顶部主导航+侧边次栏导航  开发中....</div>
    <!-- 只有顶部导航 -->
    <template v-if="useAppConfig.getLayoutMode === 'onlyTopNav'">
      <el-menu
        router
        mode="horizontal"
        :default-active="$route.meta.activeMenu || $route.path"
        :background-color="useAppConfig.getTheme.menuBgColor"
        :text-color="useAppConfig.getTheme.menuTextColor"
        :active-text-color="useAppConfig.getTheme.menuActiveTextColor"
        :unique-opened="true"
        class="flex-1"
      >
        <template v-for="item in menus" :key="item.path">
          <sidebar-item :menu="item"></sidebar-item>
        </template>
      </el-menu>
    </template>
    <div class="flex items-center" v-if="['onlyTopNav', 'topSubSideNav'].includes(useAppConfig.getLayoutMode)">
      <MenuSearch v-if="useAppConfig.toolbar.enableMenuSearch" class="mr-2" />
      <Reload v-if="useAppConfig.toolbar.enablePageReload" class="mr-2" />
      <LangSelect v-if="useAppConfig.toolbar.enableI18n" class="mr-2" />
      <Screenfull v-if="useAppConfig.toolbar.enableFullscreen" class="mr-2" />
      <ThemeSelect v-if="useAppConfig.toolbar.enableChangeTheme" class="mr-2" />
      <Setting v-if="useAppConfig.toolbar.enableAppSetting" class="mr-2" />
      <Personal />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-nav-container {
  background-color: v-bind(topnavbgcolor);

  .el-menu {
    border-bottom: none;
  }
}
</style>
