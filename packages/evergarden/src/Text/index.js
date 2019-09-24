import { Box } from '../Box/index'

export const Text = {
  name: 'EverText',

  inheritAttrs: false,

  render(h) {
    return h(Box, {
      attrs: {
        as: 'p',
        ...this.$attrs,
      },
      on: this.$listeners
    }, this.$slots.default)
  }
}