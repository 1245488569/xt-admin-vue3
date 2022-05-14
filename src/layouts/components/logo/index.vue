<script setup lang="ts" name="Logo">
  import { useAppConfigStore } from '@/store/app'
  defineProps({
    showLogoImage: {
      type: Boolean,
      default: true
    },
    showLogoText: {
      type: Boolean,
      default: true
    },
  })
  const useAppConfig = useAppConfigStore()
  const logobgcolor = computed(() => {
    return useAppConfig.getTheme.logoBgColor
  })
  const logotextcolor = computed(() => {
    return useAppConfig.getTheme.logoTextColor
  })
  const title = ref(import.meta.env.VITE_APP_TITLE)
</script>

<template>
  <router-link
    to="/"
    :title="title"
    class="flex h-[var(--xt-logo-height)] px-2 top-0 z-1000 logo items-center justify-center"
    :class="{
      'fixed': ['onlySubSideNav', 'mainSubSideNav'].includes(useAppConfig.getLayoutMode)
    }">
    <el-avatar v-if="showLogoImage" :class="useAppConfig.getCollapse ? '' : 'mr-2'" shape="square" :size="40" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" />
    <span v-if="showLogoText" class="font-bold truncate">{{ title }}</span>
  </router-link>
</template>

<style lang="scss" scoped>
.logo {
  width: inherit;
  color: v-bind(logotextcolor);
  background-color: v-bind(logobgcolor);
}
</style>
