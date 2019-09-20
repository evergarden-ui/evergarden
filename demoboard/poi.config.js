const path = require('path')
const Prism = require('prismjs')

module.exports = {
  entry: './demoboard/index.js',
  output: {
    dir: './demoboard/dist'
  },
  configureWebpack: {
    resolve: {
      alias: {
        evergarden: path.join(__dirname, '../packages/evergarden/src')
      }
    },
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            {
              loader: 'vue-loader'
            },
            {
              loader: 'vmark-loader',
              options: {
                markdown: {
                  highlight(code, lang) {
                    lang = lang || 'markup'
                    return Prism.highlight(
                      code,
                      Prism.languages[lang] || Prism.languages.markup,
                      lang
                    )
                  }
                }
              }
            }
          ]
        }
      ]
    }
  }
}
