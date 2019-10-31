import { VueEmotion } from '@egoist/vue-emotion'
import { merge } from './utils'
import { theme } from './theme/index'

export { CSSReset } from './CSSReset/index'
export { Box } from './Box/index'
export { Stack } from './Stack/index'
export { Button } from './Button/index'
export { ButtonGroup } from './ButtonGroup/index'
export { Checkbox } from './Checkbox/index'
export { Input } from './Input/index'
export { InputGroup } from './InputGroup/index'
export { InputElement } from './InputElement/index'
export { Icon } from './Icon/index'
export { IconButton } from './IconButton/index'
export { Link } from './Link/index'
export { Switch } from './Switch/index'
export { Text } from './Text/index'
export { Alert, AlertIcon, AlertTitle, AlertDescription } from './Alert/index'

export { theme }

export function Evergarden(Vue) {
  Vue.use(VueEmotion)

  Vue.mixin({
    beforeCreate() {
      if (this.$options.evergarden) {
        this.$evergarden = merge(
          {
            theme,
            colorMode: 'light'
          },
          this.$options.evergarden
        )
      } else {
        this.$evergarden = (this.$parent && this.$parent.$evergarden) || {
          theme,
          colorMode: 'light'
        }
      }
    }
  })
}
