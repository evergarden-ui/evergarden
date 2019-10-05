<template>
  <div>
    <Header />
    <ever-box maxWidth="containers.screen-lg" mx="auto" py="120px" display="flex" justifyContent="center">
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