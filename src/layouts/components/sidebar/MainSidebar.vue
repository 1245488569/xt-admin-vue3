<script setup lang="ts" name="MainSidebar">
  import { generateTitle } from '@/util/i18n'
  import Logo from '../logo/index.vue'
  import { useAppConfigStore } from '@/store/app'
  const useAppConfig = useAppConfigStore()

  const isActive = ref(false)
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
</script>

<template>
  <div class="flex-shrink-0 w-[var(--xt-main-sidebar-width)] z-1 main-sidebar-container relative">
    <Logo
      :show-logo-text="false"
    />
    <div class="!mt-[var(--xt-logo-height)]">
      <ul>
        <template v-for="i in 50" :key="i">
          <li
            class="cursor-pointer flex flex-col h-15 justify-center items-center main-menu-item"
            :class="{ 'is-active': isActive }"
          >
            <el-icon :size="20">
              <i-ep-map-location />
            </el-icon>
            <span class="truncate">{{ generateTitle('1') }}</span>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .main-sidebar-container {
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
