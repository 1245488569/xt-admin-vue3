import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-console': 'off',
    'n/prefer-global/process': 'off',
  },
})
