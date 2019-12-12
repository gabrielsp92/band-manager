<template lang="pug">
v-container
  v-layout(justify-center)
    v-flex(xs12 sm6 md4)
      v-card
        v-card-title.title Login
        v-card-text
          v-text-field(v-model="email", label="Email", color="secondary")
          v-text-field(v-model="password", label="Senha", color="secondary", type="password")
        v-card-actions
          v-spacer
          v-btn(flat, to="/cadastro", color="grey") Cadastrar
          v-btn(color="secondary", @click="login") Entrar
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
