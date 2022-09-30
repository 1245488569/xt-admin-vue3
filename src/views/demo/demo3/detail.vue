<script setup lang="ts" name="demo3Detail">
const num = ref(1)
</script>

<template>
  <div>
    demo3详情
    <div>
      <el-input-number v-model="num" :min="1" :max="10" />
    </div>
  </div>
</template>
