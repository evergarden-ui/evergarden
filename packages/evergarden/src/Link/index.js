import { mergeAttrs } from '../utils'
import { createStyles } from './styles'
import { Box } from '../Box/index'

export const Link = {
  name: 'EverLink',

  inheritAttrs: false,

  props: {
    as: {
      type: String,
      default: 'a'
    },
    isExternal: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean
    },
  },

  render(h) {
    const childAttrs = {
      ...createStyles({
        ...this.$props,
        ...this.$evergarden
      }),
      disabled: this.isDisabled,
      target: this.isExternal ? '_blank' : undefined,
      as: this.as
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
