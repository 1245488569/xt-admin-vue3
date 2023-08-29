<script setup lang="ts">
import SidebarCollapse from '../tools/SidebarCollapse/index.vue'
import ChangeColorScheme from '../tools/ChangeColorScheme/index.vue'
import ThemeSelect from '../tools/ThemeSelect/index.vue'
import Reload from '../tools/Reload/index.vue'
import Breadcrumb from './Breadcrumb/index.vue'
import { useAppConfigStore } from '@/stores/app'

const useAppConfig = useAppConfigStore()
const toolbarBgColor = computed(() => useAppConfig.getTheme.toolbarBgColor)
const toolbarTextColor = computed(() => useAppConfig.getTheme.toolbarTextColor)
</script>

<template>
  <div class="h-[var(--xt-toolbar-height)] flex items-center px-4 toolbar-content">
    <div class="flex items-center">
      <SidebarCollapse v-if="useAppConfig.appConfig.toolbar.enableSidebarCollapse" class="mr-2" />

      <Breadcrumb v-if="useAppConfig.appConfig.toolbar.enableBreadcrumb" />
    </div>

    <div class="ml-auto flex items-center">
      <Reload v-if="useAppConfig.appConfig.toolbar.enablePageReload" class="mr-2" />
      <ChangeColorScheme v-if="useAppConfig.appConfig.toolbar.enableColorScheme" class="mr-2" />
      <ThemeSelect v-if="useAppConfig.appConfig.toolbar.enableChangeTheme" class="mr-2" />
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
