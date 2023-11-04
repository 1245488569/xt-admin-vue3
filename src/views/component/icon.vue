<script setup lang="ts">
const icon = ref('')
</script>

<template>
  <div class="p-20px">
    <div class="mb-3 text-2xl">
      图标选择
    </div>
    <icon-picker v-model="icon" />
  </div>
</template>
