import { Box } from '../Box/index'
import { getChildren, merge, defined } from '../utils'
import { inputSizes } from '../Input/styles'

export const InputGroup = {
  props: {
    size: {
      type: String,
      default: 'md'
    }
  },

  inheritAttrs: false,

  render(h) {
    const { sizes } = this.$evergarden.theme
    const height = inputSizes[this.size] && inputSizes[this.size]['height']
    const children = getChildren(this.$slots.default)
    let pl = undefined
    let pr = undefined
    return h(
      Box,
      {
        attrs: {
          display: 'flex',
          position: 'relative',
          ...this.$attrs
        },
        on: this.$listeners
      },
      children.map((child, index) => {
        const propsData = child.componentOptions.propsData || {}
        const { name } = child.componentOptions.Ctor.options
        if (name === 'EverInputElement' && propsData.placement === 'left') {
          pl = sizes[height]
        }
        if (name === 'EverInputElement' && propsData.placement === 'right') {
          pr = sizes[height]
        }
        if (name === 'EverInput') {
          child.data.attrs = merge({}, child.data.attrs, {
            pl: defined(propsData.pl, pl),
            pr: defined(propsData.pr, pr)
          })
        }
        child.componentOptions.propsData = merge({}, propsData, {
          size: defined(propsData.size, this.size)
        })
        return child
      })
    )
  }
}
