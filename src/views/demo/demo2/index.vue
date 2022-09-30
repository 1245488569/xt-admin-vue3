<script setup lang="ts" name="demo2Index">
import router from '@/router'
const num = ref(1)
const goDeatil = () => {
  router.push({
    name: 'demo2Detail'
  })
}

const goTest = () => {
  router.push({
    name: 'test1'
  })
}
</script>

<template>
  <div>
    demo2

    <el-button @click="goTest">前往test</el-button>
    <el-button @click="goDeatil">前往详情</el-button>
    <div>
      <el-input-number v-model="num" :min="1" :max="10" />
    </div>
  </div>
</template>
