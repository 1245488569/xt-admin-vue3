<script setup lang="ts">
import { useAppConfigStore } from '@/stores/app'

interface IProps {
  size?: number
}

defineOptions({
  name: 'ChangeColorScheme',
})

withDefaults(defineProps<IProps>(), {
  size: 20,
})

const useAppConfig = useAppConfigStore()

function toggleClick() {
  useAppConfig.appConfig.app.colorScheme = useAppConfig.appConfig.app.colorScheme === 'dark' ? 'light' : 'dark'
}

watch(() => useAppConfig.appConfig.app.colorScheme, (val) => {
  if (val === '')
    val = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

  switch (val) {
    case 'dark':
      document.documentElement.classList.add('dark')
      break
    case 'light':
      document.documentElement.classList.remove('dark')
      break
    default:
      break
  }
}, {
  immediate: true,
})
</script>

<template>
  <el-icon :size="size" @click="toggleClick">
    <svg-icon class="cursor-pointer" :name="useAppConfig.appConfig.app.colorScheme === 'light' ? 'ep:sunny' : 'ep:moon'" />
  </el-icon>
</template>
