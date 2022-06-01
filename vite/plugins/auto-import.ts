import AutoImport from 'unplugin-auto-import/vite'

export default function setupAutoImport() {
  return AutoImport({
    imports: [
      'vue',
      'vue-router',
      {
        'vue': [
          'defineProps',
          'defineEmits',
          'defineExpose',
          'withDefaults'
        ]
      },
      'pinia'
    ],
    eslintrc: {
      enabled: true,
      filepath: './.eslintrc-auto-import.json',
      globalsPropValue: true
    },
    dts: 'types/auto-imports.d.ts'
  })
}
