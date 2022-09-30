<script setup lang="ts" name="PageMain">
const props = defineProps({
  size: {
    type: Number,
    default: 25
  },
  collaspe: {
    type: Boolean,
    default: false
  },
  height: {
    type: String,
    default: ''
  }
})

const collaspeData = ref(props.collaspe)

const unCollaspe = () => {
  collaspeData.value = false
}
</script>

<template>
  <div
    class="page-main"
    :class="{ 'is-collaspe': collaspeData }"
    :style="{ height: collaspeData ? height : '' }"
  >
    <slot />
    <div v-if="collaspeData" class="collaspe" title="open" @click="unCollaspe">
      <el-icon :size="size">
        <svg-icon name="ep:arrow-down" />
      </el-icon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-main {
  @apply bg-white m-5 p-5 relative;

  &.is-collaspe {
    @apply overflow-hidden;

    .collaspe {
      @apply cursor-pointer text-center w-full px-0 pt-10 pb-2 bottom-0 left-0 text-gray-300 duration-300 absolute hover:text-gray-900;
    }
  }
}
</style>
