import { Box, Icon } from 'evergarden'

export default { title: 'Icons', component: Icon }

export const basic = () => ({
  render(h) {
    const iconNames = Object.keys(this.$evergarden.theme.icons)
    return (
      <Box
        display="grid"
        gridGap="5"
        gridTemplateColumns="repeat( auto-fit, minmax(120px, 1fr) )"
      >
        {iconNames.map(name => (
          <Box
            key={name}
            display="flex"
            rounded="md"
            borderWidth="1px"
            p="3"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Icon name={name} size="2em" />
          </Box>
        ))}
      </Box>
    )
  }
})
