<script setup lang="ts">
import useAuth from '@/hooks/useAuth'

defineOptions({
  name: 'Auth',
})

defineProps<{
  value: string | string[]
}>()
</script>

<template>
  <div>
    <slot v-if="useAuth().auth(value)" />
    <slot v-else name="no-auth" />
  </div>
</template>
