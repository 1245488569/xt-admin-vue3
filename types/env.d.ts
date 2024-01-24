/// <reference types="vite/client" />

declare module 'element-plus/dist/locale/zh-cn.mjs'
declare module 'element-plus/dist/locale/zh-tw.mjs'
declare module 'element-plus/dist/locale/en.mjs'

interface ImportMetaEnv {
  VITE_MODE_NAME: string
  VITE_APP_TITLE: string
  VITE_APP_API_BASEURL: string
  VITE_OPEN_PROXY: string
  VITE_USE_MOCK: string
  VITE_BUILD_SOURCEMAP: string
  VITE_BUILD_DROP_CONSOLE: string
  VITE_BUILD_DROP_DEBUGGER: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
