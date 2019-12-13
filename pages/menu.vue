<template lang="pug">
v-container
  v-layout.profileHeader(justify-center)
    v-flex(xs12 sm6 md4)
      v-card(flat)
        v-card-text
          v-layout.profileHeaderLayout
            v-flex.avatarFlex
              v-avatar(width="100px" height="100px")
                img(src="https://conteudo.imguol.com.br/blogs/107/files/2018/09/joe-bonamassa-2014-press-photo-billboard-650x430.jpg")
            v-flex.userNameFlex
              v-layout
                v-flex
                  h2.userName {{ user.name }}
              v-layout
                v-flex
                  p.userDescription(small) {{ user.description }}
              v-layout
                v-flex
                  v-btn(color="primary" small)
                    v-icon edit
                    | editar
  v-layout(justify-center)
    v-flex(xs12 sm6 md4)
      v-layout.menuRow
        v-flex.iconFlex
          v-icon mdi-television-play
        v-flex.menuFlex
          h4 Galeria
      v-layout.menuRow
        v-flex.iconFlex
          v-icon mdi-calendar-month
        v-flex.menuFlex
          h4 Agenda
      v-layout.menuRow
        v-flex.iconFlex
          v-icon mdi-link-box-outline
        v-flex.menuFlex
          h4 Links
      v-layout.menuRow
        v-flex.iconFlex
          v-icon mdi-bell
        v-flex.menuFlex
          h4 Notificações
      v-layout.menuRow
        v-flex.iconFlex
          v-icon mdi-account-group
        v-flex.menuFlex
          h4 Membros
      v-layout.menuRow
        v-flex.iconFlex
          v-icon mdi-tag
        v-flex.menuFlex
          h4 Merch
      v-layout.menuRow
        v-flex.iconFlex
          v-icon mdi-settings
        v-flex.menuFlex
          h4 Ajustes
</template>
<script>
export default {
  computed: {
    user() {
      return {
        name: 'Sample User',
        email: 'sample@user.com.br',
        description: 'Awesome Guitarist',
      }
    },
  },
}
</script>
<style lang="sass">
.profileHeader
  margin-bottom: 8px
.profileHeaderLayout
  width: 100%
.userName
  margin-top: 12px
  font-family: Futura
  color: #707070
.userDescription
  font-size: 12px
  color: #D90808
  margin-bottom: 0px
  font-family: Futura
.menuRow
  padding: 8px
.iconFlex
  max-width: fit-content
  padding: 8px
.menuFlex
  padding: 8px
  color: #707070
  font-family: Futura
.avatarFlex
  padding: 12px
  max-width: fit-content
  margin-right: 12px
</style>
