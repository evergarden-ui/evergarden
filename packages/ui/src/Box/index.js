import { css } from 'emotion'
import { systemProps } from './config'
import assign from 'nano-assign'

export const Box = {
  name: 'EverBox',
  props: ['as', 'css'],
  render(h) {
    const props = assign(
      {
        theme: this.$evergarden.theme
      },
      this.$props.css
    )
    return h(
      this.as || 'div',
      {
        class: css(systemProps(props))
      },
      this.$slots.default
    )
  }
}
