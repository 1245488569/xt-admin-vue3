<script setup lang="ts">
import type { ElForm } from 'element-plus'
import type { FormOptions } from '@/components/XtForm/types/types'

interface Scope {
  form: InstanceType<typeof ElForm> | null | undefined
  model: any
}
function selectOnchange(e: any) {
  console.log(e)
}
const options: FormOptions[] = [
  {
    type: 'input',
    value: '222',
    label: '用户名',
    prop: 'username',
    fromItemOtherAttrs: {
      style: {
        width: '45%',
      },
      rules: [
        {
          required: true,
          message: '用户名不能为空',
          trigger: 'blur',
        },
        {
          min: 2,
          max: 6,
          message: '用户名在2-6位之间',
          trigger: 'blur',
        },
      ],
    },
    attrs: {
      style: {
        width: '400px',
      },
      placeholder: '请输入用户名',
      clearable: true,
    },
  },
  {
    type: 'input',
    value: '',
    label: '密码',
    prop: 'password',
    fromItemOtherAttrs: {
      style: {
        width: '45%',
      },
      rules: [
        {
          required: true,
          message: '密码不能为空',
          trigger: 'blur',
        },
        {
          min: 6,
          max: 15,
          message: '密码在6-15位之间',
          trigger: 'blur',
        },
      ],
    },
    attrs: {
      style: {
        width: '400px',
      },
      placeholder: '请输入密码',
      showPassword: true,
      clearable: true,
    },
  },
  {
    type: 'radio-group',
    value: '2',
    prop: 'gender',
    label: '性别',
    fromItemOtherAttrs: {
      rules: [
        {
          required: true,
          message: '性别不能为空',
          trigger: 'change',
        },
      ],
    },
    children: [
      {
        type: 'radio',
        label: '男',
        value: '1',
      },
      {
        type: 'radio',
        label: '女',
        value: '2',
      },
      {
        type: 'radio',
        label: '未知',
        value: '3',
      },
    ],
  },
  {
    type: 'checkbox',
    value: true,
    label: '多选框',
    prop: 'checked',
    attrs: {
      label: '我是单多选框',
    },
  },
  {
    type: 'checkbox-group',
    value: ['1'],
    prop: 'like',
    label: '爱好',
    fromItemOtherAttrs: {
      rules: [
        {
          required: true,
          message: '爱好不能为空',
          trigger: 'change',
        },
      ],
    },
    children: [
      {
        type: 'checkbox',
        label: '足球',
        value: '1',
      },
      {
        type: 'checkbox',
        label: '篮球',
        value: '2',
      },
      {
        type: 'checkbox',
        label: '排球',
        value: '3',
      },
    ],
  },
  {
    type: 'select',
    value: 1,
    prop: 'select',
    label: '下拉框',
    fromItemOtherAttrs: {
      rules: [
        {
          required: true,
          message: '下拉框不能为空',
          trigger: 'change',
        },
      ],
    },
    children: [
      {
        type: 'option',
        label: '足球',
        value: 1,
      },
      {
        type: 'option',
        label: '篮球',
        value: 2,
      },
      {
        type: 'option',
        label: '排球',
        value: 3,
      },
    ],
    attrs: {
      clearable: true,
      onChange: selectOnchange,
      style: {
        width: '200px',
      },
    },
  },
  {
    type: 'slot',
    value: '',
    label: '插槽测试',
    prop: 'slot1',
    slot: 'slot1',
    fromItemOtherAttrs: {
      style: {
        width: '45%',
      },
    },
    attrs: {
      placeholder: '请选择',
      clearable: true,
    },
  },
]

const formRef = ref()
function submitForm(scope: Scope) {
  // 方式一
  scope.form?.validate((valid) => {
    if (valid)
      console.log(scope.model)
  })
  // 方式二
  // const validate = formRef.value.validate()
  // validate((valid: boolean) => {
  //   if (valid) {
  //     console.log(formRef.value.getFormData())
  //   }
  // })
}
// 重置表单
function resetForm() {
  formRef.value.resetFields()
}
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
const selectOptions = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option ${idx + 1}`,
  label: `${initials[idx % 10]}${idx}`,
}))
</script>

<template>
  <page-main>
    <div class="mb-3 text-2xl">
      表单封装-以配置项驱动的表单
    </div>
    <div>
      具体配置请在项目中查看
    </div>
  </page-main>

  <page-main>
    <xt-form ref="formRef" inline :options="options">
      <template #slot1="{ item, model }">
        <el-select-v2
          v-model="model[item.prop!]"
          :options="selectOptions"
          v-bind="item.attrs"
        />
      </template>
      <template #action="scope">
        <el-button type="primary" @click="submitForm(scope)">
          提交
        </el-button>
        <el-button @click="resetForm">
          重置
        </el-button>
      </template>
    </xt-form>
  </page-main>
</template>
