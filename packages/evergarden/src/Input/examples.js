import { Box, Input } from 'evergarden'

export default { title: 'Input' }

export const variants = () => ({
  render(h) {
    return (
      <Box>
        <Input placeholder="Basic usage" />
        <Input variant="flushed" placeholder="Basic usage" />
        <Input variant="filled" placeholder="Basic usage" />
      </Box>
    )
  }
})
