import { Button, ButtonGroup } from 'evergarden'

export default demoboard => {
  demoboard
    .section('Button')
    .add('colors', {
      component: {
        render(h) {
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
      }
    })
    .add('variants', {
      component: {
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
      }
    })
    .add('sizes', {
      component: {
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
      }
    })
    .add('events', {
      component: {
        render(h) {
          return (
            <ButtonGroup>
              <Button onClick={() => alert('hello')}>Click Me!</Button>
            </ButtonGroup>
          )
        }
      }
    })
}
