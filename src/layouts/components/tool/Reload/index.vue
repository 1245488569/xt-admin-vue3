
<script setup lang="ts" name="Reload">
  defineProps({
    size: {
      type: Number,
      default: 20
    }
  })
  const reload = inject('reload')
</script>

<template>
  <el-icon :size="size">
    <svg-icon
      class="cursor-pointer text-dark-50"
      name="ri:refresh-line"
      @click="reload"
    />
  </el-icon>
</template>
