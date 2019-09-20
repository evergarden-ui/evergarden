import { css } from 'emotion'
import { systemProps, pseudoConfig, pseudoNames } from './config'

const allPropNames = [
  ...systemProps.propNames,
  'as',
  'variantColor',
  'variant',
  ...pseudoNames.map(name => `_${name}`)
]

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
    const pseudo = name => {
      const selector = pseudoConfig[name]
      return {
        [selector]:
          props[`_${name}`] &&
          systemProps({
            ...baseProps,
            ...props[`_${name}`]
          })
      }
    }
    return h(
      props.as || 'div',
      {
        on: this.$listeners,
        attrs,
        class: [
          css([
            systemProps({
              ...baseProps,
              ...props
            }),
            ...pseudoNames.map(name => pseudo(name))
          ])
        ]
      },
      this.$slots.default
    )
  }
}
