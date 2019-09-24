import { Box } from '../Box/index'

export const Icon = {
  name: 'EverIcon',

  props: {
    size: {
      type: String,
      default: '1em'
    },

    name: {
      type: String,
      required: true
    }
  },

  inheritAttrs: false,

  render(h) {
    const { icons } = this.$evergarden.theme
    const { render, viewBox = '0 0 24 24' } =
      icons[this.name] || icons['question-outline']

    return h(
      Box,
      {
        attrs: {
          viewBox,
          as: 'svg',
          size: this.size,
          ...this.$attrs
        },
        on: this.$listeners
      },
      [].concat(render(h))
    )
  }
}
