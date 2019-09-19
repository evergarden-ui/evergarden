export { theme } from './theme'

export { Box } from './Box'
export { Button } from './Button'

export function Evergarden(Vue) {
  Vue.mixin({
    beforeCreate() {
      this.$evergarden = this.$options.evergarden || (this.$parent && this.$parent.$evergarden)
      if (this.$evergarden) {
        this.$evergarden.colorMode = this.$evergarden.colorMode || 'light'
      }
    }
  })
}
