import Vue from 'vue'
import { Button, Evergarden } from '../'

Vue.use(Evergarden)

new Vue({
  el: '#app',
  render(h) {
    return h(Button, {
      attrs: {
        // ghost, outline, solid, link, unstyled
        variant: 'outline',
        variantColor: 'green'
      },
      on: {
        click() {
          window.alert('hello')
        }
      }
    }, ['hello'])
  }
})

