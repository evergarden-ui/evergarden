import Vue from 'vue'
import { create, mount } from 'demoboard'
import { Evergarden, CSSReset } from 'evergarden'
import toReact from '@egoist/vue-to-react'
import 'normalize.css/normalize.css'
import './global.css'

const demoboard = create()

demoboard.addDecorator(item => {
  const Component = item.options.component
  item.options.component = toReact({
    render(h) {
      return h('div', {
        class: 'component-decorator'
      }, [h(CSSReset), h(Component)])
    }
  })
})

Vue.use(Evergarden)

function importAll(r) {
  return r.keys().map(r)
}

const req = require.context('../src', true, /examples\.js$/)
const examples = importAll(req)
for (const example of examples) {
  example.default(demoboard)
}

mount(demoboard, '#app')
