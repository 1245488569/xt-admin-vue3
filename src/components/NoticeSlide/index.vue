<script setup lang="ts">
const props = withDefaults(defineProps<{
  list: string[]
  bgColor?: string
  textColor?: string
  duration?: number
}>(), {
  bgColor: 'var(--el-color-warning)',
  textColor: '#fff',
  duration: 2000,
})

const noticeStyle = computed(() => {
  return {
    backgroundColor: props.bgColor,
    color: props.textColor,
  }
})

const curIndex = ref(0)
const timer = ref<any>(null)

const notice = computed(() => {
  return {
    id: curIndex.value,
    text: props.list[curIndex.value],
  }
})

function scollMove() {
  timer.value = setTimeout(() => {
    curIndex.value === props.list.length - 1 ? curIndex.value = 0 : curIndex.value++
    scollMove()
  }, props.duration)
}

function mouseEnter() {
  timer.value && clearTimeout(timer.value)
}

function mouseLeave() {
  scollMove()
}

onMounted(() => {
  scollMove()
})
</script>

<template>
  <div class="relative h-15 w-full flex items-center overflow-hidden rounded px-4" :style="noticeStyle" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <slot>
      <div class="mr-4 flex-shrink-0 border-r pr-4 font-bold">
        最新公告
      </div>
    </slot>
    <transition name="notice-slide">
      <div :key="notice.id" class="h-30px flex flex-1 items-center truncate">
        <p class="truncate">
          {{ notice.text }}
        </p>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.notice-slide-enter-active {
  transition: transform 0.8s ease-out;
}

.notice-slide-leave-active {
  transition: transform 0.3s linear;
}

.notice-slide-enter-from {
  transform: translateY(70px);
}

.notice-slide-leave-to {
  transform: translateY(-25px);
}
</style>
