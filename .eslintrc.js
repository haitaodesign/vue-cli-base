module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'error',
    'vue/component-name-in-template-casing': 'off',
    'vue/html-self-closing': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
