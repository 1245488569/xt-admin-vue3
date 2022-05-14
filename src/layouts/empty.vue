<script lang="ts" setup name="EmptyRoute">
  import { useKeepAliveStore } from '@/store/keepAlive'
  const useKeepAlive = useKeepAliveStore()
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive :include="[...useKeepAlive.getAliveList]">
      <component :is="Component" :key="route.fullPath" />
    </keep-alive>
  </router-view>
  <!-- <router-view></router-view> -->
</template>

