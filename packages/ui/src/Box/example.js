import Vue from 'vue'
import { Box } from './'

new Vue({
  el: '#app',
  render(h) {
    return h(Box, {
      props: {
        as: 'section',
        css: {
          color: 'red',
          bg: 'yellow',
          mx: 100,
          ml: 30,
          p: 40,
          pb: 10,
          border: '2px solid #ccc',
          borderColor: 'red',
          borderRadius: 33
        }
      }
    }, ['hello'])
  }
})