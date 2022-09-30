<script setup lang="ts" name="demo2Detail">
const num = ref(1)
</script>

<template>
  <div>
    demo2详情
    <div>
      <el-input-number v-model="num" :min="1" :max="10" />
    </div>
  </div>
</template>
