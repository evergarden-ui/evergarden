import { theme } from './theme/index'

export { Box } from './Box/index'
export { Button } from './Button/index'
export { ButtonGroup } from './ButtonGroup/index'

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
