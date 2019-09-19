import { css } from 'emotion'
import { systemProps } from './config'
import assign from 'nano-assign'

const allPropNames = systemProps.propNames.concat([
  'as',
  'variantColor',
  'variant',
  '_focus',
  '_hover',
  '_disabled',
  '_active'
])

export const Box = {
  name: 'EverBox',
  inheritAttrs: false,
  render(h) {
    const attrs = {}
    const props = {}

    for (const key of Object.keys(this.$attrs)) {
      const value = this.$attrs[key]
      if (allPropNames.indexOf(key) === -1) {
        attrs[key] = value
      } else {
        props[key] = value
      }
    }

    const baseProps = {
      theme: this.$evergarden.theme
    }
    const pseudo = type => ({
      [`&:${type}`]: props[`_${type}`] && css(
        systemProps({
          ...baseProps,
          ...props[`_${type}`]
        })
      )
    })
    return h(
      props.as || 'div',
      {
        attrs,
        class: [
          css([
            systemProps({
              ...baseProps,
              ...props
            }),
            pseudo('focus'),
            pseudo('hover'),
            pseudo('active'),
            pseudo('disabled'),
          ])
        ]
      },
      this.$slots.default
    )
  }
}
