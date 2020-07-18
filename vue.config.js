const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  pluginOptions: {
    lintStyleOnBuild: true
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@duerojs', resolve('package/duerojs'))
  }
}
