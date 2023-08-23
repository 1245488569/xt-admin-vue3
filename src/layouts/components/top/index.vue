<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'
import sidebarItem from '../sidebar/SidebarItem.vue'
import Logo from '../logo/index.vue'
import { useAppConfigStore } from '@/stores/app'
import useMenus from '@/hooks/useMenus'
import { usePermissionStore } from '@/stores/permission'
import { isEmpty } from '@/utils'

const useAppConfig = useAppConfigStore()

const topnavbgcolor = computed(() => {
  if (useAppConfig.getLayoutMode === 'topSubSideNav')
    return useAppConfig.getTheme.mainMenuBgColor

  else if (useAppConfig.getLayoutMode === 'onlyTopNav')
    return useAppConfig.getTheme.menuBgColor
})

const topnavtextcolor = computed(() => {
  if (useAppConfig.getLayoutMode === 'topSubSideNav')
    return useAppConfig.getTheme.mainMenuTextColor

  else if (useAppConfig.getLayoutMode === 'onlyTopNav')
    return useAppConfig.getTheme.menuTextColor
})

const topnavhoverbgcolor = computed(() => {
  if (useAppConfig.getLayoutMode === 'topSubSideNav')
    return useAppConfig.getTheme.mainMenuHoverBgColor

  else if (useAppConfig.getLayoutMode === 'onlyTopNav')
    return useAppConfig.getTheme.menuHoverBgColor
})

const topnavhovertextcolor = computed(() => {
  if (useAppConfig.getLayoutMode === 'topSubSideNav')
    return useAppConfig.getTheme.mainMenuHoverTextColor

  else if (useAppConfig.getLayoutMode === 'onlyTopNav')
    return useAppConfig.getTheme.menuHoverTextColor
})

const topnavactivebgcolor = computed(() => {
  if (useAppConfig.getLayoutMode === 'topSubSideNav')
    return useAppConfig.getTheme.mainMenuActiveBgColor

  else if (useAppConfig.getLayoutMode === 'onlyTopNav')
    return useAppConfig.getTheme.menuActiveBgColor
})

const topnavactivetextcolor = computed(() => {
  if (useAppConfig.getLayoutMode === 'topSubSideNav')
    return useAppConfig.getTheme.mainMenuActiveTextColor

  else if (useAppConfig.getLayoutMode === 'onlyTopNav')
    return useAppConfig.getTheme.menuActiveTextColor
})

const darktopnavbgcolor = computed(() => {
  if (useAppConfig.getLayoutMode === 'topSubSideNav')
    return 'var(--xt-main-menu-bg-color)'

  else if (useAppConfig.getLayoutMode === 'onlyTopNav')
    return 'var(--xt-sub-menu-bg-color)'
})

const darktopnavtextcolor = computed(() => {
  if (useAppConfig.getLayoutMode === 'topSubSideNav')
    return 'var(--xt-main-menu-text-color)'

  else if (useAppConfig.getLayoutMode === 'onlyTopNav')
    return 'var(--xt-sub-menu-text-color)'
})

const darktopnavhoverbgcolor = computed(() => {
  if (useAppConfig.getLayoutMode === 'topSubSideNav')
    return 'var(--xt-main-menu-hover-bg-color)'

  else if (useAppConfig.getLayoutMode === 'onlyTopNav')
    return 'var(--xt-sub-menu-hover-bg-color)'
})

const darktopnavhovertextcolor = computed(() => {
  if (useAppConfig.getLayoutMode === 'topSubSideNav')
    return 'var(--xt-main-menu-hover-text-color)'

  else if (useAppConfig.getLayoutMode === 'onlyTopNav')
    return 'var(--xt-sub-menu-hover-text-color)'
})

const darktopnavactivebgcolor = computed(() => {
  if (useAppConfig.getLayoutMode === 'topSubSideNav')
    return 'var(--xt-main-menu-active-bg-color)'

  else if (useAppConfig.getLayoutMode === 'onlyTopNav')
    return 'var(--xt-sub-menu-active-bg-color)'
})

const darktopnavactivetextcolor = computed(() => {
  if (useAppConfig.getLayoutMode === 'topSubSideNav')
    return 'var(--xt-main-menu-active-text-color)'

  else if (useAppConfig.getLayoutMode === 'onlyTopNav')
    return 'var(--xt-sub-menu-active-text-color)'
})

const usePermission = usePermissionStore()
const { menus, allSubMenu, allMainMenu } = useMenus()

function clickMainMenu(parentIndex: number) {
  usePermission.changeMainMenu(parentIndex)
}

function findCurItemByPath(path: string, allSubMenu: RouteRecordRaw[]): RouteRecordRaw | undefined {
  if (isEmpty(allSubMenu))
    return undefined
  for (const item of allSubMenu) {
    if (item.path === path)
      return item

    if (!isEmpty(item.children)) {
      const res = findCurItemByPath(path, item.children!)
      if (res)
        return res
    }
  }
}

const route = useRoute()
watch(() => route, (val) => {
  const { path } = val

  usePermission.changeMainMenu(
    findCurItemByPath(path, allSubMenu)?.parentIndex ?? 0,
  )
}, {
  immediate: true,
  deep: true,
})

// TODO: 切换主导航栏时，选中主导航栏的第一个子导航栏
</script>

<template>
  <div class="flex h-[var(--xt-top-nav-height)] flex-shrink-0 top-nav-container px-4 items-center">
    <Logo class="mr-4 text-xl" />
    <!-- 顶部主导航+侧边次导航 -->
    <template v-if="useAppConfig.getLayoutMode === 'topSubSideNav'">
      <el-menu mode="horizontal" :default-active="`${usePermission.mainMenuActive}`" :unique-opened="true" class="flex-1 main-menu">
        <template v-for="(item, index) in allMainMenu" :key="index">
          <el-menu-item v-if="item.children.length" :index="`${item.parentIndex}`" @click="clickMainMenu(item.parentIndex!)">
            <el-icon v-if="item.icon" :size="20">
              <svg-icon :name="item.icon" />
            </el-icon>
            <span class="truncate">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </template>
    <!-- 只有顶部导航 -->
    <template v-if="useAppConfig.getLayoutMode === 'onlyTopNav'">
      <el-menu mode="horizontal" router :default-active="$route.meta?.activeMenu || $route.path" :unique-opened="true" class="flex-1">
        <template v-for="item in menus" :key="item.path">
          <sidebar-item :menu="item" />
        </template>
      </el-menu>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.top-nav-container {
  background: v-bind(topnavbgcolor);

  :deep(.el-menu) {
    background: v-bind(topnavbgcolor);
    border-bottom: none;
  }

  .main-menu {
    .el-menu-item {
      margin-right: 8px;
      border-radius: 8px;
      background: transparent !important;
      color: v-bind(topnavtextcolor) !important;
      transition-duration: 0.3s !important;

      &:hover {
        background: v-bind(topnavhoverbgcolor) !important;
        color: v-bind(topnavhovertextcolor) !important;
        border-bottom: 2px solid v-bind(topnavhovertextcolor) !important;
      }

      &.is-active {
        background: v-bind(topnavactivebgcolor) !important;
        color: v-bind(topnavactivetextcolor) !important;
        border-bottom: 2px solid v-bind(topnavactivetextcolor) !important;
      }
    }
  }
}

.dark {
  .top-nav-container {
    background: v-bind(darktopnavbgcolor);

    :deep(.el-menu) {
      background: v-bind(darktopnavbgcolor);
      border-bottom: none;
    }

    .main-menu {
      .el-menu-item {
        background: transparent !important;
        color: v-bind(darktopnavtextcolor) !important;
        transition-duration: 0.3s !important;

        &:hover {
          background: v-bind(darktopnavhoverbgcolor) !important;
          color: v-bind(darktopnavhovertextcolor) !important;
          border-bottom: 2px solid v-bind(darktopnavhovertextcolor) !important;
        }

        &.is-active {
          background: v-bind(darktopnavactivebgcolor) !important;
          color: v-bind(darktopnavactivetextcolor) !important;
          border-bottom: 2px solid v-bind(darktopnavactivetextcolor) !important;
        }
      }
    }
  }
}
</style>
