<script setup lang="ts">
import pcasRaw from './data/data.json'

interface IPcasItem {
  code: string
  name: string
  children?: IPcasItem[]
}

interface IBothItem {
  code: string
  name: string
}

type IModelValue = (string | IBothItem)[]

defineOptions({
  name: 'PcasCascader',
})

const props = withDefaults(defineProps<{
  modelValue: IModelValue
  type?: 'pc' | 'pca' | 'pcas'
  format?: 'code' | 'name' | 'both'
}>(), {
  type: 'pcas',
  format: 'code',
})
const emit = defineEmits(['update:modelValue'])

const cascaderConfig = {
  value: 'code',
  label: 'name',
}

const pcasData = computed(() => {
  const data: IPcasItem[] = []
  // 省份
  pcasRaw.forEach((p) => {
    const tempP: IPcasItem = {
      code: p.code,
      name: p.name,
    }
    const tempChildrenC: IPcasItem[] = []
    // 城市
    p.children.forEach((c) => {
      const tempC: IPcasItem = {
        code: c.code,
        name: c.name,
      }
      if (['pca', 'pcas'].includes(props.type)) {
        const tempChildrenA: IPcasItem[] = []
        // 区县
        c.children.forEach((a) => {
          const tempA: IPcasItem = {
            code: a.code,
            name: a.name,
          }
          if (props.type === 'pcas') {
            const tempChildrenS: IPcasItem[] = []
            // 街道
            a.children.forEach((s) => {
              const tempS: IPcasItem = {
                code: s.code,
                name: s.name,
              }
              tempChildrenS.push(tempS)
            })
            tempA.children = tempChildrenS
          }
          tempChildrenA.push(tempA)
        })
        tempC.children = tempChildrenA
      }
      tempChildrenC.push(tempC)
    })
    tempP.children = tempChildrenC
    data.push(tempP)
  })
  return data
})

const myValue = computed({
  // 将入参数据转成 code 码
  get: () => {
    return anyToCode(props.modelValue)
  },
  // 将 code 码转成出参数据
  set: (value) => {
    emit('update:modelValue', value ? codeToAny(value) : [])
  },
})

function anyToCode(value: IModelValue, data = pcasData.value) {
  const arr: string[] = []
  if (value.length) {
    const findItem = data.find((item) => {
      if (props.format === 'code')
        return item.code === value[0]

      else if (props.format === 'name')
        return item.name === value[0]

      else
        return item.name === (value[0] as IBothItem).name && item.code === (value[0] as IBothItem).code
    })
    arr.push(findItem!.code)
    if (findItem!.children)
      arr.push(...anyToCode(value.slice(1 - value.length), findItem!.children))
  }
  return arr
}

function codeToAny(codes: string[], data = pcasData.value): IModelValue {
  const arr = []
  const findItem = data.find(item => item.code === codes[0])
  if (findItem) {
    switch (props.format) {
      case 'code':
        arr.push(findItem.code)
        break
      case 'name':
        arr.push(findItem.name)
        break
      case 'both':
        arr.push({
          code: findItem.code,
          name: findItem.name,
        })
    }
    const newCodes = codes.slice(1 - codes.length)
    if (newCodes.length > 0 && findItem.children)
      arr.push(...codeToAny(newCodes, findItem.children))
  }
  return arr
}
</script>

<template>
  <el-cascader v-model="myValue" :options="pcasData as any" :props="cascaderConfig" clearable filterable v-bind="$attrs" />
</template>
