import { Button, ButtonGroup } from 'evergarden'
import { action } from '@storybook/addon-actions'

export default { title: 'Button' }

export const colors = () => ({
  render() {
    return (
      <ButtonGroup>
        <Button variantColor="green">Button</Button>

        <Button variantColor="red">Button</Button>

        <Button variantColor="cyan">Button</Button>

        <Button variantColor="orange">Button</Button>

        <Button
          variantColor="blue"
          color="gray.300"
          borderRadius="lg"
          _hover={{ color: 'gray.700' }}
        >
          Compose
        </Button>
      </ButtonGroup>
    )
  }
})

export const variants = () => ({
  render(h) {
    return (
      <ButtonGroup>
        <Button variantColor="green" variant="solid">
          Button
        </Button>

        <Button variantColor="green" variant="outline">
          Button
        </Button>

        <Button variantColor="green" variant="ghost">
          Button
        </Button>

        <Button variantColor="green" variant="link">
          Button
        </Button>
      </ButtonGroup>
    )
  }
})

export const sizes = () => ({
  render(h) {
    return (
      <ButtonGroup>
        <Button variantColor="green" size="xs">
          Button
        </Button>

        <Button variantColor="green" size="sm">
          Button
        </Button>

        <Button variantColor="green" size="md">
          Button
        </Button>

        <Button variantColor="green" size="lg">
          Button
        </Button>
      </ButtonGroup>
    )
  }
})

export const events = () => ({
  render(h) {
    return (
      <ButtonGroup>
        <Button onClick={action('hello')}>Click Me!</Button>
      </ButtonGroup>
    )
  }
})

export const states = () => ({
  render(h) {
    return (
      <ButtonGroup>
        <Button isDisabled={true}>Disabled</Button>
      </ButtonGroup>
    )
  }
})