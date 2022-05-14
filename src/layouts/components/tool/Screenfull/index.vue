
<script setup lang="ts" name="Screenfull">
  import { useFullscreen } from '@vueuse/core'
  const { isFullscreen, toggle } = useFullscreen()

  defineProps({
    size: {
      type: Number,
      default: 20
    }
  })
</script>

<template>
  <el-icon :size="size">
    <svg-icon
      class="cursor-pointer text-dark-50"
      :name="isFullscreen ? 'ri:fullscreen-exit-fill' : 'ri:fullscreen-fill'"
      @click="toggle"
    />
  </el-icon>
</template>
