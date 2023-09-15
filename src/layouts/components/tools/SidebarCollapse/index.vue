<script setup lang="ts">
import { useAppConfigStore } from '@/stores/app'

interface IProps {
  size?: number
}

defineOptions({
  name: 'SidebarCollapse',
})

withDefaults(defineProps<IProps>(), {
  size: 20,
})

const useAppConfig = useAppConfigStore()

function toggleClick() {
  useAppConfig.appConfig.nav.subMenuCollapse = !useAppConfig.appConfig.nav.subMenuCollapse
}
</script>

<template>
  <el-icon :size="size" @click="toggleClick">
    <svg-icon :name="useAppConfig.getCollapse ? 'hamburger-opened' : 'hamburger-closed'" class="cursor-pointer" />
  </el-icon>
</template>
