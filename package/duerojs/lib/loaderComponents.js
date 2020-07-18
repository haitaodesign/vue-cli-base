// 获取所有组件模块
function getComponents () {
  const modules = require.context('@/components', true, /\.(vue|js)$/)
  let components = []
  modules.keys().forEach(key => {
    components = components.concat(modules(key).default)
  })
  return components
}

// 全局注册组件
export default function loaderComponents (Vue) {
  const components = getComponents()
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}
