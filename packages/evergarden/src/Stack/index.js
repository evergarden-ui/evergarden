import { Box } from '../Box'
import { getChildren, merge } from '../utils'

export const Stack = {
  props: {
    isInline: {
      type: Boolean
    },
    spacing: {
      type: [Number, String],
      default: 2
    }
  },

  inheritAttrs: false,

  render(h) {
    const children = getChildren(this.$slots.default)
    return h(
      Box,
      {
        attrs: {
          display: 'flex',
          flexDirection: this.isInline ? 'row' : 'column',
          ...this.$attrs
        },
        on: this.$listeners
      },
      children.map((child, index) => {
        const isLast = index === children.length - 1
        const spacingProps = this.isInline
          ? { mr: isLast ? undefined : this.spacing }
          : { mb: isLast ? undefined : this.spacing }
        child.data.attrs = child.data.attrs || {}
        merge(child.data.attrs, spacingProps)
        return child
      })
    )
  }
}
