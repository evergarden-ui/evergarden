import Vue from 'vue'
import { configure, addDecorator } from '@storybook/vue';
import { Evergarden, CSSReset } from 'evergarden'

Vue.use(Evergarden)

addDecorator(p => ({
  render(h) {
    return h('div', null, [
      h(CSSReset),
      h(p())
    ])
  }
}))

configure(require.context('../src', true, /examples\.js$/), module);
