<template lang="pug">
AppShell.main
  nuxt
  v-bottom-navigation(
    v-model="bottomNav"
    dark
    shift
    grow
    fixed
  )
    v-btn(to="/")
      span Home
      v-icon mdi-home
    v-btn(to="/repertorio")
      span Repertório
      v-icon mdi-playlist-music
    v-btn(to="/financas")
      span Finanças
      v-icon mdi-currency-usd
    v-btn(to="/menu")
      span Menu
      v-icon menu
</template>

<script>
import AppShell from '~/components/layout/AppShell'

export default {
  components: { AppShell },
  data: () => ({
    bottomNav: 3,
  }),
}
</script>
<style lang="sass" scoped>
// .main
//   height: 100%
</style>
