<script setup lang="ts">
import SelectColor from './coms/SelectColor.vue'

interface IProps {
  size?: number
}

defineOptions({
  name: 'ThemeSelect',
})

withDefaults(defineProps<IProps>(), {
  size: 20,
})

const selectColorRef = ref<InstanceType<typeof SelectColor>>()

function handleClick() {
  selectColorRef.value?.open()
}
</script>

<template>
  <div class="flex items-center">
    <el-icon :size="size" @click="handleClick">
      <svg-icon
        class="cursor-pointer"
        name="ri:palette-line"
      />
    </el-icon>
    <!-- 展示弹出层 -->
    <SelectColor ref="selectColorRef" />
  </div>
</template>
