import * as path from 'path'
import { AliasOptions } from 'vite'

const alias = {
  '@': path.resolve(__dirname, '../src'),
  'vue-i18n': 'vue-i18n/index'
} as AliasOptions

export default alias
