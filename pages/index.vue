<template lang="pug">
v-container.main
  v-layout.homeHeaderLayout(row justify-center)
    v-flex(xs12 sm12 md12)
      v-layout
        v-flex.homeTitleFlex
          h2(style="color: #D90808") Hagbard
        v-flex(text-right)
          v-btn(text icon)
            v-icon search
          v-btn(text icon)
            v-icon mdi-bell
  v-layout(row justify-center).contentLayout
    v-flex(xs12)
      v-layout.contentCardLayout(v-for="item, key in 3" :key="key")
        v-flex(xs12)
          ContentCard
  .floatButton
    v-btn.mx-2(fab dark color="primary")
      v-icon mdi-plus
</template>

<script>
import ContentCard from '~/components/ContentCard'
export default {
  components: {
    ContentCard,
  },
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
<style lang="sass" scoped>
.main
  font-family: Futura
  color: #707070
.homeHeaderLayout
  position: absolute
  top: 0
  width: 100%
  height: 80px
  padding: 12px
  border-bottom: solid 1px #eeeeee
  background-color: #fff
  align-items: center
.homeTitleFlex
  max-width: fit-content
.contentLayout
  margin-top: 80px
  margin-bottom: 48px
.contentCardLayout
  margin-bottom: 16px
.floatButton
  position: fixed
  right: 24px
  bottom: 12vh
</style>
