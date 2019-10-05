<template>
  <div>
    <Header />
    <ever-box maxWidth="containers.screen-lg" mx="auto" py="20px">
      <slot />
    </ever-box>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>