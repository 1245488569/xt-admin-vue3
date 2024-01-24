<script setup lang="ts">
import useLocalI18n from '@/hooks/useLocalI18n'

const { generateTitle } = useLocalI18n()
const router = useRouter()
function goHome() {
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center from-purple-300 to-blue-200 bg-gradient-to-r">
    <div class="w-[500px] flex flex-col items-center justify-center rounded-md bg-white py-12">
      <div class="text-9xl text-purple-400 font-bold">
        404
      </div>
      <div class="py-8 text-6xl font-medium dark:text-dark-900">
        {{ generateTitle('notfound.title') }}
      </div>
      <div class="pb-8 text-2xl font-medium dark:text-dark-900">
        {{ generateTitle('notfound.desc') }}
      </div>
      <div>
        <button class="back-btn" @click="goHome">
          {{ generateTitle('notfound.back') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.back-btn {
  @apply bg-gradient-to-r from-purple-400 to-blue-500 rounded-md font-semibold py-3 px-6 hover:from-pink-500 hover:to-orange-500;
}
</style>
