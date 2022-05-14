/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  VITE_MODE_NAME: string
  VITE_APP_TITLE: string
  VITE_APP_SHORT_TITLE: string
  VITE_OPEN_PROXY: string
  VITE_APP_API_BASEURL: string
  VITE_BUILD_SOURCEMAP: string
  VITE_BUILD_DROP_CONSOLE: string
  VITE_BUILD_DROP_DEBUGGER: string
  VITE_USE_PWA: string
  VITE_USE_MOCK: string
  VITE_BUILD_COMPRESS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
