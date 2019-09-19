import { Box } from '../Box'
import { createStyles } from './styles'

const getProps = props =>
  Object.keys(props).reduce((res, name) => {
    if (props[name] !== undefined) {
      res[name] = props[name]
    }
    return res
  }, {})

export const Button = {
  name: 'EverButton',
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
      ...this.$attrs,
      as: this.as
    }
    return h(
      Box,
      {
        attrs: childAttrs
      },
      this.$slots.default
    )
  }
}
