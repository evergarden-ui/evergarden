import Vue from 'vue'
import { create, mount } from 'demoboard'
import { Evergarden } from 'evergarden'
import 'normalize.css/normalize.css'
import './global.css'

const demoboard = create()

Vue.use(Evergarden)

function importAll(r) {
  return r.keys().map(r)
}

const req = require.context("../src", true, /examples\.js$/);
const examples = importAll(req)
for (const example of examples) {
  example.default(demoboard)
}

mount(demoboard, '#app')
