<script lang="ts" setup name="SelectColor">
import { useAppConfigStore } from '@/store/app'
import { generateTitle } from '@/util/i18n'
defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})
const emits = defineEmits(['update:modelValue'])
const useAppConfig = useAppConfigStore()

const logoThemeData = computed(() => {
  return [
    {
      title: generateTitle('theme.logoBgColor'),
      key: 'logoBgColor',
      value: useAppConfig.getTheme.logoBgColor
    },
    {
      title: generateTitle('theme.logoTextColor'),
      key: 'logoTextColor',
      value: useAppConfig.getTheme.logoTextColor
    }
  ]
})

const mainMenuThemeData = computed(() => {
  return [
    {
      title: generateTitle('theme.menuBgColor'),
      key: 'mainMenuBgColor',
      value: useAppConfig.getTheme.mainMenuBgColor
    },
    {
      title: generateTitle('theme.menuActiveBgColor'),
      key: 'mainMenuActiveBgColor',
      value: useAppConfig.getTheme.mainMenuActiveBgColor
    },
    {
      title: generateTitle('theme.menuTextColor'),
      key: 'mainMenuTextColor',
      value: useAppConfig.getTheme.mainMenuTextColor
    },
    {
      title: generateTitle('theme.menuActiveTextColor'),
      key: 'mainMenuActiveTextColor',
      value: useAppConfig.getTheme.mainMenuActiveTextColor
    }
  ]
})

const menuThemeData = computed(() => {
  return [
    {
      title: generateTitle('theme.menuBgColor'),
      key: 'menuBgColor',
      value: useAppConfig.getTheme.menuBgColor
    },
    {
      title: generateTitle('theme.menuActiveBgColor'),
      key: 'menuActiveBgColor',
      value: useAppConfig.getTheme.menuActiveBgColor
    },
    {
      title: generateTitle('theme.menuTextColor'),
      key: 'menuTextColor',
      value: useAppConfig.getTheme.menuTextColor
    },
    {
      title: generateTitle('theme.menuActiveTextColor'),
      key: 'menuActiveTextColor',
      value: useAppConfig.getTheme.menuActiveTextColor
    }
  ]
})

const otherThemeData = computed(() => {
  return [
    {
      title: generateTitle('theme.mianContentBgColor'),
      key: 'mianContentBgColor',
      value: useAppConfig.getTheme.mianContentBgColor
    }
  ]
})

const menuThemeChange = (item, color) => {
  useAppConfig.changTheme(item.key, color)
}

const closed = () => {
  emits('update:modelValue', false)
}
</script>

<template>
  <el-dialog
    :title="$t('theme.themeChange')"
    :model-value="modelValue"
    append-to-body
    width="800px"
    @close="closed"
  >
    <div>
      <el-divider>logo</el-divider>
      <div class="flex">
        <section
          v-for="item in logoThemeData"
          :key="item.value"
          class="color-select-content"
        >
          <span class="mb-1">{{ item.title }}</span>
          <el-color-picker
            v-model="item.value"
            @change="menuThemeChange(item, $event)"
          />
        </section>
      </div>
    </div>
    <div>
      <el-divider>{{ $t('theme.mianNav') }}</el-divider>
      <div class="flex">
        <section
          v-for="item in mainMenuThemeData"
          :key="item.value"
          class="color-select-content"
        >
          <span class="mb-1">{{ item.title }}</span>
          <el-color-picker
            v-model="item.value"
            @change="menuThemeChange(item, $event)"
          />
        </section>
      </div>
    </div>
    <div>
      <el-divider>{{ $t('theme.subNav') }}</el-divider>
      <div class="flex">
        <section
          v-for="item in menuThemeData"
          :key="item.value"
          class="color-select-content"
        >
          <span class="mb-1">{{ item.title }}</span>
          <el-color-picker
            v-model="item.value"
            @change="menuThemeChange(item, $event)"
          />
        </section>
      </div>
    </div>
    <div>
      <el-divider>{{ $t('theme.other') }}</el-divider>
      <div class="flex">
        <section
          v-for="item in otherThemeData"
          :key="item.value"
          class="color-select-content"
        >
          <span class="mb-1">{{ item.title }}</span>
          <el-color-picker
            v-model="item.value"
            @change="menuThemeChange(item, $event)"
          />
        </section>
      </div>
    </div>
  </el-dialog>
</template>

<style lang="scss" scoped>
.color-select-content {
  @apply flex flex-col w-1/4 items-center;
}
</style>
