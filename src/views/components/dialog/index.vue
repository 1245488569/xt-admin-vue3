<script setup lang="ts">
  import XtDialog from '@/components/XtDialog/index.vue'
  import { FormOptions } from '@/components/XtForm/types/types'
  const dialogRef = ref<InstanceType<typeof XtDialog> | null>()

  const openDialog = () => {
    dialogRef.value?.open()
  }

  const options: FormOptions[] = [
    {
      type: 'input',
      value: '222',
      label: '用户名',
      prop: 'username',
      fromItemOtherAttrs: {
        style: {
          width: '48%',
          marginRight: '2%'
        },
        rules: [
          {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
          },
          {
            min: 2,
            max: 6,
            message: '用户名在2-6位之间',
            trigger: 'blur'
          }
        ],
      },
      attrs: {
        placeholder: '请输入用户名',
        clearable: true
      }
    },
    {
      type: 'input',
      value: '',
      label: '密码',
      prop: 'password',
      fromItemOtherAttrs: {
        style: {
          width: '50%',
          marginRight: 0
        },
        rules: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          },
          {
            min: 6,
            max: 15,
            message: '密码在6-15位之间',
            trigger: 'blur'
          }
        ],
      },
      attrs: {
        placeholder: '请输入密码',
        showPassword: true,
        clearable: true
      }
    },
    {
      type: 'radio-group',
      value: '2',
      prop: 'gender',
      label: '性别',
      fromItemOtherAttrs: {
        style: {
          width: '50%',
          marginRight: 0
        },
        rules: [
          {
            required: true,
            message: '性别不能为空',
            trigger: 'change'
          },
        ],
      },
      children: [
        {
          type: 'radio',
          label: '1',
          value: '男'
        },
        {
          type: 'radio',
          label: '2',
          value: '女'
        },
        {
          type: 'radio',
          label: '3',
          value: '未知'
        }
      ]
    },
    {
      type: 'checkbox-group',
      value: ['1'],
      prop: 'like',
      label: '爱好',
      fromItemOtherAttrs: {
        style: {
          width: '50%',
          marginRight: 0
        },
        rules: [
          {
            required: true,
            message: '爱好不能为空',
            trigger: 'change'
          },
        ],
      },
      children: [
        {
          type: 'checkbox',
          label: '1',
          value: '足球'
        },
        {
          type: 'checkbox',
          label: '2',
          value: '篮球'
        },
        {
          type: 'checkbox',
          label: '3',
          value: '排球'
        }
      ]
    },
    {
      type: 'select',
      value: '',
      prop: 'select',
      label: '下拉框',
      fromItemOtherAttrs: {
        style: {
          width: '100%',
          marginRight: 0
        },
        rules: [
          {
            required: true,
            message: '下拉框不能为空',
            trigger: 'change'
          },
        ],
      },
      children: [
        {
          type: 'option',
          label: '足球',
          value: 1
        },
        {
          type: 'option',
          label: '篮球',
          value: 2
        },
        {
          type: 'option',
          label: '排球',
          value: 3
        }
      ],
      attrs: {
        clearable: true,
      }
    },
  ]

  const formRef = ref()
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  const selectOptions = Array.from({ length: 1000 }).map((_, idx) => ({
    value: `Option ${idx + 1}`,
    label: `${initials[idx % 10]}${idx}`,
  }))
</script>

<template>
  <page-main>
    <div class="mb-3 text-2xl">弹框组件</div>
    <el-button @click="openDialog">普通弹框</el-button>


    <xt-dialog ref="dialogRef" width="1000px" title="提示">
      <xt-form ref="formRef" inline :options="options">
        <template #slot1="{ item, model }">
          <el-select-v2
            v-model="model[item.prop]"
            :options="selectOptions"
            v-bind="item.attrs"
          />
        </template>
      </xt-form>
    </xt-dialog>
  </page-main>
</template>
