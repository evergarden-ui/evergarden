import Vue from 'vue'
import { Button } from 'evergarden'
import { addDecorator } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'

addDecorator(withKnobs)

const variants = {
  label: 'Variants',
  options: ['green', 'red', 'cyan', 'orange', 'blue'],
  defaultValue: 'green'
}

const sizes = {
  label: 'Sizes',
  options: ['xs', 'sm', 'md', 'lg'],
  defaultValue: 'md'
}

export default { title: 'Button' }

export const button = () => ({
  components: { Button },
  props: {
    variant: {
      default: select(variants.label, variants.options, variants.defaultValue)
    },
    size: {
      default: select(sizes.label, sizes.options, sizes.defaultValue)
    },
    text: {
      default: text('Button text', 'Click me!')
    },
    disabled: {
      default: boolean('Disabled', false)
    }
  },
  template: `
  <Button
    :variantColor="variant"
    :size="size"
    :isDisabled="disabled"
    onClick={action('hello')
  >
    {{ text }}
  </Button>`
})
