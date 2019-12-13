<template lang="pug">
  AppShell.app
    .background
      v-container.header
        v-layout
          v-flex.xs12(style="text-align: center")
            h1 Band Manager
      nuxt
</template>

<script>
import AppShell from '~/components/layout/AppShell'

export default {
  components: { AppShell },
}
</script>
<style lang="sass">
.app
  font-family: Futura
  color: #707070
.background
  background-image: url(../assets/bg_contrast.png)
  background-size: cover
  height: 100%
.header
  padding: 32px
  padding-top: 8vh
</style>
