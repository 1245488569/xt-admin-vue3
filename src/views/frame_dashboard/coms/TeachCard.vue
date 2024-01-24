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
  <div class="course-card w-270px rounded-md">
    <div
      class="h-150px w-full flex items-center rounded-lt-md rounded-rt-md px-15px" :style="{
        background: `linear-gradient(50deg, ${colorFrom}, ${colorTo})`,
      }"
    >
      <div
        class="flex-1 text-18px font-bold" :style="{
          color,
          'line-height': 1.5,
        }"
      >
        {{ course.coverDesc }}
      </div>
      <div class="w-80px flex flex-shrink-0 justify-center">
        <el-icon :size="50">
          <svg-icon class="text-white" name="ri:skype-fill" />
        </el-icon>
      </div>
    </div>
    <div class="h-100px flex flex-col justify-between rounded-lb-md rounded-rb-md bg-[#fff] p-8px">
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
