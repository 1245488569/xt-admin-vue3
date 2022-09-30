<script setup lang="ts" name="dashboard">
import { ElMessage } from 'element-plus'
const showMsg = () => {
  ElMessage('this is a message.')
}
</script>

<template>
  <page-main>
    <el-button type="primary" @click="showMsg">Primary</el-button>
  </page-main>
</template>
