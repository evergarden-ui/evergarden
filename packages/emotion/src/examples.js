import Vue from 'vue'
import { styled, Global, css } from './'

new Vue({
  el: '#app',
  render(h) {
    const PinkButton = styled('button')`
      color: pink;
      border: 1px solid pink;
      padding: 8px 12px;
    `
    return h('div',{}, [
      h(Global, {
        props: {
          styles: [css`
          body { background-color: red; }
          `]
        }
      }),
      h(PinkButton, {class: 'foo'}, ['Button'])
    ])
  }
})