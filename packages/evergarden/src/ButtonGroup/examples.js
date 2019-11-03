import { Button, ButtonGroup } from 'evergarden'

export default { title: 'ButtonGroup', component: ButtonGroup }

export const basic = () => ({
  render(h) {
    return (
      <ButtonGroup variantColor="teal">
        <Button>Button</Button>
        <Button variantColor="green">Button</Button>
        <Button>Button</Button>
      </ButtonGroup>
    )
  }
})

export const isAttached = () => ({
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
