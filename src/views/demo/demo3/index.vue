<script setup lang="ts" name="demo3Index">
import router from '@/router'
const num = ref(1)
const goDeatil = () => {
  router.push({
    name: 'demo3Detail',
    query: {
      id: 123
    }
  })
}

const goDeatil2 = () => {
  router.push({
    name: 'demo3Detail',
    query: {
      id: 456
    }
  })
}
</script>

<template>
  <div>
    demo3
    <div>
      <el-input-number v-model="num" :min="1" :max="10" />
    </div>
    <el-button @click="goDeatil">前往详情1</el-button>
    <el-button @click="goDeatil2">前往详情2</el-button>
  </div>
</template>
