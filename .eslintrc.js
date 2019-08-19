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
    'no-console': 'on',
    'no-debugger': 'on',
    'vue/order-in-components': 'error',
    'vue/no-confusing-v-for-v-if': 'error'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
