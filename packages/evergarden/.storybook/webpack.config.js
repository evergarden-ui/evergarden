const path = require('path')

module.exports = ({ config }) => {
  config.resolve.alias.evergarden = path.join(__dirname, '../src')
  return config
}