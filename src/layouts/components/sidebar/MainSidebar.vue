<script setup lang="ts" name="MainSidebar">
  import { generateTitle } from '@/util/i18n'
  import Logo from '../logo/index.vue'
  import { useAppConfigStore } from '@/store/app'
  import useMenus from '@/hooks/useMenus'
  import { usePermissionsStore } from '@/store/permission'
  import { RouteRecordName, RouteRecordRaw } from 'vue-router'
  const permissionsStore = usePermissionsStore()
  const useAppConfig = useAppConfigStore()
  const { allMainMenu, allDealRoute } = useMenus()
  const route = useRoute()

  function findCurItemByName(name: RouteRecordName | null | undefined, menu: RouteRecordRaw[]) {
    for (const item of menu) {
      if (item.name === name) return item
      if (item.children && item.children.length) {
        const _item = findCurItemByName(name, item.children)
        if (_item) return _item
      }
    }
  }

  const stopWatchRoute = watch(() => route, (val) => {
    const { name } = val

    permissionsStore.changeMainMuen(findCurItemByName(name, allDealRoute).parentIndex ?? 0)
  }, {
    immediate: true,
    deep: true
  })
  onUnmounted(() => {
    stopWatchRoute()
  })

  const mainmenubgcolor = computed(() => {
    return useAppConfig.getTheme.mainMenuBgColor
  })
  const mainmenuactivebgcolor = computed(() => {
    return useAppConfig.getTheme.mainMenuActiveBgColor
  })
  const mainmenutextcolor = computed(() => {
    return useAppConfig.getTheme.mainMenuTextColor
  })
  const mainmenuactivetextcolor = computed(() => {
    return useAppConfig.getTheme.mainMenuActiveTextColor
  })

  const clickMainMuen = (parentIndex) => {
    permissionsStore.changeMainMuen(parentIndex)
  }
</script>

<template>
  <div class="flex-shrink-0 w-[var(--xt-main-sidebar-width)] z-1 main-sidebar-container relative">
    <Logo
      :show-logo-text="false"
    />
    <div class="!mt-[var(--xt-logo-height)]">
      <ul>
        <template v-for="(item, index) in allMainMenu" :key="index">
          <li
            class="cursor-pointer flex flex-col h-15 justify-center items-center main-menu-item"
            :class="{ 'is-active': item.parentIndex === permissionsStore.mainMenuActive }"
            @click="clickMainMuen(item.parentIndex)"
            v-if="item.children.length"
          >
            <el-icon :size="20">
              <svg-icon :name="item.icon" />
            </el-icon>
            <span class="truncate">{{ generateTitle(item.title) }}</span>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .main-sidebar-container {
    background-color: v-bind(mainmenubgcolor);
    overflow-x: hidden;
    overflow-y: auto;
    overscroll-behavior: contain;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .main-menu-item {
    background-color: v-bind(mainmenubgcolor);
    color: v-bind(mainmenutextcolor);

    &:hover {
      transition-duration: 300ms;
      background-color: v-bind(mainmenubgcolor);
      opacity: 0.8;
    }
  }

  .main-menu-item.is-active {
    background-color: v-bind(mainmenuactivebgcolor);
    color: v-bind(mainmenuactivetextcolor);
  }
</style>
