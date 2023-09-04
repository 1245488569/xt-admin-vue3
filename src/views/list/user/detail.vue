<script setup lang="ts">
const route = useRoute()
const id = route.query.id
</script>

<template>
  <div>
    user_detail + {{ id }}
  </div>
</template>
