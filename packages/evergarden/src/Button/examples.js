import toReact from '@egoist/vue-to-react'
import { Box, Button } from 'evergarden'

export default demoboard => {
  demoboard
    .section('Button')
    .add('colors', {
      component: toReact({
        render(h) {
          return (
            <Box my={30} spacing={10}>
              <Button variantColor="green">Button</Button>

              <Button variantColor="red">Button</Button>

              <Button variantColor="cyan">Button</Button>

              <Button variantColor="orange">Button</Button>

              <Button
                variantColor="blue"
                color="gray.300"
                _hover={{ color: 'gray.700' }}
              >
                Button
              </Button>
            </Box>
          )
        }
      })
    })
    .add('variants', {
      component: toReact({
        render(h) {
          return (
            <Box my={30}>
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

              <Button variantColor="green" variant="unstyled">
                Button
              </Button>
            </Box>
          )
        }
      })
    })
    .add('Sizes', {
      component: toReact({
        render(h) {
          return (
            <Box my={30}>
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
            </Box>
          )
        }
      })
    })
}
