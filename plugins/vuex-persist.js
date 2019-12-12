import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    // Add stores that you might need to persist in front-end
    modules: [],
  }).plugin(store)
}
