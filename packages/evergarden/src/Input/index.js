import { mergeAttrs } from '../utils'
import { createStyles } from './styles'
import { Box } from '../Box/index'

export const Input = {
  name: 'EverInput',

  inheritAttrs: false,

  props: {
    size: {
      type: [String, Number],
      default: 'md'
    },
    as: {
      type: String,
      default: 'input'
    },
    variant: {
      type: String,
      default: 'outline'
    },
    focusBorderColor: {
      type: String,
      default: 'blue.500'
    },
    errorBorderColor: {
      type: String,
      default: 'red.500'
    },
    isReadOnly: {
      type: Boolean
    },
    isFullWidth: {
      type: Boolean,
      default: true
    },
    isDisabled: {
      type: Boolean
    },
    isInvalid: {
      type: Boolean
    },
    isRequired: {
      type: Boolean
    }
  },

  render(h) {
    const childAttrs = {
      ...createStyles({
        ...this.$props,
        ...this.$evergarden
      }),
      readOnly: this.isReadOnly,
      ariaReadonly: this.isReadOnly,
      disabled: this.isDisabled,
      ariaInvalid: this.isInvalid,
      require: this.isRequired,
      ariaRequire: this.isRequire,
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
