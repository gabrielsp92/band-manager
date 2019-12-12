export const state = () => ({
  ui: {
    darkTheme: true,
    navigationDrawer: true,
    navigationDrawerMini: false,
  },
  drawer: {
    value: null,
    fixed: true,
    clipped: true,
    miniVariant: false,
    items: [
      { icon: 'apps', title: 'Dashboard', to: '/' },
      { icon: 'bubble_chart', title: 'Inspire-se', to: '/inspire' },
      { icon: 'exit_to_app', title: 'Sair', to: '/logout' },
    ],
  },
  toolbar: {
    dark: true,
    fixed: false,
    clippedLeft: true,
    color: 'black',
    icons: {
      drawer: true,
      drawerMiniVariant: true,
    },
  },
})

export const mutations = {
  toggle(state, payload) {
    if (!['string', 'object'].includes(typeof payload))
      throw 'Invalid payload type'
    const path = typeof payload === 'string' ? payload : payload.path
    const newValue = typeof payload === 'string' ? undefined : payload.value
    if (!path) throw 'Invalid path parameter'
    const pathElements = path.split('.')
    const pathCount = pathElements.length
    pathElements.reduce((acc, key, index) => {
      if (index < pathCount - 1) return acc[key]
      acc[key] = typeof newValue !== 'undefined' ? !!newValue : !acc[key]
    }, state)
  },
}
