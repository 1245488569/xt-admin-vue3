<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'
import logo from '../logo/index.vue'
import useMenus from '@/hooks/useMenus'

import { useAppConfigStore } from '@/stores/app'
import { usePermissionStore } from '@/stores/permission'
import { isEmpty } from '@/utils'
import useLocalI18n from '@/hooks/useLocalI18n'

defineOptions({
  name: 'MainSidebar',
})

const { generateTitle } = useLocalI18n()
const useAppConfig = useAppConfigStore()
const mainmenubgcolor = computed(() => useAppConfig.getTheme.mainMenuBgColor)
const mainmenutextcolor = computed(() => useAppConfig.getTheme.mainMenuTextColor)
const mainmenuhoverbgcolor = computed(() => useAppConfig.getTheme.mainMenuHoverBgColor)
const mainmenuhovertextcolor = computed(() => useAppConfig.getTheme.mainMenuHoverTextColor)
const mainmenuactivebgcolor = computed(() => useAppConfig.getTheme.mainMenuActiveBgColor)
const mainmenuactivetextcolor = computed(() => useAppConfig.getTheme.mainMenuActiveTextColor)

const usePermission = usePermissionStore()
const { allMainMenu, allSubMenu } = useMenus()

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
  <div class="main-sidebar-container w-[var(--xt-main-sidebar-width)] flex flex-shrink-0 flex-col">
    <logo :show-logo-text="false" />
    <div class="main-sidebar-menu-container flex-1 py-1">
      <ul>
        <template v-for="(item, index) in allMainMenu" :key="index">
          <li
            v-if="item.children.length"
            class="main-menu-item mx-2 mb-1 h-[var(--xt-main-sidebar-item-height)] flex flex-col cursor-pointer items-center justify-center rounded-lg px-1 text-14px"
            :class="item.parentIndex === usePermission.mainMenuActive ? 'is-active' : ''"
            @click="clickMainMenu(item.parentIndex!)"
          >
            <el-icon v-if="item.icon" :size="20">
              <svg-icon :name="item.icon" />
            </el-icon>
            <span class="w-full truncate text-center" :title="generateTitle(item.title)">{{ generateTitle(item.title) }}</span>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-sidebar-container {
  background: v-bind(mainmenubgcolor);
}

.main-sidebar-menu-container {
  overflow: hidden auto;
  overscroll-behavior: contain;
  scrollbar-width: none;

  /* background: v-bind(mainmenubgcolor); */

  &::-webkit-scrollbar {
    display: none;
  }
}

.main-menu-item {
  // transition-duration: 0.3s;
  background: transparent;
  color: v-bind(mainmenutextcolor);

  &:hover {
    background: v-bind(mainmenuhoverbgcolor);
    color: v-bind(mainmenuhovertextcolor);
  }

  &.is-active {
    background: v-bind(mainmenuactivebgcolor);
    color: v-bind(mainmenuactivetextcolor);
  }
}

.dark {
  .main-sidebar-container {
    background: var(--xt-main-menu-bg-color);
  }

  .main-menu-item {
    transition-duration: 0.3s;
    background: transparent;
    color: var(--xt-main-menu-text-color);

    &:hover {
      background: var(--xt-main-menu-hover-bg-color);
      color: var(--xt-main-menu-hover-text-color);
    }

    &.is-active {
      background: var(--xt-main-menu-active-bg-color);
      color: var(--xt-main-menu-active-text-color);
    }
  }
}
</style>
