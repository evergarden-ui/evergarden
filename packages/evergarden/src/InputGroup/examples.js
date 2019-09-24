import { InputGroup, Input, InputElement, Button } from 'evergarden'

export default { title: 'InputGroup' }

export const basic = () => ({
  components: {
    InputGroup,
    Input,
    InputElement,
    Button
  },

  data() {
    return {
      show: false
    }
  },
  template: `
  <InputGroup>
    <Input :type="show ? 'text' : 'password'" pr="4.5rem" />
    <InputElement placement="right" width="4.5rem" right="0.5rem" justifyContent="flex-end">
      <Button
        @click="show = !show"
        size="sm"
        h="1.75rem"
      >
        {{ show ? 'Hide' : 'Show' }}
      </Button>
    </InputElement>
  </InputGroup>
  `
})
