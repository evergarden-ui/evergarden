import toReact from '@egoist/vue-to-react'
import { Button, ButtonGroup } from 'evergarden'

export default demoboard => {
  demoboard
    .section('ButtonGroup')
    .add('default', {
      component: toReact({
        render(h) {
          return (
            <ButtonGroup>
              <Button variantColor="teal">Button</Button>
              <Button variantColor="teal">Button</Button>
              <Button variantColor="teal">Button</Button>
            </ButtonGroup>
          )
        }
      })
    })
    .add('isAttached', {
      component: toReact({
        render(h) {
          return (
            <ButtonGroup isAttached={true}>
              <Button variantColor="teal">Button</Button>
              <Button variantColor="teal">Button</Button>
              <Button variantColor="teal">Button</Button>
            </ButtonGroup>
          )
        }
      })
    })
}
