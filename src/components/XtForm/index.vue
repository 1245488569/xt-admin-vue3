<script setup lang="ts" name="XtForm">
import { PropType } from 'vue'
import { FormOptions } from './types/types'
import cloneDeep from 'lodash/cloneDeep'
import type { ElForm } from 'element-plus'
import {
  ElCascader,
  ElCheckbox,
  ElCheckboxGroup,
  ElCheckboxButton,
  ElColorPicker,
  ElDatePicker,
  ElInput,
  ElRadioGroup,
  ElRadio,
  ElRadioButton,
  ElRate,
  ElSelect,
  ElOption,
  ElSlider,
  ElSwitch,
  ElTimePicker,
  ElTimeSelect
} from 'element-plus'
const componentsMap = {
  cascader: ElCascader,
  checkbox: ElCheckbox,
  'checkbox-group': ElCheckboxGroup,
  'checkbox-button': ElCheckboxButton,
  'color-picker': ElColorPicker,
  'date-picker': ElDatePicker,
  input: ElInput,
  'radio-group': ElRadioGroup,
  radio: ElRadio,
  'radio-button': ElRadioButton,
  rate: ElRate,
  select: ElSelect,
  option: ElOption,
  slider: ElSlider,
  switch: ElSwitch,
  'time-picker': ElTimePicker,
  'time-select': ElTimeSelect
}
const props = defineProps({
  // 表单的配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  }
})

const model = ref<any>(null)
const form = ref<InstanceType<typeof ElForm> | null>()

// 初始化表单
const initForm = () => {
  if (props.options && props.options.length) {
    const m: any = {}
    props.options.map((item: FormOptions) => {
      m[item.prop!] = item.value
    })
    model.value = cloneDeep(m)
  }
}

onMounted(() => {
  initForm()
})

// 重置表单
const resetFields = () => {
  // 重置element-plus的表单
  form.value?.resetFields
}
// 表单验证方法
const validate = () => {
  return form.value!.validate
}
// 获取表单数据
const getFormData = () => {
  return model.value
}

// 分发方法
defineExpose({
  resetFields,
  validate,
  getFormData
})
</script>

<template>
  <el-form
    v-if="model"
    ref="form"
    :model="model"
    :validate-on-rule-change="false"
    v-bind="$attrs"
  >
    <template v-for="(item, index) in options" :key="index">
      <template v-if="item.type === 'slot'">
        <el-form-item
          :prop="item.prop"
          :label="item.label"
          v-bind="item.fromItemOtherAttrs"
        >
          <slot :name="item.slot" :item="item" :model="model"></slot>
        </el-form-item>
      </template>
      <template v-else>
        <!-- 单组件如input -->
        <el-form-item
          v-if="!item.children || !item.children.length"
          :prop="item.prop"
          :label="item.label"
          v-bind="item.fromItemOtherAttrs"
        >
          <component
            :is="componentsMap[item.type]"
            v-bind="item.attrs"
            v-model="model[item.prop!]"
          ></component>
        </el-form-item>
        <!-- 多组件 如select中嵌套了option -->
        <el-form-item
          v-if="item.children && item.children.length"
          :prop="item.prop"
          :label="item.label"
          v-bind="item.fromItemOtherAttrs"
        >
          <component
            :is="componentsMap[item.type]"
            v-bind="item.attrs"
            v-model="model[item.prop!]"
          >
            <template v-for="(child, i) in item.children" :key="i">
              <template
                v-if="
                  [
                    'radio',
                    'radio-button',
                    'checkbox',
                    'checkbox-button'
                  ].includes(child.type)
                "
              >
                <component
                  :is="componentsMap[child.type]"
                  :label="child.label"
                  >{{ child.value }}</component
                >
              </template>
              <template v-else>
                <component
                  :is="componentsMap[child.type]"
                  :label="child.label"
                  :value="child.value"
                ></component>
              </template>
            </template>
          </component>
        </el-form-item>
      </template>
    </template>
    <el-form-item>
      <slot name="action" :form="form" :model="model"></slot>
    </el-form-item>
  </el-form>
</template>
