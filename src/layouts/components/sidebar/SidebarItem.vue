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
  <el-sub-menu v-if="menu.children?.length" class="xt-sub-menu" :index="menu.path" popper-class="xt-popper-menu">
    <template #title>
      <el-icon v-if="menu.meta.icon" :size="20">
        <svg-icon :name="menu.meta.icon" />
      </el-icon>
      <span class="flex-1 mr-1 truncate" :title="menu.meta.title">{{ menu.meta.title }}</span>
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
    <span class="truncate" :title="menu.meta.title">{{ menu.meta.title }}</span>
  </el-menu-item>
</template>

<style lang="scss" scoped>
.el-menu-item {
  border-radius: 8px;
  background: transparent !important;
  color: v-bind(menutextcolor) !important;
  transition-duration: 0.3s !important;

  &:hover {
    background: v-bind(menuhoverbgcolor) !important;
    color: v-bind(menuhovertextcolor) !important;
  }

  &.is-active {
    background: v-bind(menuactivebgcolor) !important;
    color: v-bind(menuactivetextcolor) !important;
  }
}

:deep(.el-sub-menu__title) {
  border-radius: 8px;
  background: transparent !important;
  color: v-bind(menutextcolor) !important;
  transition-duration: 0.3s !important;

  &:hover {
    background: v-bind(menuhoverbgcolor) !important;
    color: v-bind(menuhovertextcolor) !important;
  }

  &:active {
    background: v-bind(menuactivebgcolor) !important;
    color: v-bind(menuactivetextcolor) !important;
  }
}

.el-menu--collapse .xt-sub-menu.el-sub-menu {
  margin-bottom: 4px;
}

.el-menu--collapse .el-menu-item {
  margin-bottom: 4px;
}

.el-menu--collapse .xt-sub-menu.el-sub-menu.is-active {
  :deep(.el-sub-menu__title) {
    background: v-bind(menuactivebgcolor) !important;
    color: v-bind(menuactivetextcolor) !important;
  }
}

.el-menu--horizontal>.el-menu-item {
  margin-right: 8px;
}

.el-menu--horizontal .xt-sub-menu.el-sub-menu {
  :deep(.el-sub-menu__title) {
    margin-right: 8px;
  }
}

.el-menu--horizontal .xt-sub-menu.el-sub-menu.is-active {
  :deep(.el-sub-menu__title) {
    background: v-bind(menuactivebgcolor) !important;
    color: v-bind(menuactivetextcolor) !important;
    border-bottom: 2px solid v-bind(menuactivetextcolor) !important;
  }
}

.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: 2px solid v-bind(menuactivetextcolor) !important;
}

.dark {
  .el-menu-item {
    background: transparent !important;
    color: var(--xt-sub-menu-text-color) !important;

    &:hover {
      background: var(--xt-sub-menu-hover-bg-color) !important;
      color: var(--xt-sub-menu-hover-text-color) !important;
    }

    &.is-active {
      background: var(--xt-sub-menu-active-bg-color) !important;
      color: var(--xt-sub-menu-active-text-color) !important;
    }
  }

  .xt-sub-menu :deep(.el-sub-menu__title) {
    background: transparent !important;
    color: var(--xt-sub-menu-text-color) !important;

    &:hover {
      background: var(--xt-sub-menu-hover-bg-color) !important;
      color: var(--xt-sub-menu-hover-text-color) !important;
    }

    &:active {
      background: var(--xt-sub-menu-active-bg-color) !important;
      color: var(--xt-sub-menu-active-text-color) !important;
    }
  }

  .el-menu--collapse .xt-sub-menu.el-sub-menu.is-active {
    :deep(.el-sub-menu__title) {
      background: var(--xt-sub-menu-active-bg-color) !important;
      color: var(--xt-sub-menu-active-text-color) !important;
    }
  }

  .el-menu--horizontal .xt-sub-menu.el-sub-menu.is-active {
    :deep(.el-sub-menu__title) {
      background: var(--xt-sub-menu-active-bg-color) !important;
      color: var(--xt-sub-menu-active-text-color) !important;
      border-bottom: 2px solid var(--xt-sub-menu-active-text-color) !important;
    }
  }

  .el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid var(--xt-sub-menu-active-text-color) !important;
  }

  .el-popper.is-light  .el-menu-item {
    background: var(--xt-sub-menu-bg-color)!important;
    color: var(--xt-sub-menu-text-color) !important;

    &:hover {
      background: var(--xt-sub-menu-hover-bg-color) !important;
      color: var(--xt-sub-menu-hover-text-color) !important;
    }

    &.is-active {
      background: var(--xt-sub-menu-active-bg-color) !important;
      color: var(--xt-sub-menu-active-text-color) !important;
    }
  }

  .xt-popper-menu .xt-sub-menu.el-sub-menu {
    :deep(.el-sub-menu__title) {
      background: var(--xt-sub-menu-bg-color) !important;
      color: var(--xt-sub-menu-text-color) !important;

      &:hover {
        background: var(--xt-sub-menu-hover-bg-color) !important;
        color: var(--xt-sub-menu-hover-text-color) !important;
      }
    }
  }

  .xt-popper-menu .xt-sub-menu.el-sub-menu.is-active {
    :deep(.el-sub-menu__title) {
      background: var(--xt-sub-menu-active-bg-color) !important;
      color: var(--xt-sub-menu-active-text-color) !important;
    }
  }
}

/* stylelint-disable-next-line no-descending-specificity */
.el-popper.is-light  .el-menu-item {
  max-width: var(--xt-sub-sidebar-width) !important;
  background: v-bind(menubgcolor) !important;
  color: v-bind(menutextcolor) !important;

  /* stylelint-disable-next-line no-descending-specificity */
  &:hover {
    background: v-bind(menuhoverbgcolor) !important;
    color: v-bind(menuhovertextcolor) !important;
  }

  /* stylelint-disable-next-line no-descending-specificity */
  &.is-active {
    background: v-bind(menuactivebgcolor) !important;
    color: v-bind(menuactivetextcolor) !important;
  }
}

/* stylelint-disable-next-line no-descending-specificity */
.xt-popper-menu .xt-sub-menu.el-sub-menu {
  :deep(.el-sub-menu__title) {
    margin-right: 0;
    background: v-bind(menubgcolor) !important;
    color: v-bind(menutextcolor) !important;

    &:hover {
      background: v-bind(menuhoverbgcolor) !important;
      color: v-bind(menuhovertextcolor) !important;
    }
  }
}

/* stylelint-disable-next-line no-descending-specificity */
.xt-popper-menu .xt-sub-menu.el-sub-menu.is-active {
  :deep(.el-sub-menu__title) {
    background: v-bind(menuactivebgcolor) !important;
    color: v-bind(menuactivetextcolor) !important;
  }
}
</style>
