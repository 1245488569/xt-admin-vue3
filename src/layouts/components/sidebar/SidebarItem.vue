<script setup lang="ts" name="SidebarItem">
import { useAppConfigStore } from '@/stores/app'

interface IProps {
  menu: Menu.recordRaw
}
withDefaults(defineProps<IProps>(), {})

const useAppConfig = useAppConfigStore()
const menubgcolor = computed(() => useAppConfig.getTheme.menuBgColor)
const menutextcolor = computed(() => useAppConfig.getTheme.menuTextColor)
const menuhoverbgcolor = computed(() => useAppConfig.getTheme.menuHoverBgColor)
const menuhovertextcolor = computed(() => useAppConfig.getTheme.menuHoverTextColor)
const menuactivebgcolor = computed(() => useAppConfig.getTheme.menuActiveBgColor)
const menuactivetextcolor = computed(() => useAppConfig.getTheme.menuActiveTextColor)
</script>

<template>
  <!-- 支持渲染多级 menu 菜单 -->
  <el-sub-menu v-if="menu.children?.length" class="xt-sub-menu" :index="menu.path">
    <template #title>
      <el-icon v-if="menu.meta.icon" :size="20">
        <svg-icon :name="menu.meta.icon" />
      </el-icon>
      <span class="flex-1 mr-1 truncate">{{ menu.meta.title }}</span>
    </template>
    <!-- 循环渲染 -->
    <sidebar-item
      v-for="item in menu.children"
      :key="item.path"
      :menu="item"
    />
  </el-sub-menu>

  <!-- 渲染 item 项 -->
  <el-menu-item v-else :index="menu.path">
    <el-icon v-if="menu.meta.icon" :size="20">
      <svg-icon :name="menu.meta.icon" />
    </el-icon>
    <span class="truncate">{{ menu.meta.title }}</span>
  </el-menu-item>
</template>

<style lang="scss" scoped>
.el-menu-item {
  background-color: v-bind(menubgcolor)!important;
  color: v-bind(menutextcolor)!important;

  &:hover {
    transition: 300ms;
    background-color: v-bind(menuhoverbgcolor)!important;
    color: v-bind(menuhovertextcolor)!important;
  }

  &.is-active {
    transition: 300ms;
    background-color: v-bind(menuactivebgcolor)!important;
    color: v-bind(menuactivetextcolor)!important;
  }
}

:deep(.el-sub-menu__title) {
  background-color: v-bind(menubgcolor)!important;
  color: v-bind(menutextcolor)!important;

  &:hover {
    transition: 300ms;
    background-color: v-bind(menuhoverbgcolor)!important;
    color: v-bind(menuhovertextcolor)!important;
  }

  &:active {
    transition: 300ms;
    background-color: v-bind(menuactivebgcolor)!important;
    color: v-bind(menuactivetextcolor)!important;
  }
}

.el-menu--horizontal > .el-sub-menu.is-active .el-sub-menu__title {
  border-bottom: 2px solid v-bind(menuactivetextcolor)!important;
}

.el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: 2px solid v-bind(menuactivetextcolor)!important;
}
</style>
