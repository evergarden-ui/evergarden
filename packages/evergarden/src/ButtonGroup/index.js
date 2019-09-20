import { Box } from '../Box/index'
import { getChildren } from '../utils'

export const ButtonGroup = {
  name: 'ButtonGroup',

  inheritAttrs: false,

  props: {
    spacing: {
      type: [String, Number],
      default: 2
    },
    isAttached: {
      type: Boolean
    }
  },

  render(h) {
    const children = getChildren(this.$slots.default)
    return h(
      Box,
      {
        attrs: {
          display: 'inline-block',
          ...this.$attrs
        },
        on: this.$listeners
      },
      children.map((child, index) => {
        const isFirst = index === 0
        const isLast = index === children.length - 1
        Object.assign(child.data.attrs, {
          ...(!isLast && !this.isAttached && { mr: this.spacing }),
          ...(isFirst && this.isAttached && { roundedRight: 0 }),
          ...(isLast && this.isAttached && { roundedLeft: 0 }),
          ...(!isFirst && !isLast && this.isAttached && { rounded: 0 })
        })
        return child
      })
    )
  }
}
