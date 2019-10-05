import Vue from 'vue'
import * as Evergarden from 'evergarden'
import 'saber-highlight-css/default.css'
import './css/prism.css'
import './css/global.css'

Vue.use(Evergarden.Evergarden)

for (const key of Object.keys(Evergarden)) {
  const value = Evergarden[key]
  if (value.name && value.render) {
    Vue.component(value.name, value)
  }
}

export default ({ setRootComponent }) => {
  setRootComponent({
    functional: true,
    render(h, { children }) {
      return [
        h(Evergarden.CSSReset),
        ...children
      ]
    }
  })
}