import Vue from 'vue'
import { configure, addDecorator, addParameters } from '@storybook/vue'
import { Evergarden, Box, CSSReset } from 'evergarden'

Vue.use(Evergarden)

addDecorator(p => ({
  render(h) {
    return h(Box, { attrs: { p: '1rem' } }, [h(CSSReset), h(p())])
  }
}))

addParameters({
  docs: {
    inlineStories: true
  }
})

configure(require.context('../src', true, /examples\.js$/), module)
