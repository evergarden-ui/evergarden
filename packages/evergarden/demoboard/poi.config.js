const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    dir: path.join(__dirname, 'dist')
  },
  babel: {
    jsx: 'vue'
  },
  configureWebpack: {
    resolve: {
      alias: {
        evergarden: path.join(__dirname, '../src')
      }
    }
  }
}
