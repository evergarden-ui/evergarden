import Vue from 'vue'
import { Button } from 'evergarden'
import { addDecorator } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'

addDecorator(withKnobs)

const variantColors = {
  label: 'Variants',
  options: ['green', 'red', 'cyan', 'orange', 'blue'],
  defaultValue: 'green'
}

const sizes = {
  label: 'Sizes',
  options: ['xs', 'sm', 'md', 'lg'],
  defaultValue: 'md'
}

export default { title: 'Button', component: Button }

export const basic = () => ({
  props: {
    variantColor: {
      default: select(
        variantColors.label,
        variantColors.options,
        variantColors.defaultValue
      )
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

  render(h) {
    return (
      <Button
        variantColor={this.variantColor}
        size={this.size}
        isDisabled={this.disabled}
        onClick={action('hello')}
      >
        {this.text}
      </Button>
    )
  }
})
