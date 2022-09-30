<script setup lang="ts" name="SubSidebar">
import { useAppConfigStore } from '@/store/app'
import useMenus from '@/hooks/useMenus'
import SidebarItem from './SidebarItem.vue'
import Logo from '../logo/index.vue'
const useAppConfig = useAppConfigStore()
const { menus } = useMenus()

const submenubgcolor = computed(() => {
  return useAppConfig.getTheme.menuBgColor
})
const showLogo = computed(() => {
  return (
    useAppConfig.getLayoutMode !== 'onlyTopNav' &&
    useAppConfig.getLayoutMode !== 'topSubSideNav'
  )
})
</script>

<template>
  <div
    class="flex-shrink-0 top-0 bottom-0 sub-sidebar-container !absolute"
    :class="{
      'left-[var(--xt-main-sidebar-width)]':
        useAppConfig.getLayoutMode === 'mainSubSideNav',
      'w-[var(--xt-sub-sidebar-collapse-width)]':
        useAppConfig.getCollapse === true,
      'w-[var(--xt-sub-sidebar-width)]': useAppConfig.getCollapse === false
    }"
  >
    <Logo
      v-if="showLogo"
      :show-logo-image="
        useAppConfig.getLayoutMode === 'mainSubSideNav' ? false : true
      "
      :show-logo-text="
        useAppConfig.getLayoutMode === 'onlySubSideNav' &&
        useAppConfig.getCollapse
          ? false
          : true
      "
    />
    <el-menu
      router
      :default-active="$route.meta.activeMenu || $route.path"
      :collapse="useAppConfig.getCollapse"
      :background-color="useAppConfig.getTheme.menuBgColor"
      :text-color="useAppConfig.getTheme.menuTextColor"
      :active-text-color="useAppConfig.getTheme.menuActiveTextColor"
      :unique-opened="true"
      :collapse-transition="false"
      :class="{ '!mt-[var(--xt-logo-height)]': showLogo }"
    >
      <template v-for="item in menus" :key="item.path">
        <sidebar-item :menu="item"></sidebar-item>
      </template>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.sub-sidebar-container {
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  background-color: v-bind(submenubgcolor);
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .el-menu {
    border-right: none;
  }
}
</style>
