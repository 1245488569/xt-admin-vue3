<script setup lang="ts" name="SvgIcon">
  import { Icon } from '@iconify/vue'
  const props = defineProps({
    name: {
      type: String,
      required: true
    },
    prefix: {
      type: String,
      default: 'icon',
    },
  })

  const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <Icon class="svg-icon" v-if="name.includes(':')" :icon="name" />
  <svg class="svg-icon" v-else aria-hidden="true">
    <use :xlink:href="symbolId" />
  </svg>
</template>
<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentcolor;
  overflow: hidden;
}
</style>
