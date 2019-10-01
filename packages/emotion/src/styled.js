import { insertStyles } from '@emotion/utils'
import { serializeStyles } from '@emotion/serialize'

export const styled = (tag, { getAttrs } = {}) => (...styles) => {
  return {
    functional: true,

    render(h, { children, data, parent }) {
      const cache = parent.$emotionCache

      const { value, as, ...restAttrs } = data.attrs || {}
      const mergedProps = { ...data.attrs, ...parent.$evergarden }
      const finalTag = as || tag

      const serialized = serializeStyles(
        styles,
        cache.registered,
        mergedProps
      )
      insertStyles(cache, serialized, typeof finalTag === 'string')
      
      const className = `${cache.key}-${serialized.name}`

      return h(
        finalTag,
        {
          ...data,
          class: className,
          attrs: getAttrs ? getAttrs(restAttrs) : restAttrs,
          domProps: {
            ...(value && { value })
          }
        },
        children
      )
    }
  }
}
