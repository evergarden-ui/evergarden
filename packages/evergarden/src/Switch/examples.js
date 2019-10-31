import Vue from 'vue'
import { Stack, Switch as EveSwitch } from 'evergarden'

export default { title: 'Switch' }

export const Sizes = () =>({
  data: () => ({
    isChecked: false
  }),
  render(h) {
    return (
      <Stack isInline={true} alignItems="baseline">
        <EveSwitch variantColor="blue" mr={2} size="sm" isChecked={this.isChecked} onChange={() => this.isChecked = !this.isChecked } />
        <EveSwitch variantColor="blue" mr={2} size="md" isChecked={this.isChecked} onChange={() => this.isChecked = !this.isChecked } />
        <EveSwitch variantColor="blue" mr={2} size="lg" isChecked={this.isChecked} onChange={() => this.isChecked = !this.isChecked } />
      </Stack>
    )
  }
})