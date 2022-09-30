<script setup lang="ts">
const icon = ref('')
</script>

<template>
  <page-main>
    <div class="mb-3 text-2xl">图标选择</div>
    <icon-picker v-model="icon"></icon-picker>
  </page-main>
</template>
