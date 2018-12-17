const contexts = require.context('.', true, /\.js$/)
let modules = {}
contexts.keys().forEach(key => {
  const index = key.split('/')[2]
  const contextName = key.split('/')[1]
  if (index === 'index.js') {
    modules[`${contextName}`] = contexts(key).default
  }
})
export default modules
