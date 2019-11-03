import { Input, Stack } from 'evergarden'

export default { title: 'Input', component: Input }

export const sizes = () => ({
  render(h) {
    return (
      <Stack>
        <Input size="sm" />
        <Input size="md" />
        <Input size="lg" />
      </Stack>
    )
  }
})

export const variants = () => ({
  render(h) {
    return (
      <Stack>
        <Input placeholder="Outline" />
        <Input variant="filled" placeholder="Filled" />
        <Input variant="flushed" placeholder="Flushed" />
      </Stack>
    )
  }
})

export const states = () => ({
  render(h) {
    return (
      <Stack>
        <Input placeholder="Invalid" isInvalid={true} />
        <Input placeholder="Readonly" isReadOnly={true} />
        <Input placeholder="Required" isRequired={true} />
      </Stack>
    )
  }
})
