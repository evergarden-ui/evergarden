import Vue from 'vue'
import { create, mount } from 'demoboard'
import toReact from '@egoist/vue-to-react'
import { Evergarden } from 'evergarden'
import 'prismjs/themes/prism.css'
import 'github-markdown-css/github-markdown.css'
import './global.css'

const demoboard = create()

Vue.use(Evergarden)

function importAll(r) {
  return r.keys().map(key => {
    return { key, component: r(key) }
  })
}

function wrapComponent(component) {
  return toReact({
    render(h) {
      return h('div', { class: 'markdown-body' }, [h(component)])
    }
  })
}

const section = demoboard.section('Components')

importAll(require.context('./', false, /\.md$/)).forEach(({ key, component }) => {
  const [, title] = /^\.\/([^\.]+)\.md$/.exec(key)
  section.add(title, {
    ...component.meta,
    component: wrapComponent(component.default)
  })
})

mount(demoboard, '#app')
