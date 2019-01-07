
const path = require('path')
module.exports = {
  devServer: {
    port: 8081
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
        path.resolve(__dirname, 'src/assets/styles/variables.styl')
      ]
    }
  }
}
