import { Box, Alert, AlertIcon, AlertTitle, AlertDescription } from 'evergarden'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Alert',
  component: Alert,
  parameters: {
    componentSubtitle: 'Simple status banner',
    subcomponents: { AlertIcon, AlertTitle, AlertDescription }
  }
}

export const defaults = () => ({
  render() {
    return (
      <Alert status="error" variant="solid" justifyContent="center">
        <AlertIcon />
        <AlertTitle display="inline-block" mr={2}>
          Your browser is outdated!
        </AlertTitle>
        <AlertDescription display="inline-block">
          Your experience may be degraded.
        </AlertDescription>
      </Alert>
    )
  }
})

export const subtle = () => ({
  render() {
    return (
      <Alert status="success" maxWidth="sm" mx="auto" alignItems="start">
        <AlertIcon color="green.500" onClick={action('clicked')} />
        <Box flex="1">
          <AlertTitle>Holy Smokes!</AlertTitle>
          <AlertDescription>Something just happened!</AlertDescription>
        </Box>
      </Alert>
    )
  }
})

export const solid = () => ({
  render() {
    return (
      <Alert
        status="error"
        variant="solid"
        maxWidth="sm"
        mx="auto"
        alignItems="start"
      >
        <AlertIcon />
        <Box flex="1">
          <AlertTitle>Holy Smokes</AlertTitle>
          <AlertDescription>Something just happened!</AlertDescription>
        </Box>
      </Alert>
    )
  }
})
