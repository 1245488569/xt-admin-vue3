<script setup lang="ts" name="Logo">
import { useAppConfigStore } from '@/stores/app'

interface IProps {
  showLogoImage?: boolean
  showLogoText?: boolean
}
withDefaults(defineProps<IProps>(), {
  showLogoImage: true,
  showLogoText: true,
})

const useAppConfig = useAppConfigStore()
// logo背景色
const logobgcolor = computed(() => useAppConfig.getTheme.logoBgColor)
// logo字体颜色
const logotextcolor = computed(() => useAppConfig.getTheme.logoTextColor)
const title = ref(import.meta.env.VITE_APP_TITLE)
</script>

<template>
  <router-link
    to="/"
    :title="title"
    class="logo flex h-[var(--xt-logo-height)] px-2 items-center justify-center flex-shrink-0"
  >
    <el-avatar v-if="showLogoImage" class="flex-shrink-0" :class="useAppConfig.getCollapse ? '' : 'mr-2'" shape="square" :size="40" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" />
    <span v-if="showLogoText" class="font-bold truncate">{{ title }}</span>
  </router-link>
</template>

<style lang="scss" scoped>
.logo {
  width: inherit;
  color: v-bind(logotextcolor);
  background-color: v-bind(logobgcolor);
}

.dark .logo {
  color: var(--xt-color-dark);
  background-color: var(--xt-bg-color-dark);
}
</style>
