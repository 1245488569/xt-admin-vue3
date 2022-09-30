<script lang="ts" setup name="SidebarCollapse">
import { useAppConfigStore } from '@/store/app'
defineProps({
  size: {
    type: Number,
    default: 20
  }
})

const useAppConfig = useAppConfigStore()

const toggleClick = () => {
  useAppConfig.changeCollapse()
}
</script>

<template>
  <el-icon :size="size" @click="toggleClick">
    <svg-icon
      :name="useAppConfig.getCollapse ? 'hamburger-opened' : 'hamburger-closed'"
      class="cursor-pointer"
    ></svg-icon>
  </el-icon>
</template>
