<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface IProps {
  name: string
  prefix?: string
}

defineOptions({
  name: 'SvgIcon',
})

const props = withDefaults(defineProps<IProps>(), {
  prefix: 'icon',
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
