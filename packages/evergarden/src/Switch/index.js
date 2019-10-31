import { Box } from '../Box/index'
import { Checkbox } from '../Checkbox/index'
import { mergeAttrs } from '../utils'
import { checkboxStyle, createTrackStyle, createThumbStyle, createStyle } from './styles'

export const Switch = {
  name: 'EveSwitch',

  inheritAttrs: false,

  props: {
    size: {
      type: String,
      default: 'md'
    },
    variantColor: {
      type: String,
      default: 'gray'
    },
    isChecked: {
      type: Boolean
    },
    isDisabled: {
      type: Boolean
    }
  },

  render(h) {
    const props = {
      ...this.$props,
      ...this.$evergarden
    }

    const childAttrs = {
      as: 'label',
      role: 'group',
    }

    mergeAttrs(childAttrs, this.$attrs)
  
    return h(
      Box,
      {
        attrs: {
          ...childAttrs,
          ...createStyle(props)
        },
      },
      [
        h(
          Checkbox,
          {
            attrs: {
              isChecked: this.isChecked,
              isDisabled: this.isDisabled,
              variant: 'unstyled',
              ...checkboxStyle
            },
            on: this.$listeners
          }
        ),
        h(
          Box,
          {
            attrs: {
              'aria-hidden': true,
              ...createTrackStyle(props)
            }
          },
          [
            h(
              Box,
              {
                attrs: {
                  ...createThumbStyle(props)
                }
              }
            )
          ]
        )
      ]
    )
  }
}