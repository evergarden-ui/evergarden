const path = require('path')

module.exports = ({ config }) => {
  config.resolve.alias.evergarden = path.join(__dirname, '../src')

  config.module.rules.forEach(rule => {
    if (rule.test.test('.js')) {
      rule.use.forEach(u => {
        if (u.loader === 'babel-loader') {
          u.options.babelrc = false
          u.options.presets = u.options.presets.filter(preset => {
            return !preset.includes('babel-preset-vue')
          })
          u.options.plugins.push(require.resolve('babel-plugin-transform-vue-jsx'))
        }
      })
    }
  })

  return config
}