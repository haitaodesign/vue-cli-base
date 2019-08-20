
const modules = require.context('.', true, /\.js$/)
let moduleRoutes = []
modules.keys().forEach(key => {
  if (key !== './index.js') {
    moduleRoutes = moduleRoutes.concat(modules(key).default)
  }
})
// console.log(moduleRoutes)
export default moduleRoutes
