const path = require('path')

module.exports = {
  stories: ['../src/**/examples.js'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-links/register'
  ],
  presets: ['@storybook/addon-docs/preset'],
  webpack: async config => {
    config.resolve.alias.evergarden = path.join(__dirname, '../src')

    config.module.rules.forEach(rule => {
      if (rule.test.test('.js')) {
        rule.use.forEach(u => {
          if (u.loader === 'babel-loader' && u.options.plugins) {
            u.options.babelrc = false
            u.options.presets = u.options.presets.filter(preset => {
              return !preset.includes('babel-preset-vue')
            })
            u.options.plugins.push(
              require.resolve('babel-plugin-transform-vue-jsx')
            )
          }
        })
      }
    })

    config.module.rules.push({
      test: /examples.[tj]sx?$/,
      loader: require.resolve('@storybook/source-loader'),
      options: { inspectLocalDependencies: true },
      enforce: 'pre'
    })

    config.module.rules.push({
      test: /(components|index).[tj]sx?$/,
      include: path.join(__dirname, '../src'),
      exclude: /theme/,
      loader: 'vue-docgen-loader',
      enforce: 'post'
    })

    return config
  }
}
