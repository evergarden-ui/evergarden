import { mergeAttrs } from '../utils'
import { Box } from '../Box/index'

const baseStyles = {
  cursor: 'pointer',
  textDecoration: 'none',
  _hover: {
    textDecoration: 'underline'
  },
  _disabled: {
    opacity: '0.4',
    pointerEvents: 'none',
    cursor: 'not-allowed',
    textDecoration: 'none'
  }
}

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
    }
  },

  render(h) {
    const externalAttrs = this.isExternal
      ? {
          target: '_blank',
          rel: 'noopener noreferrer'
        }
      : undefined

    const childAttrs = {
      ...baseStyles,
      ...externalAttrs,
      'tab-index': this.isDisabled ? -1 : undefined,
      'aria-disabled': this.isDisabled,
      as: this.as
    }

    if (this.as !== 'a') {
      childAttrs.role = 'link'
    }

    mergeAttrs(childAttrs, this.$attrs)

    return h(
      Box,
      {
        attrs: childAttrs,
        on: {
          ...this.isDisabled && { click: e => e.preventDefault() },
          ...this.$listeners
        }
      },
      this.$slots.default
    )
  }
}
