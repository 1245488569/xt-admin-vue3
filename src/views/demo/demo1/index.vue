<script setup lang="ts" name="demo1Index">
import useCurrentInstance from '@/hooks/useCurrentInstance'
const num = ref(1)
const { globalProperties } = useCurrentInstance()
globalProperties.$hotkeys('f5', e => {
  e.preventDefault()
  alert('you pressed F5!')
})
</script>

<template>
  <div>
    <div>
      <el-input-number v-model="num" :min="1" :max="10" />
    </div>
  </div>
</template>
