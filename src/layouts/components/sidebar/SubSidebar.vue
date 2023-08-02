<script setup lang="ts" name="SubSidebar">
import logo from '../logo/index.vue'
import { useAppConfigStore } from '@/stores/app'

const useAppConfig = useAppConfigStore()

const showLogo = computed(() => {
  return ['onlySubSideNav', 'mainSubSideNav'].includes(useAppConfig.getLayoutMode)
})

const subSidebarWidth = computed(() => {
  if (!useAppConfig.getCollapse)
    return 'w-[var(--xt-sub-sidebar-width)]'
  else
    return 'w-[var(--xt-sub-sidebar-collapse-width)]'
})
</script>

<template>
  <div class="flex flex-col" :class="[subSidebarWidth]">
    <logo
      v-if="showLogo"
      :show-logo-image="useAppConfig.getLayoutMode === 'mainSubSideNav' ? false : true"
      :show-logo-text="useAppConfig.getLayoutMode === 'onlySubSideNav' && useAppConfig.getCollapse ? false : true"
    />
    <div class="flex-1 overflow-hidden hover:overflow-y-auto">
      <div v-for="i in 100" :key="i">
        {{ i }}
      </div>
    </div>
  </div>
</template>
