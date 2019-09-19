export { theme } from './theme'

export { Box } from './Box'
export { Button } from './Button'

export function Evergarden(Vue) {
  Vue.mixin({
    beforeCreate() {
      this.$evergarden = this.$options.evergarden || this.$parent.$evergarden
    }
  })
}
