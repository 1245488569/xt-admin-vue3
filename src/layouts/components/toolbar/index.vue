<script setup lang="ts" name="Toolbar">
  import { useAppConfigStore } from '@/store/app'
  import SidebarCollapse from '../tool/SidebarCollapse/index.vue'
  import Breadcrumb from './Breadcrumb/index.vue'
  import MenuSearch from '../tool/MenuSearch/index.vue'
  import Reload from '../tool/Reload/index.vue'
  import LangSelect from '../tool/LangSelect/index.vue'
  import Screenfull from '../tool/Screenfull/index.vue'
  import ThemeSelect from '../tool/ThemeSelect/index.vue'
  import Setting from '../tool/Setting/index.vue'
  import Personal from '../personal/index.vue'

  const useAppConfig = useAppConfigStore()
</script>

<template>
  <div class="flex h-[var(--xt-toolbar-height)] px-4 z-999 toolbar-content items-center justify-between">
    <div class="flex items-center">
      <SidebarCollapse v-if="useAppConfig.toolbar.enableSidebarCollapse && useAppConfig.getLayoutMode !== 'onlyTopNav'" class="mr-2" />
      <Breadcrumb v-if="useAppConfig.toolbar.enableBreadcrumb" class="<lg:hidden" />
    </div>
    <div class="flex items-center" v-if="['onlySubSideNav', 'mainSubSideNav'].includes(useAppConfig.getLayoutMode)">
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
  .toolbar-content {
    background-color: $xt-toolbar-bg;
  }
</style>
