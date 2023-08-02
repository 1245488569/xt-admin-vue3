<script lang="ts" setup name="SelectColor">
import { useAppConfigStore } from '@/stores/app'

type Key = 'logoBgColor' | 'logoTextColor'
interface IThemeData {
  title: string
  key: Key
  value: string
}

const useAppConfig = useAppConfigStore()
// logo主题数据
const logoThemeData = computed<IThemeData[]>(() => {
  return [
    {
      title: '背景色',
      key: 'logoBgColor',
      value: useAppConfig.getTheme.logoBgColor,
    },
    {
      title: '文字颜色',
      key: 'logoTextColor',
      value: useAppConfig.getTheme.logoTextColor,
    },
  ]
})

function themeChange(key: Key, color: string) {
  useAppConfig.appConfig.theme[key] = color
}

const dialogVisible = ref(false)

function open() {
  dialogVisible.value = true
}

defineExpose({
  open,
})
</script>

<template>
  <xt-dialog v-model="dialogVisible" title="设置主题色" append-to-body width="800px" :show-cancel="false" :show-confirm="false">
    <div>
      <el-divider>logo</el-divider>
      <div class="flex">
        <div v-for="item in logoThemeData" :key="item.value" class="color-select-content">
          <span class="mb-1">{{ item.title }}</span>
          <el-color-picker v-model="item.value" @change="themeChange(item.key, $event as string)" />
        </div>
      </div>
    </div>
  </xt-dialog>
</template>

<style lang="scss" scoped>
  .color-select-content {
    @apply flex flex-col w-1/4 items-center;
  }
</style>