import Vue from 'vue'
import { Button, Evergarden, theme } from '../'

Vue.use(Evergarden)

new Vue({
  el: '#app',
  evergarden: {
    theme
  },
  render(h) {
    return h(Button, {
      attrs: {
        variantColor: 'green'
      }
    }, ['hello'])
  }
})