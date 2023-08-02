/// <reference types="vite/client" />

declare module 'element-plus/dist/locale/zh-cn.mjs'
declare module 'element-plus/dist/locale/zh-tw.mjs'
declare module 'element-plus/dist/locale/en.mjs'


interface ImportMetaEnv {
  VITE_MODE_NAME: string
  VITE_APP_TITLE: string
  VITE_APP_API_BASEURL: string
  VITE_USE_MOCK: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}