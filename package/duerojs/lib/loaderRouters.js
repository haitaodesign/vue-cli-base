// 获取所有路由模块
function getRouters () {
  const modules = require.context('@/views', true, /router.js/)
  let routers = []
  modules.keys().forEach(key => {
    routers = routers.concat(modules(key).default)
  })
  return routers
}

// 返回路由数组
export default function loaderRouters () {
  return getRouters()
}
