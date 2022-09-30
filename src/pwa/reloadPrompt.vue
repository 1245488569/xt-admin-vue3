<template>
  <div v-if="needRefresh" class="toast" role="alert">
    <div class="mb-2">请更新（请点击“更新”，你将看见最新的内容）。</div>
    <button @click="updateServiceWorker()">更新</button>
    <button @click="close">关闭</button>
  </div>
</template>

<script setup lang="ts" name="ReloadPrompt">
import { useRegisterSW } from 'virtual:pwa-register/vue'

const { needRefresh, updateServiceWorker } = useRegisterSW()

const close = async () => {
  needRefresh.value = false
}
</script>

<style lang="scss" scoped>
.toast {
  @apply bg-white border border-solid rounded-md border-gray-100 m-5 shadow shadow-sm text-left p-4 right-0 bottom-0 w-[300px] z-10000 fixed;

  button {
    @apply border border-solid rounded-sm cursor-pointer outline-none border-gray-100 mr-1 py-2 px-1 hover:border-blue-400;
  }
}
</style>
