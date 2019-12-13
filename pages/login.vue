<template lang="pug">
v-container
  v-layout(justify-center)
    v-flex(xs12 sm6 md4)
      v-container.formContainer
        v-layout
          v-flex.xs12
            v-text-field(solo, prepend-inner-icon="mdi-at" v-model="email", label="Email", color="primary")
        v-layout
          v-flex.xs12
            v-text-field(solo, v-model="password", prepend-inner-icon="lock" label="Senha", color="primary", type="password")
        v-layout.formRow(style="margin-top: -12px")
          v-flex.xs12(style="text-align: left")
            nuxt-link(to="/").pwRecoveryLink
              p(style="color: #707070") Recuperar Senha ?
        v-layout.formActions
          v-flex(style="text-align: right")
            v-spacer
            v-btn(text to="/cadastro", color="primary") Cadastrar
            v-btn(color="primary" to="/") Entrar
</template>

<script>
export default {
  layout: 'auth',
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    async login() {
      const data = this.$data
      await this.$auth.loginWith('local', { data })
    },
  },
}
</script>

<style lang="sass" scoped>
.formContainer
  padding: 24px
.formRow
  margin-bottom: 24px
  padding: 8px
.formActions
  margin-top: 48px
.pwRecoveryLink
  text-decoration: none
</style>
