<script setup lang="ts">
import SettingDrawer from './SettingDrawer/index.vue'

defineOptions({
  name: 'Setting',
})

const settingDrawerRef = ref<InstanceType<typeof SettingDrawer>>()

function openSettingDrawer() {
  settingDrawerRef.value?.open()
}
</script>

<template>
  <div class="h-50px w-50px flex cursor-pointer items-center justify-center rounded bg-[#409eff] text-white" @click="openSettingDrawer">
    <el-icon :size="25">
      <svg-icon name="ri:settings-2-line" />
    </el-icon>

    <Teleport to="body">
      <SettingDrawer ref="settingDrawerRef" />
    </Teleport>
  </div>
</template>
