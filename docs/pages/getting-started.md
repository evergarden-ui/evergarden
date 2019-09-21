---
title: Getting Started
layout: docs
---

Install Evergarden using npm:

```bash
npm install evergarden
```

Register Evergarden as a Vue plugin in your app:

```js
import Vue from 'vue'
import { Evergarden } from 'evergarden'
import App from './App.vue'

Vue.use(Evergarden)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

You also need to add the `CSSReset` component in your `App.vue`:

```vue
<template>
  <div id="app">
    <CSSReset />
    <!-- ...rest of your app -->
  </div>
</template>

<script>
import { CSSReset } from 'evergarden'

export default {
  components: {
    CSSReset
  }
}
</script>
```

That's it! Now you can start using Evergarden components in your app.

## Using components

Simply import components by name from Evergarden:

```vue
<template>
  <Button variantColor="green">I'm a button</Button>
</template>

<script>
import { Button } from 'evergarden'

export default {
  components: {
    Button
  }
}
</script>
```