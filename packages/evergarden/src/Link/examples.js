import { Link, Stack } from 'evergarden'

export default {
  title: 'Link',
  component: Link,
  parameters: {
    componentSubtitle: 'Here, there ... even nowhere!'
  }
}

export const basic = () => ({
  render(h) {
    return (
      <Stack>
        <Link>Ever Link</Link>
        <Link href="https://patreon.com/egoist">Support</Link>
        <Link isDisabled>disabled Ever Link</Link>
        <Link isExternal>external Ever Link. Would open in new tab</Link>
      </Stack>
    )
  }
})
