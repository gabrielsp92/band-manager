<template lang="pug">
  v-app(:dark="$vuetify.dark", color="white")
    v-system-bar.flex0.hidden-md-and-up(app, status, v-if="isDemo")
      v-spacer
        v-icon network_wifi
        v-icon signal_cellular_null
        v-icon battery_full
        span 10:10
    slot(name="toolbar")
      MainToolbar.flex0(v-if="toolbar", :hasDrawer="drawer")
    slot(name="drawer")
      MainDrawer(v-if="drawer")
    v-content
      slot
    slot(name="bottombar")
      MainBottombar(v-if="bottombar")
</template>

<script>
import MainDrawer from './MainDrawer'
import MainToolbar from './MainToolbar'
import MainBottombar from './MainBottombar'

export default {
  name: 'AppShell',
  components: { MainDrawer, MainToolbar, MainBottombar },
  props: {
    bottombar: { type: Boolean, default: false },
    toolbar: { type: Boolean, default: false },
    drawer: { type: Boolean, default: false },
  },
  data: () => ({
    isDemo: process.env.isDemo,
  }),
}
</script>

<style lang="sass">
.flex0
  flex: 0 0 0
</style>
