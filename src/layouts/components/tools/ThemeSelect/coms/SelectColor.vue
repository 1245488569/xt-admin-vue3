<script lang="ts" setup>
import { useAppConfigStore } from '@/stores/app'
import useLocalI18n from '@/hooks/useLocalI18n'

defineOptions({
  name: 'SelectColor',
})

const { generateTitle } = useLocalI18n()

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
      title: generateTitle('theme.logoTextColor'),
      key: 'logoTextColor',
      value: useAppConfig.getTheme.logoTextColor,
    },
  ]
})

// 主菜单主题数据
const mainMenuThemeData = computed<IThemeData[]>(() => {
  return [
    {
      title: generateTitle('theme.bgColor'),
      key: 'mainMenuBgColor',
      value: useAppConfig.getTheme.mainMenuBgColor,
    },
    {
      title: generateTitle('theme.activeBgColor'),
      key: 'mainMenuActiveBgColor',
      value: useAppConfig.getTheme.mainMenuActiveBgColor,
    },
    {
      title: generateTitle('theme.hoverBgColor'),
      key: 'mainMenuHoverBgColor',
      value: useAppConfig.getTheme.mainMenuHoverBgColor,
    },
    {
      title: generateTitle('theme.textColor'),
      key: 'mainMenuTextColor',
      value: useAppConfig.getTheme.mainMenuTextColor,
    },
    {
      title: generateTitle('theme.activeTextColor'),
      key: 'mainMenuActiveTextColor',
      value: useAppConfig.getTheme.mainMenuActiveTextColor,
    },
    {
      title: generateTitle('theme.hoverTextColor'),
      key: 'mainMenuHoverTextColor',
      value: useAppConfig.getTheme.mainMenuHoverTextColor,
    },
  ]
})

// 次菜单主题数据
const menuThemeData = computed<IThemeData[]>(() => {
  return [
    {
      title: generateTitle('theme.bgColor'),
      key: 'menuBgColor',
      value: useAppConfig.getTheme.menuBgColor,
    },
    {
      title: generateTitle('theme.activeBgColor'),
      key: 'menuActiveBgColor',
      value: useAppConfig.getTheme.menuActiveBgColor,
    },
    {
      title: generateTitle('theme.hoverBgColor'),
      key: 'menuHoverBgColor',
      value: useAppConfig.getTheme.menuHoverBgColor,
    },
    {
      title: generateTitle('theme.textColor'),
      key: 'menuTextColor',
      value: useAppConfig.getTheme.menuTextColor,
    },
    {
      title: generateTitle('theme.activeTextColor'),
      key: 'menuActiveTextColor',
      value: useAppConfig.getTheme.menuActiveTextColor,
    },
    {
      title: generateTitle('theme.hoverTextColor'),
      key: 'menuHoverTextColor',
      value: useAppConfig.getTheme.menuHoverTextColor,
    },
  ]
})

// tabbar主题数据
const tabbarThemeData = computed<IThemeData[]>(() => {
  return [
    {
      title: `tabbar${generateTitle('theme.bgColor')}`,
      key: 'tabbarBgColor',
      value: useAppConfig.getTheme.tabbarBgColor,
    },
    {
      title: `tabbarItem${generateTitle('theme.bgColor')}`,
      key: 'tabbarItemBgColor',
      value: useAppConfig.getTheme.tabbarItemBgColor,
    },
    {
      title: generateTitle('theme.bgColor'),
      key: 'tabbarItemActiveBgColor',
      value: useAppConfig.getTheme.tabbarItemActiveBgColor,
    },
    {
      title: generateTitle('theme.hoverBgColor'),
      key: 'tabbarItemHoverBgColor',
      value: useAppConfig.getTheme.tabbarItemHoverBgColor,
    },
    {
      title: generateTitle('theme.textColor'),
      key: 'tabbarItemTextColor',
      value: useAppConfig.getTheme.tabbarItemTextColor,
    },
    {
      title: generateTitle('theme.activeTextColor'),
      key: 'tabbarItemActiveTextColor',
      value: useAppConfig.getTheme.tabbarItemActiveTextColor,
    },
    {
      title: generateTitle('theme.hoverTextColor'),
      key: 'tabbarItemHoverTextColor',
      value: useAppConfig.getTheme.tabbarItemHoverTextColor,
    },
  ]
})

// toolbar主题数据
const toolbarThemeData = computed<IThemeData[]>(() => {
  return [
    {
      title: generateTitle('theme.bgColor'),
      key: 'toolbarBgColor',
      value: useAppConfig.getTheme.toolbarBgColor,
    },
    {
      title: generateTitle('theme.textColor'),
      key: 'toolbarTextColor',
      value: useAppConfig.getTheme.toolbarTextColor,
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
  <xt-dialog v-model="dialogVisible" :title="generateTitle('theme.themeChange')" append-to-body width="900px" :show-cancel="false" :show-confirm="false">
    <div>
      <el-divider>logo</el-divider>
      <div class="flex">
        <section v-for="item in logoThemeData" :key="item.value" class="color-select-content">
          <span class="mb-1">{{ item.title }}</span>
          <el-color-picker v-model="item.value" show-alpha @change="themeChange(item.key, $event as string)" />
        </section>
      </div>

      <el-divider>{{ generateTitle('theme.mianNav') }}</el-divider>
      <div class="flex">
        <section v-for="item in mainMenuThemeData" :key="item.value" class="color-select-content">
          <span class="mb-1">{{ item.title }}</span>
          <el-color-picker v-model="item.value" show-alpha @change="themeChange(item.key, $event as string)" />
        </section>
      </div>

      <el-divider>{{ generateTitle('theme.subNav') }}</el-divider>
      <div class="flex">
        <section v-for="item in menuThemeData" :key="item.value" class="color-select-content">
          <span class="mb-1">{{ item.title }}</span>
          <el-color-picker v-model="item.value" show-alpha @change="themeChange(item.key, $event as string)" />
        </section>
      </div>

      <el-divider>{{ generateTitle('theme.tabbar') }}</el-divider>
      <div class="flex">
        <section v-for="item in tabbarThemeData" :key="item.value" class="color-select-content">
          <span class="mb-1">{{ item.title }}</span>
          <el-color-picker v-model="item.value" show-alpha @change="themeChange(item.key, $event as string)" />
        </section>
      </div>

      <el-divider>{{ generateTitle('theme.toolbar') }}</el-divider>
      <div class="flex">
        <section v-for="item in toolbarThemeData" :key="item.value" class="color-select-content">
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
