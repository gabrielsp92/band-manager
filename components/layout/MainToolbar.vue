<template lang="pug">
  v-app-bar(v-bind="toolbar")
    template(v-if="hasDrawer && toolbar.icons.drawer")
      v-app-bar-nav-icon(@click="toggleSetting('drawer.value')")
      v-btn.hidden-md-and-down(v-if="toolbar.icons.drawerMiniVariant", icon @click.stop="toggleSetting('drawer.miniVariant')")
        v-icon(v-html="drawer.miniVariant ? 'chevron_right' : 'chevron_left'")
    v-toolbar-title {{ $root.$options.head.title }}
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'MainToolbar',
  props: {
    hasDrawer: { type: Boolean, default: false },
  },
  computed: mapState({
    drawer: state => state.vuetify.drawer,
    toolbar: state => state.vuetify.toolbar,
  }),
  methods: {
    ...mapMutations({ toggleSetting: 'vuetify/toggle' }),
  },
}
</script>
