<script setup lang="ts" name="XtDialog">
const dialogVisible = ref(false)
const open = () => {
  dialogVisible.value = true
}
const close = () => {
  dialogVisible.value = false
}
const Confirm = () => {
  dialogVisible.value = false
}
// 分发方法
defineExpose({
  open,
  close,
  Confirm
})
</script>

<template>
  <el-dialog v-model="dialogVisible" v-bind="$attrs">
    <template #default>
      <slot></slot>
    </template>
    <template #footer>
      <span>
        <el-button @click="close">Cancel</el-button>
        <el-button type="primary" @click="Confirm">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>
