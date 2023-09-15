<script setup lang="ts">
import logo from '../logo/index.vue'
import sidebarItem from './SidebarItem.vue'
import useMenus from '@/hooks/useMenus'
import { useAppConfigStore } from '@/stores/app'

defineOptions({
  name: 'SubSidebar',
})

const useAppConfig = useAppConfigStore()

const showLogo = computed(() => {
  return ['onlySubSideNav', 'mainSubSideNav'].includes(useAppConfig.getLayoutMode)
})

const submenubgcolor = computed(() => useAppConfig.getTheme.menuBgColor)

const subSidebarWidth = computed(() => {
  if (!useAppConfig.getCollapse)
    return 'w-[var(--xt-sub-sidebar-width)]'
  else
    return 'w-[var(--xt-sub-sidebar-collapse-width)]'
})
const { menus } = useMenus()
</script>

<template>
  <div class="flex flex-col sub-sidebar-container" :class="[subSidebarWidth]">
    <logo
      v-if="showLogo"
      :show-logo-image="useAppConfig.getLayoutMode === 'mainSubSideNav' ? false : true"
      :show-logo-text="useAppConfig.getLayoutMode === 'onlySubSideNav' && useAppConfig.getCollapse ? false : true"
    />
    <div class="flex-1 overflow-hidden hover:overflow-y-auto py-2">
      <el-menu
        router
        :default-active="$route.meta?.activeMenu || $route.path"
        :unique-opened="true"
        :collapse="useAppConfig.getCollapse"
        :collapse-transition="false"
      >
        <template v-for="item in menus" :key="item.path">
          <sidebar-item :menu="item" />
        </template>
      </el-menu>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sub-sidebar-container {
  background: v-bind(submenubgcolor);

  :deep(.el-menu) {
    background: v-bind(submenubgcolor);
    border-right: none;
  }
}

.dark {
  .sub-sidebar-container {
    background: var(--xt-sub-menu-bg-color);

    :deep(.el-menu) {
      background: var(--xt-sub-menu-bg-color);
    }
  }
}
</style>
