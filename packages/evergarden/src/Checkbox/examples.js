import Vue from 'vue'
import { Stack, Checkbox } from 'evergarden'

export default { title: 'Checkbox', component: Checkbox }

export const Sizes = () => ({
  data: () => {
    return {
      isChecked: true
    }
  },
  render(h) {
    return (
      <Stack>
        <Checkbox size="lg" isChecked={this.isChecked} />
        <Checkbox size="md" isChecked={this.isChecked} />
        <Checkbox size="sm" isChecked={this.isChecked} />
      </Stack>
    )
  }
})

export const Indeterminate = () => ({
  data: () => {
    return {
      checkedItems: [true, false]
    }
  },
  computed: {
    allChecked () {
      return this.checkedItems.every(Boolean)
    },
    isIndeterminate () {
      return this.checkedItems.some(Boolean) && !this.allChecked
    }
  },
  render(h) {
    return (
      <Stack spacing={0}>
        <Checkbox isChecked={this.allChecked} onChange={(e) => this.checkedItems = [e.target.checked, e.target.checked]} isIndeterminate={this.isIndeterminate}>Parent</Checkbox>
        <Stack spacing={0} pl={6} mt={1}>
          <Checkbox isChecked={this.checkedItems[0]} onChange={(e) => Vue.set(this.checkedItems, 0, e.target.checked) }>Child 1</Checkbox>
          <Checkbox isChecked={this.checkedItems[1]} onChange={(e) => Vue.set(this.checkedItems, 1, e.target.checked) }>Child 2</Checkbox>
        </Stack>
      </Stack>
    )
  }
})

export const Custom = () => ({
  data: () => {
    return {
      isChecked: true
    }
  },
  render(h) {
    return (
      <Checkbox as="button" isChecked={this.isChecked} onClick={() => this.isChecked = !this.isChecked}>
        { this.isChecked ? 'Checked' : 'Unchecked' }
      </Checkbox>
    )
  }
})