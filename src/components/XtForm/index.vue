<script setup lang="ts" name="XtForm">
import cloneDeep from 'lodash/cloneDeep'
import { ElForm } from 'element-plus'
import type { FormOptions } from './types/types'

interface IProps {
  options: FormOptions[]
}

const props = withDefaults(defineProps<IProps>(), {})

const model = ref<any>(null)
const form = ref<InstanceType<typeof ElForm> | null>()

// 初始化表单
function initForm() {
  if (props.options && props.options.length) {
    const m: any = {}
    props.options.forEach((item: FormOptions) => m[item.prop!] = item.value)
    model.value = cloneDeep(m)
  }
}

onMounted(() => {
  initForm()
})

// 重置表单
function resetFields() {
  form.value?.resetFields()
}
// 表单验证方法
function validate() {
  return form.value!.validate
}
// 获取表单数据
function getFormData() {
  return model.value
}

// 分发方法
defineExpose({
  resetFields,
  validate,
  getFormData,
})
</script>

<template>
  <ElForm
    v-if="model"
    ref="form"
    :model="model"
    :validate-on-rule-change="false"
    v-bind="$attrs"
  >
    <template v-for="item in options" :key="item.prop">
      <template v-if="item.type === 'slot'">
        <el-form-item
          :prop="item.prop"
          :label="item.label"
          v-bind="item.fromItemOtherAttrs"
        >
          <slot :name="item.slot" :item="item" :model="model" />
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
            :is="`el-${item.type}`"
            v-bind="item.attrs"
            v-model="model[item.prop!]"
          />
        </el-form-item>
        <!-- 多组件 如select中嵌套了option -->
        <el-form-item
          v-if="item.children && item.children.length"
          :prop="item.prop"
          :label="item.label"
          v-bind="item.fromItemOtherAttrs"
        >
          <component
            :is="`el-${item.type}`"
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
                    'checkbox-button',
                  ].includes(child.type)
                "
              >
                <component
                  :is="`el-${child.type}`"
                  :label="child.label"
                >
                  {{ child.value }}
                </component>
              </template>
              <template v-else>
                <component
                  :is="`el-${child.type}`"
                  :label="child.label"
                  :value="child.value"
                />
              </template>
            </template>
          </component>
        </el-form-item>
      </template>
    </template>
    <el-form-item>
      <slot name="action" :form="form" :model="model" />
    </el-form-item>
  </ElForm>
</template>
