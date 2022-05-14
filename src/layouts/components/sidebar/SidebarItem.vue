<script setup lang="ts" name="SidebarItem">
  import { generateTitle } from '@/util/i18n'
  import { useAppConfigStore } from '@/store/app'
  const useAppConfig = useAppConfigStore()
  defineProps({
    menu: {
      type: Object,
      required: true
    }
  })

  const menuactivebgcolor = computed(() => {
    return useAppConfig.getTheme.menuActiveBgColor
  })
  const topnavbgcolor = computed(() => {
    if (useAppConfig.getLayoutMode === 'topSubSideNav') {
      return useAppConfig.getTheme.mainMenuBgColor
    } else if (useAppConfig.getLayoutMode === 'onlyTopNav') {
      return useAppConfig.getTheme.menuBgColor
    }
  })
</script>

<template>
  <el-sub-menu v-if="menu.children.length" :index="menu.path" :title="generateTitle(menu.meta.title)">
    <template #title>
      <el-icon :size="20" v-if="menu.meta.icon">
        <svg-icon :name="menu.meta.icon" />
      </el-icon>
      <span class="flex-1 mr-1 truncate">{{ generateTitle(menu.meta.title) }}</span>
    </template>
    <sidebar-item
      v-for="item in menu.children"
      :key="item.path"
      :menu="item"
    ></sidebar-item>
  </el-sub-menu>
  <el-menu-item v-else :index="menu.path" :title="generateTitle(menu.meta.title)">
    <el-icon :size="20" v-if="menu.meta.icon">
      <svg-icon :name="menu.meta.icon" />
    </el-icon>
    <span class="truncate">{{ generateTitle(menu.meta.title) }}</span>
  </el-menu-item>
</template>

<style scoped lang="scss">
  .el-menu-item.is-active {
    background-color: v-bind(menuactivebgcolor);
  }

  /* 处理横导航栏时的bug */
  .el-menu--horizontal {
    .el-menu-item.is-active:hover,
    .el-menu-item.is-active:focus {
      background-color: v-bind(menuactivebgcolor);
    }
    /* stylelint-disable-next-line rule-empty-line-before */
    .el-menu-item:not(.is-active):focus {
      background-color: v-bind(topnavbgcolor);
    }
  }
</style>
