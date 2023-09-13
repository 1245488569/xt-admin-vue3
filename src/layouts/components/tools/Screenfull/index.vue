<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'

interface IProps {
  size?: number
}

defineOptions({
  name: 'Screenfull',
})

withDefaults(defineProps<IProps>(), {
  size: 20,
})

const { isFullscreen, toggle } = useFullscreen()
</script>

<template>
  <el-icon :size="size" @click="toggle">
    <svg-icon
      class="cursor-pointer"
      :name="isFullscreen ? 'ri:fullscreen-exit-fill' : 'ri:fullscreen-fill'"
    />
  </el-icon>
</template>
