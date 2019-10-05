const { createEmotionRenderer } = require('evergarden/server')

exports.getDocumentData = (documentData, { app, markup }) => {
  const cache = app.$emotionCache
  const cssRenderer = createEmotionRenderer(cache)
  const { css, ids } = cssRenderer.extractCritical(markup)
  documentData.style = `<style data-emotion-${cache.key}="${ids.join(
    ' '
  )}">${css}</style>${documentData.style}`
  return documentData
}

exports.filterPlugins = plugins => {
  return plugins.concat([
    {
      ...require('saber-plugin-prismjs')
    }
  ])
}