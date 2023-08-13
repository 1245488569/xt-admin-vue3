<script setup lang="ts">
import sidebarItem from '../sidebar/SidebarItem.vue'
import Logo from '../logo/index.vue'
import { useAppConfigStore } from '@/stores/app'

const useAppConfig = useAppConfigStore()

const topnavbgcolor = computed(() => {
  if (useAppConfig.getLayoutMode === 'topSubSideNav')
    return useAppConfig.getTheme.mainMenuBgColor

  else if (useAppConfig.getLayoutMode === 'onlyTopNav')
    return useAppConfig.getTheme.menuBgColor
})

const darktopnavbgcolor = computed(() => {
  if (useAppConfig.getLayoutMode === 'topSubSideNav')
    return 'var(-xt-main-sidebar-bg-color)'

  else if (useAppConfig.getLayoutMode === 'onlyTopNav')
    return 'var(-xt-sub-sidebar-bg-color)'
})

const menus = [
  {
    path: '/demo1',
    children: [
      {
        path: '/demo1-1',
        children: [
          {
            path: '/demo1-1-1',
            meta: {
              icon: 'ep:service',
              title: 'demo1-1-1',
            },
          },
        ],
        meta: {
          icon: 'ep:service',
          title: 'demo1-1',
        },
      },
    ],
    meta: {
      icon: 'ep:service',
      title: 'demo1',
    },
  },
  {
    path: '/demo2',
    meta: {
      icon: 'ep:service',
      title: 'demo2',
    },
  },
]
</script>

<template>
  <div class="flex h-[var(--xt-top-nav-height)] flex-shrink-0 top-nav-container px-4 items-center">
    <Logo class="mr-4 text-xl" />
    <el-menu
      mode="horizontal"
      :collapse="useAppConfig.getCollapse"
      :collapse-transition="false"
      class="flex-1"
    >
      <template v-for="item in menus" :key="item.path">
        <sidebar-item :menu="item" />
      </template>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.top-nav-container {
  background: v-bind(topnavbgcolor);

  :deep(.el-menu) {
    background: v-bind(topnavbgcolor);
    border-bottom: none;
  }
}

.dark {
  .top-nav-container {
    background: v-bind(darktopnavbgcolor);

    :deep(.el-menu) {
      background: v-bind(darktopnavbgcolor);
      border-bottom: none;
    }
  }
}
</style>
