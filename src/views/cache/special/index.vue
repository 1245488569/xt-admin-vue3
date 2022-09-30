<script setup lang="ts" name="cacheSpecial">
const num = ref(1)
</script>

<template>
  <page-main>
    <div>
      cacheSpecial
      <div>
        <el-input-number v-model="num" :min="1" :max="10" />
      </div>
    </div>
  </page-main>
</template>
