import { Input, Stack } from 'evergarden'

export default { title: 'Input' }

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
