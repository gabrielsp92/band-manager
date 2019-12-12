<template lang="pug">
  v-navigation-drawer(app, :dark="$vuetify.dark", v-bind="drawer", @input="toggleSetting({ path: 'drawer.value', value: $event })")
    v-list
      v-list-item(v-for="(item, i) in drawer.items" :to="item.to" :key="i" router exact)
        v-list-item-action
          v-icon(v-html="item.icon")
        v-list-item-content
          v-list-item-title(v-text="item.title")
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'MainDrawer',
  computed: mapState({
    drawer: state => state.vuetify.drawer,
  }),
  methods: {
    ...mapMutations({ toggleSetting: 'vuetify/toggle' }),
  },
}
</script>
