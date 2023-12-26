import type { FormItemRule } from 'element-plus'
import type { CSSProperties } from 'vue'

// 表单每一项的配置选项
export interface FormOptions {
  // 表单项的类型
  type:
    | 'slot'
    | 'cascader'
    | 'checkbox'
    | 'checkbox-group'
    | 'checkbox-button'
    | 'color-picker'
    | 'date-picker'
    | 'input'
    | 'input-number'
    | 'radio'
    | 'radio-group'
    | 'radio-button'
    | 'rate'
    | 'select'
    | 'option'
    | 'slider'
    | 'switch'
    | 'time-picker'
    | 'time-select'
  // 表单项的值
  value?: any
  // 表单项label
  label?: any
  // 表单项的标识
  prop?: string
  // 自定义模板的插槽名
  slot?: string
  // 表单元素特有的属性
  attrs?: {
    style?: CSSProperties
    placeholder?: string
    clearable?: boolean
    showPassword?: boolean
    disabled?: boolean
    label?: any
    // 事件
    onChange?: (value: any) => void
    onSelect?: (value: any) => void
  }
  // 表单项的子元素
  children?: FormOptions[]
  fromItemOtherAttrs?: {
    style?: CSSProperties
    rules?: FormItemRule | FormItemRule[]
    labelWidth?: string | number
    required?: boolean
    error?: string
    showMessage?: boolean
    inlineMessage?: boolean
    size?: 'large' | 'default' | 'small'
  }
}
