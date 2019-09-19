import { Box } from '../Box'
import { createStyles } from './styles'

export const Button = {
  name: 'EverButton',
  props: Box.props,
  render(h) {
    const props = {
      ...this.$props,
      as: this.$props.as || 'button'
    }
    props.css = {
      borderRadius: 'md',
      ...createStyles({
        ...props.css,
        theme: this.$evergarden.theme,
        colorMode: this.$evergarden.colorMode
      })
    }
    return h(
      Box,
      {
        props
      },
      this.$slots.default
    )
  }
}
