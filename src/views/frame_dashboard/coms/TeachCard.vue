<script setup lang="ts">
withDefaults(defineProps<{
  course: any
  colorFrom?: string
  colorTo?: string
  color?: string
  icon?: string
}>(), {
  colorFrom: '#843cf6',
  colorTo: '#759bff',
  color: '#fff',
  icon: '',
})

const emits = defineEmits(['click'])

function clcik() {
  emits('click')
}
</script>

<template>
  <div class="rounded-md w-270px course-card">
    <div
      class="rounded-lt-md rounded-rt-md flex h-150px w-full px-15px  items-center" :style="{
        background: `linear-gradient(50deg, ${colorFrom}, ${colorTo})`,
      }"
    >
      <div
        class="font-bold flex-1 text-18px" :style="{
          color,
          'line-height': 1.5,
        }"
      >
        {{ course.coverDesc }}
      </div>
      <div class="flex flex-shrink-0 w-80px justify-center">
        <el-icon :size="50">
          <svg-icon class="text-white" name="ri:skype-fill" />
        </el-icon>
      </div>
    </div>
    <div class="bg-[#fff] rounded-lb-md rounded-rb-md flex flex-col h-100px p-8px justify-between">
      <div class="text-[#545c63]">
        {{ course.title }}
      </div>
      <div class="flex justify-between">
        <div class="text-[#f01414]">
          ¥ {{ course.price }}
        </div>
        <div>
          <el-button type="primary" link @click="clcik">
            查看
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.course-card {
  box-shadow: 0 6px 12px 0 rgb(55 55 55 / 20%);
}
</style>
