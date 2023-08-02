<script setup lang="ts" name="MainSidebar">
import logo from '../logo/index.vue'
</script>

<template>
  <div class="w-[var(--xt-main-sidebar-width)] flex flex-col flex-shrink-0">
    <logo :show-logo-text="false" />
    <div class="flex-1 overflow-hidden hover:overflow-y-auto">
      <div v-for="i in 100" :key="i">
        {{ i }}
      </div>
    </div>
  </div>
</template>
