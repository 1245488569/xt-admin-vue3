<script setup lang="ts">
  import router from '@/router'
  const goBack = () => {
    router.push('/')
  }
</script>

<template>
  <div class="bg-gradient-to-r from-purple-300 to-blue-200">
    <div class="flex m-auto min-h-screen py-16 w-9/12 items-center justify-center">
      <div class="bg-white shadow pb-8 overflow-hidden sm:rounded-lg">
        <div class="border-t border-gray-200 text-center pt-8">
          <h1 class="font-bold text-9xl text-purple-400">404</h1>
          <h1 class="font-medium py-8 text-6xl">{{ $t('notfound.title') }}</h1>
          <p class="font-medium px-12 pb-8 text-2xl">{{ $t('notfound.desc') }}</p>
          <button class="bg-gradient-to-r rounded-md font-semibold from-purple-400 to-blue-500 text-white mr-6 py-3 px-6 hover:from-pink-500 hover:to-orange-500" @click="goBack">
            {{ $t('notfound.back') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
