<template lang="pug">
v-container
  v-layout(justify-center)
    v-flex(xs12 sm6 md4)
      v-container.formContainer
        v-layout.formRow
          v-flex.xs12
            h3(style="color: #707070") Solicitar Participação
        v-layout
          v-flex.xs12
            v-text-field(solo, prepend-inner-icon="mdi-account", v-model="nickname", label="Apelido", color="primary")
        v-layout
          v-flex.xs12
            v-text-field(solo, prepend-inner-icon="mdi-at", v-model="email", label="Email", color="primary")
        v-layout
          v-flex.xs12
            v-text-field(solo, prepend-inner-icon="mdi-lock", v-model="password", label="Senha", color="primary", type="password")
        v-layout.formActions
          v-flex(style="text-align: right")
            v-btn(text to="/login", color="primary") Cancelar
            v-btn(color="primary" to="/") Cadastrar
      //- v-card
      //-   v-card-title.title Criar conta
      //-   v-card-text
      //-     v-text-field(v-model="name", label="Nome", color="secondary")
      //-     v-text-field(v-model="email", label="Email", color="secondary")
      //-     v-text-field(v-model="password", label="Senha", color="secondary", type="password")
      //-   v-card-actions
      //-     v-spacer
      //-     v-btn(flat, to="/login", color="grey") Já sou cadastrado
      //-     v-btn(color="secondary", @click="register") Entrar
</template>

<script>
export default {
  layout: 'auth',
  auth: false,
  data: () => ({
    name: '',
    email: '',
    password: '',
  }),
  methods: {
    async register() {
      const data = this.$data
      try {
        await this.$axios.post('/auth/register', data)
        this.$auth.loginWith('local', { data })
      } catch (e) {
        console.error(e)
      }
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
