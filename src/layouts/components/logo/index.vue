<script setup lang="ts">
import { useAppConfigStore } from '@/stores/app'

interface IProps {
  showLogoImage?: boolean
  showLogoText?: boolean
}
defineOptions({
  name: 'Logo',
})

withDefaults(defineProps<IProps>(), {
  showLogoImage: true,
  showLogoText: true,
})

const useAppConfig = useAppConfigStore()
// logo背景色
// const logobgcolor = computed(() => useAppConfig.getTheme.logoBgColor)
// logo字体颜色
const logotextcolor = computed(() => useAppConfig.getTheme.logoTextColor)
const title = ref(import.meta.env.VITE_APP_TITLE)
</script>

<template>
  <router-link
    to="/"
    :title="title"
    class="logo h-[var(--xt-logo-height)] flex flex-shrink-0 items-center justify-center px-2"
  >
    <el-avatar v-if="showLogoImage" class="mr-2 flex-shrink-0" shape="square" :size="40" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" />
    <span v-if="showLogoText" class="truncate font-bold">{{ title }}</span>
  </router-link>
</template>

<style lang="scss" scoped>
.logo {
  width: inherit;
  color: v-bind(logotextcolor);
  background: transparent;
}

.dark .logo {
  color: var(--xt-logo-text-color);
  background: transparent;
}
</style>
