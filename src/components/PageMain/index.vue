<script setup lang="ts">
defineOptions({
  name: 'PageMain',
})

const props = withDefaults(defineProps<{
  size?: number
  collaspe?: boolean
  height?: string
}>(), {
  size: 20,
  collaspe: false,
  height: '',
})

const isCollaspe = ref(props.collaspe)

function changeCollaspe() {
  isCollaspe.value = false
}
</script>

<template>
  <div
    class="page-main"
    :class="{ 'is-collaspe': isCollaspe }"
    :style="{ height: isCollaspe ? height : '' }"
  >
    <slot />
    <div v-if="isCollaspe" class="collaspe" title="open" @click="changeCollaspe">
      <el-icon :size="size">
        <svg-icon name="ep:arrow-down" />
      </el-icon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-main {
  @apply bg-[var(--el-bg-color)] rounded-lg m-5 p-5 relative;

  &.is-collaspe {
    @apply overflow-hidden;

    .collaspe {
      @apply cursor-pointer text-center text-black w-full px-0 pt-10 pb-2 bottom-0 left-0 duration-300 absolute dark:text-white;
    }
  }
}
</style>
