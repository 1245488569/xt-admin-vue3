<script setup lang="ts" name="SvgIcon">
import { Icon } from '@iconify/vue'
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  prefix: {
    type: String,
    default: 'icon'
  }
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <Icon v-if="name.includes(':')" class="svg-icon" :icon="name" />
  <svg v-else class="svg-icon" aria-hidden="true">
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
