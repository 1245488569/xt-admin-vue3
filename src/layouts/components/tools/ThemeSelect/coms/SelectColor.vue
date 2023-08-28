<script lang="ts" setup name="SelectColor">
import { useAppConfigStore } from '@/stores/app'

type Key = keyof IGlobalTheme
interface IThemeData {
  title: string
  key: Key
  value: string
}

const useAppConfig = useAppConfigStore()
// logo主题数据
const logoThemeData = computed<IThemeData[]>(() => {
  return [
    // {
    //   title: '背景色',
    //   key: 'logoBgColor',
    //   value: useAppConfig.getTheme.logoBgColor,
    // },
    {
      title: '文字颜色',
      key: 'logoTextColor',
      value: useAppConfig.getTheme.logoTextColor,
    },
  ]
})

const mainMenuThemeData = computed<IThemeData[]>(() => {
  return [
    {
      title: '背景色',
      key: 'mainMenuBgColor',
      value: useAppConfig.getTheme.mainMenuBgColor,
    },
    {
      title: '选中背景色',
      key: 'mainMenuActiveBgColor',
      value: useAppConfig.getTheme.mainMenuActiveBgColor,
    },
    {
      title: '鼠标经过背景色',
      key: 'mainMenuHoverBgColor',
      value: useAppConfig.getTheme.mainMenuHoverBgColor,
    },
    {
      title: '文字颜色',
      key: 'mainMenuTextColor',
      value: useAppConfig.getTheme.mainMenuTextColor,
    },
    {
      title: '选中文字颜色',
      key: 'mainMenuActiveTextColor',
      value: useAppConfig.getTheme.mainMenuActiveTextColor,
    },
    {
      title: '鼠标经过文字颜色',
      key: 'mainMenuHoverTextColor',
      value: useAppConfig.getTheme.mainMenuHoverTextColor,
    },
  ]
})

const menuThemeData = computed<IThemeData[]>(() => {
  return [
    {
      title: '背景色',
      key: 'menuBgColor',
      value: useAppConfig.getTheme.menuBgColor,
    },
    {
      title: '选中背景色',
      key: 'menuActiveBgColor',
      value: useAppConfig.getTheme.menuActiveBgColor,
    },
    {
      title: '鼠标经过背景色',
      key: 'menuHoverBgColor',
      value: useAppConfig.getTheme.menuHoverBgColor,
    },
    {
      title: '文字颜色',
      key: 'menuTextColor',
      value: useAppConfig.getTheme.menuTextColor,
    },
    {
      title: '选中文字颜色',
      key: 'menuActiveTextColor',
      value: useAppConfig.getTheme.menuActiveTextColor,
    },
    {
      title: '鼠标经过文字颜色',
      key: 'menuHoverTextColor',
      value: useAppConfig.getTheme.menuHoverTextColor,
    },
  ]
})

const tabbarThemeData = computed<IThemeData[]>(() => {
  return [
    {
      title: 'tabbar背景色',
      key: 'tabbarBgColor',
      value: useAppConfig.getTheme.tabbarBgColor,
    },
    {
      title: 'tabbarItem背景色',
      key: 'tabbarItemBgColor',
      value: useAppConfig.getTheme.tabbarItemBgColor,
    },
    {
      title: '选中背景色',
      key: 'tabbarItemActiveBgColor',
      value: useAppConfig.getTheme.tabbarItemActiveBgColor,
    },
    {
      title: '鼠标经过背景色',
      key: 'tabbarItemHoverBgColor',
      value: useAppConfig.getTheme.tabbarItemHoverBgColor,
    },
    {
      title: '文字颜色',
      key: 'tabbarItemTextColor',
      value: useAppConfig.getTheme.tabbarItemTextColor,
    },
    {
      title: '选中文字颜色',
      key: 'tabbarItemActiveTextColor',
      value: useAppConfig.getTheme.tabbarItemActiveTextColor,
    },
    {
      title: '鼠标经过文字颜色',
      key: 'tabbarItemHoverTextColor',
      value: useAppConfig.getTheme.tabbarItemHoverTextColor,
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
          <el-color-picker v-model="item.value" show-alpha @change="themeChange(item.key, $event as string)" />
        </div>
      </div>

      <el-divider>主导航</el-divider>
      <div class="flex">
        <div v-for="item in mainMenuThemeData" :key="item.value" class="color-select-content">
          <span class="mb-1">{{ item.title }}</span>
          <el-color-picker v-model="item.value" show-alpha @change="themeChange(item.key, $event as string)" />
        </div>
      </div>

      <el-divider>侧导航</el-divider>
      <div class="flex">
        <div v-for="item in menuThemeData" :key="item.value" class="color-select-content">
          <span class="mb-1">{{ item.title }}</span>
          <el-color-picker v-model="item.value" show-alpha @change="themeChange(item.key, $event as string)" />
        </div>
      </div>

      <el-divider>tabbar</el-divider>
      <div class="flex">
        <section v-for="item in tabbarThemeData" :key="item.value" class="color-select-content">
          <span class="mb-1">{{ item.title }}</span>
          <el-color-picker v-model="item.value" show-alpha @change="themeChange(item.key, $event as string)" />
        </section>
      </div>
    </div>
  </xt-dialog>
</template>

<style lang="scss" scoped>
  .color-select-content {
    @apply flex flex-col w-1/4 items-center;
  }
</style>
