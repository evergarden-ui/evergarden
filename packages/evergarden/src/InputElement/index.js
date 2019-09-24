import { Box } from '../Box/index'
import { inputSizes } from "../Input/styles";


export const InputElement = {
  name: 'EverInputElement',
  
  props: {
    placement: {
      type: String,
      default: 'left'
    },
    disablePointerEvents: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    }
  },

  inheritAttrs: false,

  render(h) {
    const height = inputSizes[this.size] && inputSizes[this.size]["height"];
    const fontSize = inputSizes[this.size] && inputSizes[this.size]["fontSize"];

    return h(
      Box,
      {
        attrs: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: '0',
          zIndex: 1,
          height,
          width: height,
          fontSize,
          ...(this.disablePointerEvents && { pointerEvents: 'none' }),
          ...({ [this.placement]: "0" }),
          ...this.$attrs
        }
      },
      this.$slots.default
    )
  }
}
