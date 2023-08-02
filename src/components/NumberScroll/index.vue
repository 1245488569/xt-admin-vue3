<script setup lang="ts">
import createAnimation from '@/utils/createAnimation'

const props = withDefaults(defineProps<{
  from?: number // 起始值
  to: number // 结束值
  totalMs?: number // 动画执行总时长
  duration?: number // 动画间隔时长
  toFixed?: number // 保留小数位数
  onUpdate?: (value: number) => void // 动画变化的回调
  onEnd?: () => void // 动画介绍的回调
}>(), {
  from: 0,
  totalMs: 1000,
  duration: 15,
  toFixed: 0,
})

const number = ref(props.from)

onMounted(() => {
  createAnimation({
    from: props.from,
    to: props.to,
    totalMs: props.totalMs,
    duration: props.duration,
    onUpdate: props.onUpdate
      ? props.onUpdate
      : (value) => {
          number.value = Number(value.toFixed(props.toFixed))
        },
    onEnd: props.onEnd,
  })
})
</script>

<template>
  <div>
    {{ number }}
  </div>
</template>
