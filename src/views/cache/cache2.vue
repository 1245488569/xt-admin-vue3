<script setup lang="ts">
defineOptions({
  name: 'Cache2',
})

const input = ref('')
</script>

<template>
  <page-main>
    cache2: 你可以先在输入框中随便输入点东西，然后前往其他页面在后来查看输入框中的值是否还在
    <div class="mt-2">
      <el-input v-model="input" placeholder="请输入内容" />
    </div>
  </page-main>
</template>
