## Variant Color

```html {insert:'below'}
<Button variantColor="green">
  Button
</Button>

<Button variantColor="red">
  Button
</Button>

<Button variantColor="cyan">
  Button
</Button>

<Button variantColor="orange">
  Button
</Button>

<Button variantColor="blue" color="gray.300" :_hover="{color: 'gray.700'}">
  Button
</Button>
```

## Variant

```html {insert:'below'}
<Button variantColor="green" variant="solid">
  Button
</Button>

<Button variantColor="green" variant="outline">
  Button
</Button>

<Button variantColor="green" variant="ghost">
  Button
</Button>

<Button variantColor="green" variant="link">
  Button
</Button>

<Button variantColor="green" variant="unstyled">
  Button
</Button>
```

<script>
import { Button } from 'evergarden'

export default {
  components: {
    Button
  }
}

export const meta = {
  title: 'Variant'
}
</script>