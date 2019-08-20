module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'error',
    'vue/order-in-components': 'error',
    'vue/no-confusing-v-for-v-if': 'error'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
