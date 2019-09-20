import { Box } from '../Box/index'
import { getChildren, modifyChild } from '../utils'

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
    },
    size: {
      type: String
    },
    variant: {
      type: String
    },
    variantColor: {
      type: String
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
        modifyChild(child.data.attrs, {
          size: this.size || child.data.attrs.size,
          variant: this.variant || child.data.attrs.variant,
          variantColor: this.variantColor || child.data.attrs.variantColor,
          _focus: { boxShadow: 'outline', zIndex: 1 },
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
