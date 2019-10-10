const { renderStyle } = require('evergarden/server')

exports.getDocumentData = (documentData, { app, markup }) => {
  const cache = app.$emotionCache
  const style = renderStyle(cache, markup)
  documentData.style = `${style}${documentData.style}`
  return documentData
}

exports.filterPlugins = plugins => {
  return plugins.concat([
    {
      ...require('saber-plugin-prismjs')
    }
  ])
}
