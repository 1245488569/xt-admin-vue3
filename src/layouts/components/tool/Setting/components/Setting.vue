
<script setup lang="ts" name="SettingDrawer">
  import { useAppConfigStore } from '@/store/app'

  export interface ISettingDrawerExposed {
    open: () => void
  }

  const useAppConfig = useAppConfigStore()
  const layoutMode = ref(useAppConfig.getLayoutMode)
  const layoutModeOptions = ref([
    {
      label: '只有顶部导航',
      value: 'onlyTopNav'
    },
    {
      label: '只有侧边栏导航',
      value: 'onlySubSideNav'
    },
    {
      label: '侧边主导航+侧边次栏导航',
      value: 'mainSubSideNav'
    },
    {
      label: '顶部主导航+侧边次栏导航',
      value: 'topSubSideNav'
    },
  ])
  const changeLayoutMode = (val: LayoutMode) => {

    useAppConfig.changeLayoutMode(val)
  }

  const isOpen = ref(false)
  const open = () => {
    isOpen.value = true
  }
  defineExpose({
    open
  })
</script>

<template>
  <div class="text-sm drawer">
    <el-drawer
      v-model="isOpen"
      title="应用配置"
      :size="350"
    >
      <el-alert title="应用配置可实时预览效果，仅临时生效。" type="error" :closable="false" />
      <el-divider>布局模式</el-divider>
      <div>
        <el-select v-model="layoutMode" @change="changeLayoutMode">
          <el-option
            v-for="item in layoutModeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <el-divider>app</el-divider>
      <div class="flex justify-between items-center">
        <span class="text-gray-500">开启载入进度条</span>
        <el-switch
          v-model="useAppConfig.app.enableProgress"
          inline-prompt
          active-text="是"
          inactive-text="否"
        />
      </div>
      <div class="flex justify-between items-center">
        <span class="text-gray-500">开启dashboard</span>
        <el-switch
          v-model="useAppConfig.app.enableDashboard"
          inline-prompt
          active-text="是"
          inactive-text="否"
        />
      </div>
      <el-divider>导航</el-divider>
      <div class="flex justify-between items-center">
        <span class="text-gray-500">收起次导航</span>
        <el-switch
          v-model="useAppConfig.nav.subMenuCollapse"
          inline-prompt
          active-text="是"
          inactive-text="否"
        />
      </div>
      <div class="flex justify-between items-center">
        <span class="text-gray-500">操作栏是否固定</span>
        <el-switch
          v-model="useAppConfig.nav.fixed"
          inline-prompt
          active-text="是"
          inactive-text="否"
        />
      </div>
      <el-divider>标签栏</el-divider>
      <div class="flex justify-between items-center">
        <span class="text-gray-500">开启标签栏</span>
        <el-switch
          v-model="useAppConfig.tabbar.enable"
          inline-prompt
          active-text="是"
          inactive-text="否"
        />
      </div>
      <el-divider>工具栏</el-divider>
      <div class="flex justify-between items-center">
        <span class="text-gray-500">开启工具栏</span>
        <el-switch
          v-model="useAppConfig.toolbar.enable"
          inline-prompt
          active-text="是"
          inactive-text="否"
        />
      </div>
      <div class="flex justify-between items-center">
        <span class="text-gray-500">开启全屏</span>
        <el-switch
          v-model="useAppConfig.toolbar.enableFullscreen"
          inline-prompt
          active-text="是"
          inactive-text="否"
        />
      </div>
      <div class="flex justify-between items-center">
        <span class="text-gray-500">开启换肤</span>
        <el-switch
          v-model="useAppConfig.toolbar.enableChangeTheme"
          inline-prompt
          active-text="是"
          inactive-text="否"
        />
      </div>
      <div class="flex justify-between items-center">
        <span class="text-gray-500">开启国际化</span>
        <el-switch
          v-model="useAppConfig.toolbar.enableI18n"
          inline-prompt
          active-text="是"
          inactive-text="否"
        />
      </div>
      <div class="flex justify-between items-center">
        <span class="text-gray-500">开启侧边栏展开收起按钮</span>
        <el-switch
          v-model="useAppConfig.toolbar.enableSidebarCollapse"
          inline-prompt
          active-text="是"
          inactive-text="否"
        />
      </div>
      <div class="flex justify-between items-center">
        <span class="text-gray-500">开启面包屑导航</span>
        <el-switch
          v-model="useAppConfig.toolbar.enableBreadcrumb"
          inline-prompt
          active-text="是"
          inactive-text="否"
        />
      </div>
      <div class="flex justify-between items-center">
        <span class="text-gray-500">开启页面刷新</span>
        <el-switch
          v-model="useAppConfig.toolbar.enablePageReload"
          inline-prompt
          active-text="是"
          inactive-text="否"
        />
      </div>
      <div class="flex justify-between items-center">
        <span class="text-gray-500">开启菜单搜索</span>
        <el-switch
          v-model="useAppConfig.toolbar.enableMenuSearch"
          inline-prompt
          active-text="是"
          inactive-text="否"
        />
      </div>
      <div class="flex justify-between items-center">
        <span class="text-gray-500">开启应用配置</span>
        <el-switch
          v-model="useAppConfig.toolbar.enableAppSetting"
          inline-prompt
          active-text="是"
          inactive-text="否"
        />
      </div>
    </el-drawer>
  </div>
</template>

<style lang="scss" scoped>
  .drawer {
    :deep(.el-drawer__body) {
      display: flex;
      flex-direction: column;
      overflow: auto;
      padding: 10px 20px;
    }

    :deep(.el-drawer__header) {
      margin-bottom: initial;
      padding-bottom: 20px;
      border-bottom: 1px solid #ddd;
    }
  }

</style>
