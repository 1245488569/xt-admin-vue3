<script setup lang="ts">
const pcas = ref<string[]>([])
const pca = ref<string[]>([])
const pc = ref<string[]>(['河北省', '石家庄市'])
</script>

<template>
  <div class="p-20px">
    <div class="p-20px">
      <div class="mb-3 text-2xl">
        省市区街道选择
      </div>
      <pcas-cascader v-model="pcas" />
    </div>

    <div class="p-20px mt-2">
      <div class="mb-3 text-2xl">
        省市区选择
      </div>
      <pcas-cascader v-model="pca" type="pca" />
    </div>

    <div class="p-20px mt-2">
      <div class="mb-3 text-2xl">
        省市选择
      </div>
      <pcas-cascader v-model="pc" type="pc" format="name" />
    </div>
  </div>
</template>
