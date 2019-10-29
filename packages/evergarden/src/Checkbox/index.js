import { Box } from '../Box/index'
import { createStyles } from './styles'
import { mergeAttrs } from '../utils'

export const Checkbox = {
  name: 'Checkbox',

  inheritAttrs: false,

  props: {
    as: {
      type: String,
      default: 'input'
    },
    size: {
      type: [String, Number],
      default: 'md'
    },
    variant: {
      type: String,
      default: 'styled'
    },
    variantColor: {
      type: String,
      default: 'gray'
    },
    isChecked: {
      type: Boolean,
    },
    isDisabled: {
      type: Boolean
    },
    isIndeterminate: {
      type: Boolean
    }
  },

  render(h) {
    const isInput = this.as === 'input'
    const variant = isInput ? this.variant : 'unstyled'

    const childAttrs = {
      ...createStyles({
        ...this.$props,
        ...this.$evergarden,
        variant
      }),
      as: this.as,
      disabled: this.isDisabled,
      'aria-disabled': this.isDisabled,
      'aria-checked': this.isIndeterminate ? 'mixed' : this.isChecked,
    }

    if (isInput) {
      childAttrs.type = 'checkbox'
    } else {
      childAttrs.role = 'checkbox'
    }

    mergeAttrs(childAttrs, this.$attrs)

    const checkboxElement = [
      Box,
      {
        attrs: childAttrs,
        on: this.$listeners
      }
    ]

    const hasSlot = !!this.$slots.default

    return hasSlot && isInput
      ? h(
          Box,
          {
            attrs: {
              as: 'label',
              display: 'inline-flex',
              cursor: 'pointer',
              alignItems: 'center'
            }
          },
          [
            h(...checkboxElement),
            h(
              Box,
              {
                attrs: {
                  ml: 2,
                  userSelect: 'none'
                }
              },
              this.$slots.default
            )
          ]
        )
      : h(
        ...checkboxElement,
        this.$slots.default
      )
  }
}