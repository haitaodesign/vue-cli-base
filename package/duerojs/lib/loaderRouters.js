// 获取所有组件模块
function getRouters () {
  const modules = require.context('@/views', true, /router.js/)
  let routers = []
  modules.keys().forEach(key => {
    routers = routers.concat(modules(key).default)
  })
  return routers
}

// 全局注册组件
export default function loaderRouters () {
  return getRouters()
}
