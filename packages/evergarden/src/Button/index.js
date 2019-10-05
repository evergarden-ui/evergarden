import { Box } from '../Box/index'
import { createStyles } from './styles'
import { mergeAttrs } from '../utils'

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
    isDisabled: {
      type: Boolean
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
      disabled: this.isDisabled,
      'aria-disabled': this.isDisabled
    }
    mergeAttrs(childAttrs, this.$attrs)
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
