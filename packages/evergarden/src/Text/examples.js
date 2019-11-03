import { Stack, Text } from 'evergarden'

export default { title: 'Text', component: Text }

export const basic = () => ({
  render(h) {
    return (
      <Stack>
        <Text color="gray.500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis ipsam cupiditate aut quo aspernatur veritatis. Tempora quisquam qui, sit magni laborum, repudiandae et dolore esse ab fugit sequi est.</Text>
        <Text color="tomato">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis ipsam cupiditate aut quo aspernatur veritatis. Tempora quisquam qui, sit magni laborum, repudiandae et dolore esse ab fugit sequi est.</Text>
      </Stack>
    )
  }
})