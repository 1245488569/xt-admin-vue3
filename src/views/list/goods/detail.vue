<script setup lang="ts">
const route = useRoute()
const id = route.query.id
</script>

<template>
  <page-main>
    goods_detail + {{ id }}
  </page-main>
</template>
