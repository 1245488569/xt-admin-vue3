<script setup lang="ts" name="Setting">
import Setting, { ISettingDrawerExposed } from './components/Setting.vue'
defineProps({
  size: {
    type: Number,
    default: 20
  }
})

// 解决要有子组件提示 且打包不报错的办法
const settingDrawerRef = ref<
  null | (InstanceType<typeof Setting> & ISettingDrawerExposed)
>(null)
const openSettingDrawer = () => {
  settingDrawerRef.value?.open()
}
</script>

<template>
  <div class="flex items-center">
    <el-icon :size="size">
      <svg-icon
        class="cursor-pointer text-dark-50"
        name="ri:settings-2-line"
        @click="openSettingDrawer"
      />
    </el-icon>
    <Setting ref="settingDrawerRef"></Setting>
  </div>
</template>
