<template>
  <span />
</template>

<script>
export default {
  async fetch({ app, redirect }) {
    await app.$auth.logout()
    redirect('/login')
  },
}
</script>
