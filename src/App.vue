<script setup lang="ts">
  // import ReloadPrompt from '@/pwa/reloadPrompt.vue'
  import useElementI18n from '@/hooks/useElementI18n'
  import { useAppConfigStore } from '@/store/app'
  const useAppConfig = useAppConfigStore()
  const { locale } = useElementI18n()
  document.title = import.meta.env.VITE_APP_TITLE

</script>

<template>
  <el-config-provider :locale="locale" :size="useAppConfig.elementSize">
    <router-view />
    <!-- <reload-prompt /> -->
  </el-config-provider>
</template>
