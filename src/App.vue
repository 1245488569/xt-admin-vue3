<script setup lang="ts">
import useElementI18n from '@/hooks/useElementI18n'
import { useAppConfigStore } from '@/stores/app'

const useAppConfig = useAppConfigStore()
const { locale } = useElementI18n()
</script>

<template>
  <el-config-provider :locale="locale" :size="useAppConfig.appConfig.elementSize">
    <router-view />
  </el-config-provider>
</template>

<!-- <style lang="scss" scoped>
</style> -->
