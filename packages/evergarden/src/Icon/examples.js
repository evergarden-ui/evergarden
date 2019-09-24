import { Stack, Icon } from 'evergarden'

export default { title: 'Icons' }

export const basic = () => ({
  render(h) {
    const iconNames = Object.keys(this.$evergarden.theme.icons)
    return <Stack isInline={true} flexWrap="wrap">
      {iconNames.map(name => <Icon name={name} key={name} size="4rem" />)}
    </Stack>
  }
})