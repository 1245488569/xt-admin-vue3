import {
  createStyleImportPlugin,
  ElementPlusResolve,
} from 'vite-plugin-style-import'

export default function setupStyleImport() {
  return createStyleImportPlugin({
    resolves: [ElementPlusResolve()],
    libs: [
      {
        libraryName: 'element-plus',
        esModule: true,
        resolveStyle: (name: string) => {
          return `element-plus/theme-chalk/${name}.css`
        },
      },
    ]
  })
}
