<script setup lang="ts">
import { useAppConfigStore } from '@/stores/app'

interface IProps {
  size?: number
}

defineOptions({
  name: 'ChangeSize',
})

withDefaults(defineProps<IProps>(), {
  size: 20,
})

const useAppConfig = useAppConfigStore()
const elementSize = computed(() => useAppConfig.appConfig.elementSize)

function changeSize(value: ElementSize) {
  useAppConfig.appConfig.elementSize = value
}
</script>

<template>
  <el-dropdown trigger="hover" @command="changeSize">
    <el-icon :size="size">
      <svg-icon name="ri:apps-fill" class="cursor-pointer" />
    </el-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="elementSize === 'default'" command="default">
          默认
        </el-dropdown-item>
        <el-dropdown-item :disabled="elementSize === 'large'" command="large">
          大型
        </el-dropdown-item>
        <el-dropdown-item :disabled="elementSize === 'small'" command="small">
          小型
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
