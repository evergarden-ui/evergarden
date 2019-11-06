import { Box } from '../Box/index'
import { Button } from '../Button/index'
import { Icon } from '../Icon/index'

export const IconButton = {
  name: 'EverIconButton',

  inheritAttrs: false,

  props: {
    ...Button.props,

    icon: {
      type: [String, Object],
      required: true
    },

    isRound: {
      type: Boolean,
      default: false
    }
  },

  render(h) {
    const { isRound, icon } = this.$props

    return h(
      Button,
      {
        attrs: {
          p: '0',
          borderRadius: isRound ? 'full' : 'md',
          ...this.$attrs
        },
        props: this.$props,
        on: this.$listeners
      },
      [
        typeof icon === 'string'
          ? h(Icon, {
              attrs: {
                name: icon,
                focusable: false,
                color: 'currentColor',
                'aria-hidden': true
              }
            })
          : h(Box, {
              attrs: {
                as: icon,
                focusable: false,
                color: 'currentColor',
                'aria-hidden': true,
                size: '1em'
              }
            })
      ]
    )
  }
}
const component = { options: IconButton }
