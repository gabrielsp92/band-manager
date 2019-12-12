<template lang="pug">
v-container
  v-layout(justify-center)
    v-flex(xs12 sm6 md4)
      v-card
        v-card-title.title Criar conta
        v-card-text
          v-text-field(v-model="name", label="Nome", color="secondary")
          v-text-field(v-model="email", label="Email", color="secondary")
          v-text-field(v-model="password", label="Senha", color="secondary", type="password")
        v-card-actions
          v-spacer
          v-btn(flat, to="/login", color="grey") Já sou cadastrado
          v-btn(color="secondary", @click="register") Entrar
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
