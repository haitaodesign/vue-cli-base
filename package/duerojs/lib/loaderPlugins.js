// 获取所有组件模块
function getPlugins () {
  const modules = require.context('@/plugins', true, /\.(ts|js)$/)
  let plugins = []
  modules.keys().forEach(key => {
    if (key !== './index.js') {
      // eslint-disable-next-line no-debugger
      plugins = plugins.concat(modules(key).default)
    }
  })
  return plugins
}

// 全局注册组件
export default function loaderPlugins () {
  const plugins = getPlugins()
  plugins.forEach(module => {
    // eslint-disable-next-line no-console
    module()
  })
}
