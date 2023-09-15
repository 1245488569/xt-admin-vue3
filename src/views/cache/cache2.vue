<script setup lang="ts">
defineOptions({
  name: 'Cache2',
})

const input = ref('')
</script>

<template>
  <div>
    cache2
    <el-input v-model="input" placeholder="请输入内容" />
  </div>
</template>
