<script setup lang="ts">
defineOptions({
  name: 'Cache1',
})

const input = ref('')
</script>

<template>
  <div>
    cache1
    <el-input v-model="input" placeholder="请输入内容" />
  </div>
</template>
