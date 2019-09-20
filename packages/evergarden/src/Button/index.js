import { Box } from '../Box/index'
import { createStyles } from './styles'

export const Button = {
  name: 'EverButton',

  inheritAttrs: false,
  
  props: {
    variant: {
      type: String,
      default: 'solid'
    },
    variantColor: {
      type: String,
      default: 'gray'
    },
    size: {
      type: [String, Number],
      default: 'md'
    },
    as: {
      type: String,
      default: 'button'
    }
  },

  render(h) {
    const childAttrs = {
      ...createStyles({
        variant: this.variant,
        color: this.variantColor,
        size: this.size,
        ...this.$evergarden
      }),
      as: this.as,
    }
    for (const key of Object.keys(this.$attrs)) {
      if (key[0] === '_' && childAttrs[key]) {
        Object.assign(childAttrs[key], this.$attrs[key])
      } else {
        childAttrs[key] = this.$attrs[key]
      }
    }
    return h(
      Box,
      {
        attrs: childAttrs,
        on: this.$listeners
      },
      this.$slots.default
    )
  }
}
