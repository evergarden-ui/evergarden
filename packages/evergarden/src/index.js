import { theme } from './theme/index'

export { CSSReset } from './CSSReset/index'
export { Box } from './Box/index'
export { Stack } from './Stack/index'
export { Button } from './Button/index'
export { ButtonGroup } from './ButtonGroup/index'
export { Input } from './Input/index'
export { InputGroup } from './InputGroup/index'
export { InputElement } from './InputElement/index'
export { Icon } from './Icon/index'

export { theme }

export function Evergarden(Vue) {
  Vue.mixin({
    beforeCreate() {
      this.$evergarden = this.$options.evergarden || (this.$parent && this.$parent.$evergarden) || {}
      if (this.$evergarden) {
        this.$evergarden.theme = this.$evergarden.theme || theme
        this.$evergarden.colorMode = this.$evergarden.colorMode || 'light'
      }
    }
  })
}
