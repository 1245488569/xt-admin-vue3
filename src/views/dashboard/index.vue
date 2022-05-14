<script setup lang="ts" name="dashboard">
  const num = ref(1)
</script>

<template>
  <page-main>
    <i-ep-arrow-right />
    <i-ep-baseball />
    <!-- <i-ep-map-location /> -->
    <SvgIcon name="ep:map-location" />

    <div>
      <el-input-number v-model="num" :min="1" :max="10" />
    </div>

    <div v-for="i in 100" :key="i">{{ i }}</div>
  </page-main>
</template>
