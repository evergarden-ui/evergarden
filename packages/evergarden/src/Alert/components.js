import { Box } from '../Box/index'
import { createAlertIconStyle } from './styles'
import { Icon } from '../Icon/index'
import { statuses } from './index'
import { mergeAttrs } from '../utils'

const AlertIcon = {
  inject: ['alertContext'],

  render (h) {
    const { status, variant } = this.alertContext

    const childAttrs = {
      mt: 1,
      mr: 3,
      size: '5',
      name: statuses[status] && statuses[status]["icon"],
      ...createAlertIconStyle({
        variant,
        color: statuses[status] && statuses[status]["color"],
      })
    }

    mergeAttrs(childAttrs, this.$attrs)

    return h(
      Icon,
      {
        attrs: childAttrs,
        on: this.$listeners
      },
      this.$children
    )
  }
}

const AlertTitle = {
  functional: true,
  render (h, { data, children, listeners }) {
    const childAttrs = {
      fontWeight: "bold",
      lineHeight: "normal",
      ...data.attrs
    }

    return h(
      Box,
      {
        attrs: childAttrs,
        on: listeners
      },
      children
    )
  }
}

const AlertDescription = {
  functional: true,
  render (h, { data, children, listeners }) {
    return h(
      Box,
      {
        attrs: data.attrs,
        on: listeners
      },
      children
    )
  }
}

export { AlertIcon, AlertTitle, AlertDescription }