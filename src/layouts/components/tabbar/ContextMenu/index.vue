<script setup lang="ts">

</script>

<template>
  <ul class="context-menu-container">
    <li>
      刷新
    </li>
    <li>
      关闭
    </li>
    <li>
      关闭左侧
    </li>
    <li>
      关闭右侧
    </li>
    <li>
      关闭其他
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.context-menu-container {
  @apply bg-white rounded-md font-normal shadow text-xs text-black py-1 z-3000 fixed;

  li {
    @apply cursor-pointer m-0 py-2 px-6 whitespace-nowrap hover:bg-gray-300;

    &.disabled {
      @apply bg-white cursor-not-allowed text-gray-400;
    }
  }
}
</style>
