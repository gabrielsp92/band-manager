<template lang="pug">
v-card(flat).mainCard
  v-layout.cardHeader
    v-flex.headerAvatarFlex(text-left)
      v-avatar
        img(src="https://townsquare.media/site/366/files/2019/09/Screen-Shot-2019-09-11-at-10.44.06-AM.png?w=980&q=75")
    v-flex.headerNameFlex
      p.subTitle 22/09/2021
      h4.userName Random Musician
      p.subTitle Awesome Guitarrist
    v-flex.headerActionsFlex(text-right)
      v-btn(text icon)
        v-icon(v-if="isPinned" small) mdi-pin-outline
        v-icon(v-else small) mdi-pin-outline
    v-flex.headerActionsFlex(text-right)
      v-menu(offset-y)
        template(v-slot:activator="{ on }")
          v-btn(text icon v-on="on")
            v-icon more_vert
        v-list(style="padding: 12px")
          v-list-item-title
            v-icon(style="margin-right: 8px" small) mdi-eye
            | Visualizar
          v-list-item-title(style="margin-top: 12px")
            v-icon(style="margin-right: 8px" small) edit
            | Editar
          v-list-item-title(style="margin-top: 12px")
            v-icon(style="margin-right: 8px" small) delete_forever
            | Excluir
  v-layout.contentLayout
    v-flex(text-left).contentFlex
      p Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
  v-divider
  v-layout
    v-spacer
    v-flex(text-right)
      v-btn(fab icon small)
        v-icon(small) mdi-comment-text-multiple
      span.counter 2
      v-btn(fab icon small)
        v-icon(small) mdi-thumb-up
      span.counter 4

</template>
<script>
export default {
  name: 'ContentCard',
  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isPinned() {
      return true
    },
  },
}
</script>

<style lang="sass" scoped>
.mainCard
  font-family: Futura
  color: #707070
  padding: 12px
.cardHeader
  padding: 8px
.headerAvatarFlex
  max-width: fit-content
  margin-right: 12px
  align-self: center
.headerNameFlex
  color: #707070
.headerActionsFlex
  color: #707070
.userName
  margin-top: 0px
.subTitle
  font-size: 14px
  margin-bottom: 0px
.contentLayout
  margin-top: 12px
  margin-right: 4px
.counter
  margin-left: 8px
  margin-right: 8px
</style>
