<template lang="pug">
v-container
  v-layout(row justify-center)
    v-flex(xs12 sm6 md4 text-xs-center)
      v-card
        v-card-text
          blockquote.blockquote
            | &ldquo;Hello {{ available[current] }}&rdquo;
            footer
              small
                em &mdash;Every developer
</template>

<script>
export default {
  data: () => ({
    current: 0,
    available: ['World', 'Mundo', 'Món', 'Monde', 'Welt'],
  }),
  mounted() {
    setInterval(() => {
      if (this.current + 1 < this.available.length) return this.current++
      this.current = 0
    }, 1500)
  },
}
</script>
