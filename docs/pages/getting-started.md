---
title: Getting Started
layout: docs
---

Install Evergarden using npm

```bash
npm install evergarden
```

Register Evergarden as a Vue plugin in your app:

```js
import Vue from 'vue'
import { Evergarden } from 'evergarden'

Vue.use(Evergarden)
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