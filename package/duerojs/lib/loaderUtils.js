/* eslint-disable no-console */
// 获取所有 Utils 模块
function getUtils () {
  const modules = require.context('@/utils', true, /\.(ts|js)$/)
  const utils = {}
  modules.keys().forEach(key => {
    if (key !== './index.js') {
      const name = modules(key).default.name
      utils[name] = modules(key).default
    }
  })
  return utils
}

// 全局注册组件
export default function loaderUtils () {
  return getUtils()
}
