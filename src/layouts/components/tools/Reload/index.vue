<script setup lang="ts">
import useLayoutTools from '@/hooks/useLayoutTools'

interface IProps {
  size?: number
}

defineOptions({
  name: 'Reload',
})

withDefaults(defineProps<IProps>(), {
  size: 20,
})

function reload() {
  useLayoutTools().reload()
}
</script>

<template>
  <el-icon :size="size" @click="reload">
    <svg-icon
      class="cursor-pointer"
      name="ep:refresh"
    />
  </el-icon>
</template>
