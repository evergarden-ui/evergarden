import { Box } from '../Box/index'
import { getChildren, merge, defined } from '../utils'

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
        child.data.attrs = child.data.attrs || {}
        merge(child.data.attrs, {
          _focus: merge(
            { boxShadow: 'outline', zIndex: 1 },
            child.data.attrs._focus
          ),
          mr: !isLast && !this.isAttached ? this.spacing : undefined,
          roundedRight: isFirst && this.isAttached ? 0 : undefined,
          roundedLeft: isLast && this.isAttached ? 0 : undefined,
          rounded: !isFirst && !isLast && this.isAttached ? 0 : undefined
        })
        const { propsData } = child.componentOptions
        child.componentOptions.propsData =
          child.componentOptions.propsData || {}
        merge(child.componentOptions.propsData, {
          size: defined(propsData.size, this.size),
          variant: defined(propsData.variant, this.variant),
          variantColor: defined(propsData.variantColor, this.variantColor)
        })
        return child
      })
    )
  }
}
const component = { options: ButtonGroup }
