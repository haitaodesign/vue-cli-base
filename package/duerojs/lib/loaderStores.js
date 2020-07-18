// 获取所有 Store 模块
function getStores () {
  const modules = require.context('@/views', true, /store.js/)
  const routers = []
  modules.keys().forEach(key => {
    const contextName = key.split('/')[1]
    routers[`${contextName}`] = modules(key).default
  })
  return routers
}

// 全局注册组件
export default function loaderStores () {
  // eslint-disable-next-line no-console
  console.log(getStores())
  return getStores()
}
