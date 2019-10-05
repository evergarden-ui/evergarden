<template>
  <ever-box as="header" borderBottomWidth="1px" height="16">
    <ever-box
      maxWidth="containers.screen-lg"
      mx="auto"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      height="full"
      fontSize="xl"
      fontWeight="bold"
    >
      <ever-box>
        <ever-link as="saber-link" to="/" :_hover="{textDecoration: 'none'}">{{ $siteConfig.title }}</ever-link>
      </ever-box>

      <ever-box
        display="flex"
        :flex="{ sm: '1', md: 'none' }"
        ml="5"
        alignItems="center"
        color="gray.500"
        justifyContent="flex-end"
      >
        <ever-icon-button
          as="saber-link"
          to="https://github.com/egoist/evergarden"
          :icon="$data.$GithubIcon"
          variant="ghost"
          color="current"
          fontSize="20px"
        />
        <ever-icon-button
          as="saber-link"
          to="https://twitter.com/_egoistlily"
          :icon="$data.$TwitterIcon"
          variant="ghost"
          color="current"
          fontSize="20px"
        />
      </ever-box>
    </ever-box>
  </ever-box>
</template>

<script>
import Vue from 'vue'
import { GithubIcon, TwitterIcon } from 'vue-bytesize-icons'

export default Vue.extend({
  data() {
    return {
      $GithubIcon: GithubIcon,
      $TwitterIcon: TwitterIcon
    }
  }
})
</script>