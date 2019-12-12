<template lang="pug">
v-container
  v-layout(row justify-center)
    v-flex(xs12 sm6 md4 text-xs-center)
      v-card
        v-card-text
          blockquote.blockquote
            | &ldquo;First, solve the problem. Then, write the code.&rdquo;
            footer
              small
                em &mdash;John Johnson
</template>

<script>
export default {}
</script>
