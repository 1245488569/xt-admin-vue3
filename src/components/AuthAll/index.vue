<script setup lang="ts">
import useAuth from '@/hooks/useAuth'

defineOptions({
  name: 'AuthAll',
})

defineProps<{
  value: string[]
}>()
</script>

<template>
  <div>
    <slot v-if="useAuth().authAll(value)" />
    <slot v-else name="no-auth" />
  </div>
</template>
