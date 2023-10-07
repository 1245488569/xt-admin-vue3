<script setup lang="ts">
import SidebarCollapse from '../tools/SidebarCollapse/index.vue'
import ChangeColorScheme from '../tools/ChangeColorScheme/index.vue'
import ThemeSelect from '../tools/ThemeSelect/index.vue'
import Reload from '../tools/Reload/index.vue'
import LangSelect from '../tools/LangSelect/index.vue'
import Screenfull from '../tools/Screenfull/index.vue'
import MenuSearch from '../tools/MenuSearch/index.vue'
import ChangeSize from '../tools/ChangeSize/index.vue'
import Personal from '../personal/index.vue'
import Breadcrumb from './Breadcrumb/index.vue'
import { useAppConfigStore } from '@/stores/app'

const useAppConfig = useAppConfigStore()
const toolbarBgColor = computed(() => useAppConfig.getTheme.toolbarBgColor)
const toolbarTextColor = computed(() => useAppConfig.getTheme.toolbarTextColor)
</script>

<template>
  <div class="flex h-[var(--xt-toolbar-height)] px-4 items-center toolbar-content">
    <div class="flex items-center">
      <SidebarCollapse v-if="useAppConfig.appConfig.toolbar.enableSidebarCollapse" class="mr-2" />

      <Breadcrumb v-if="useAppConfig.appConfig.toolbar.enableBreadcrumb" />
    </div>

    <div class="flex ml-auto items-center">
      <MenuSearch v-if="useAppConfig.appConfig.toolbar.enableMenuSearch" class="mr-2" />
      <ChangeSize v-if="useAppConfig.appConfig.toolbar.enableElementSize" class="mr-2" />
      <Reload v-if="useAppConfig.appConfig.toolbar.enablePageReload" class="mr-2" />
      <LangSelect v-if="useAppConfig.appConfig.toolbar.enableI18n" class="mr-2" />
      <Screenfull v-if="useAppConfig.appConfig.toolbar.enableFullscreen" class="mr-2" />
      <ChangeColorScheme v-if="useAppConfig.appConfig.toolbar.enableColorScheme" class="mr-2" />
      <ThemeSelect v-if="useAppConfig.appConfig.toolbar.enableChangeTheme" class="mr-2" />
      <Personal />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toolbar-content {
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 30%);
  background: v-bind(toolbarBgColor);
  color: v-bind(toolbarTextColor);
}

.dark .toolbar-content {
  box-shadow: 0 2px 4px 0 rgb(255 255 255 / 30%);
  background: var(--xt-toolbar-bg-color);
  color: var(--xt-toolbar-text-color);
}
</style>
