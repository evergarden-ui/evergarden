import { Box } from '../Box/index'
import { createAlertStyles } from './styles'
import { mergeAttrs } from '../utils'

export { AlertIcon, AlertTitle, AlertDescription } from './components'

export const statuses = {
  info: { icon: "info", color: "blue" },
  warning: { icon: "warning-2", color: "orange" },
  success: { icon: "check-circle", color: "green" },
  error: { icon: "warning", color: "red" },
}

export const Alert = {
  name: 'EverAlert',

  inheritAttrs: false,

  props: {
    variant: {
      type: String,
      default: 'subtle'
    },
    status: {
      type: String,
      default: 'info'
    }
  },

  provide () {
    return {
      alertContext: this.$props
    }
  },

  render(h) {
    const { variant, status } = this.$props

    const childAttrs = {
      role: 'alert',
      ...createAlertStyles({
        variant,
        color: statuses[status] && statuses[status]["color"],
        ...this.$evergarden
      })
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
