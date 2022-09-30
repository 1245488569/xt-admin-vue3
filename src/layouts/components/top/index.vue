<script setup lang="ts" name="Top">
import { useAppConfigStore } from '@/store/app'
import { generateTitle } from '@/util/i18n'
import useMenus from '@/hooks/useMenus'
import Logo from '../logo/index.vue'
import SidebarItem from '../sidebar/SidebarItem.vue'
import MenuSearch from '../tool/MenuSearch/index.vue'
import Reload from '../tool/Reload/index.vue'
import LangSelect from '../tool/LangSelect/index.vue'
import Screenfull from '../tool/Screenfull/index.vue'
import ThemeSelect from '../tool/ThemeSelect/index.vue'
import Setting from '../tool/Setting/index.vue'
import Personal from '../personal/index.vue'
import { usePermissionsStore } from '@/store/permission'
import { RouteRecordName, RouteRecordRaw } from 'vue-router'
const useAppConfig = useAppConfigStore()
const { menus, allMainMenu, allDealRoute } = useMenus()
const permissionsStore = usePermissionsStore()
const route = useRoute()
function findCurItemByName(
  name: RouteRecordName | null | undefined,
  menu: RouteRecordRaw[]
) {
  for (const item of menu) {
    if (item.name === name) return item
    if (item.children && item.children.length) {
      const _item = findCurItemByName(name, item.children)
      if (_item) return _item
    }
  }
}
const stopWatchRoute = watch(
  () => route,
  val => {
    const { name } = val
    permissionsStore.changeMainMuen(
      findCurItemByName(name, allDealRoute).parentIndex ?? 0
    )
  },
  {
    immediate: true,
    deep: true
  }
)
onUnmounted(() => {
  stopWatchRoute()
})

// 整体顶部导航背景色
const topnavbgcolor = computed(() => {
  if (useAppConfig.getLayoutMode === 'topSubSideNav') {
    return useAppConfig.getTheme.mainMenuBgColor
  } else if (useAppConfig.getLayoutMode === 'onlyTopNav') {
    return useAppConfig.getTheme.menuBgColor
  }
})

// 选中主菜单背景色
const mainmenuactivebgcolor = computed(() => {
  return useAppConfig.getTheme.mainMenuActiveBgColor
})

const clickMainMuen = parentIndex => {
  permissionsStore.changeMainMuen(parentIndex)
}
</script>

<template>
  <div
    class="flex h-[var(--xt-top-nav-height)] flex-shrink-0 top-nav-container px-4 top-0 right-0 left-0 z-1000 fixed items-center"
  >
    <Logo class="mr-4 text-xl" />
    <!-- 顶部主导航+侧边次栏导航 -->
    <div v-if="useAppConfig.getLayoutMode === 'topSubSideNav'" class="flex-1">
      <el-menu
        mode="horizontal"
        :default-active="permissionsStore.mainMenuActive + ''"
        :background-color="useAppConfig.getTheme.mainMenuBgColor"
        :text-color="useAppConfig.getTheme.mainMenuTextColor"
        :active-text-color="useAppConfig.getTheme.mainMenuActiveTextColor"
        :unique-opened="true"
      >
        <template v-for="(item, index) in allMainMenu" :key="index">
          <el-menu-item
            v-if="item.children.length"
            :index="item.parentIndex + ''"
            @click="clickMainMuen(item.parentIndex)"
          >
            <div class="flex max-w-20 truncate items-center justify-center">
              <el-icon :size="20">
                <svg-icon :name="item.icon" />
              </el-icon>
              <span>{{ generateTitle(item.title) }}</span>
            </div>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
    <!-- 只有顶部导航 -->
    <template v-if="useAppConfig.getLayoutMode === 'onlyTopNav'">
      <el-menu
        router
        mode="horizontal"
        :default-active="$route.meta.activeMenu || $route.path"
        :background-color="useAppConfig.getTheme.menuBgColor"
        :text-color="useAppConfig.getTheme.menuTextColor"
        :active-text-color="useAppConfig.getTheme.menuActiveTextColor"
        :unique-opened="true"
        class="flex-1"
      >
        <template v-for="item in menus" :key="item.path">
          <sidebar-item :menu="item"></sidebar-item>
        </template>
      </el-menu>
    </template>
    <div
      v-if="
        ['onlyTopNav', 'topSubSideNav'].includes(useAppConfig.getLayoutMode)
      "
      class="flex items-center"
    >
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
.el-menu-item.is-active {
  background-color: v-bind(mainmenuactivebgcolor);
}

.top-nav-container {
  background-color: v-bind(topnavbgcolor);

  .el-menu {
    border-bottom: none;
  }
}
</style>
