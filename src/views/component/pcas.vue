<script setup lang="ts">
const pcas = ref<string[]>([])
const pca = ref<string[]>([])
const pc = ref<string[]>([])
</script>

<template>
  <div>
    <page-main>
      <div class="mb-3 text-2xl">
        省市区街道选择
      </div>
      <pcas-cascader v-model="pcas" />
    </page-main>

    <page-main class="mt-2">
      <div class="mb-3 text-2xl">
        省市区选择
      </div>
      <pcas-cascader v-model="pca" type="pca" />
    </page-main>

    <page-main class="mt-2">
      <div class="mb-3 text-2xl">
        省市选择
      </div>
      <pcas-cascader v-model="pc" type="pc" />
    </page-main>
  </div>
</template>
