<script setup lang="ts">
import mainSidebar from './components/sidebar/MainSidebar.vue'
import subSidebar from './components/sidebar/SubSidebar.vue'
import { useAppConfigStore } from '@/stores/app'

const useAppConfig = useAppConfigStore()

const showTop = computed(() => {
  return ['onlyTopNav', 'topSubSideNav'].includes(useAppConfig.getLayoutMode)
})
const showSidebar = computed(() => {
  return useAppConfig.getLayoutMode !== 'onlyTopNav'
})
const showMainSidebar = computed(() => {
  return useAppConfig.getLayoutMode === 'mainSubSideNav'
})
const showSubSidebar = computed(() => {
  return useAppConfig.getLayoutMode !== 'onlyTopNav'
})

const sideBarWidth = computed(() => {
  if (!useAppConfig.getCollapse) {
    if (useAppConfig.getLayoutMode === 'mainSubSideNav')
      return 'w-[calc(var(--xt-main-sidebar-width)+var(--xt-sub-sidebar-width))]'

    return 'w-[var(--xt-sub-sidebar-width)]'
  }
  else {
    if (useAppConfig.getLayoutMode === 'mainSubSideNav')
      return 'w-[calc(var(--xt-main-sidebar-width)+var(--xt-sub-sidebar-collapse-width))]'

    return 'w-[var(--xt-sub-sidebar-collapse-width)]'
  }
})
</script>

<template>
  <div class="h-full">
    <section class="flex flex-col h-full relative">
      <template v-if="showTop">
        <div class="h-20 flex-shrink-0">
          top
        </div>
      </template>

      <div class="flex-1 flex overflow-hidden">
        <template v-if="showSidebar">
          <div class="h-full flex" :class="[sideBarWidth]">
            <template v-if="showMainSidebar">
              <main-sidebar />
            </template>
            <template v-if="showSubSidebar">
              <sub-sidebar />
            </template>
          </div>
        </template>

        <main class="flex-1 overflow-auto main-box">
          <section>
            <router-view />
          </section>
        </main>
      </div>
    </section>

    <el-backtop target=".main-box" :right="20" :bottom="20" />
  </div>
</template>
