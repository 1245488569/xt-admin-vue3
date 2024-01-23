import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  ignores: [
    'public',
    'dist*',
  ],
  rules: {
    'no-console': 'off',
    'node/prefer-global/process': 'off',
  },
})
