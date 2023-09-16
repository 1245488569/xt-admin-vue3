<script setup lang="ts">
const route = useRoute()
const id = route.query.id
</script>

<template>
  <page-main>
    user_detail + {{ id }}
  </page-main>
</template>
