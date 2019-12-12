module.exports = {
  /* =============================
   * === CONFIGURAÇÕES DO NUXT ===
   *
   * Documentação: https://nuxtjs.org/guide/configuration
   */

  mode: 'universal',
  env: {
    isDemo: process.env.DEMO,
  },
  head: {
    title: 'Band Manager',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
      },
    ],
  },
  loading: {
    color: '#fff', // TODO: Alterar valor
  },

  /* ===========================
   * ===  MÓDULOS E PLUGINS  ===
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    ['@nuxtjs/moment', ['pt-br']],
    '@nuxtjs/pwa',
    '@nuxtjs/vuetify',
  ],

  plugins: ['~/plugins/faker', { src: '~/plugins/vuex-persist', ssr: false }],

  /*
   * Módulo do Vuetify
   * Documentação: https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    defaultAssets: { font: true, icons: 'mdi' },

    /* Configurações opcionais de tema do Vuetify,
     * remova o que não for necessário nesse bloco
    customVariables: [‘~/assets/variables.scss’],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: ‘#DB2829’,
          secondary: ‘#EF5350’,
          accent: ‘#434343’,
          error: ‘#FF5722’,
          warning: ‘#FF9800’,
          info: ‘#03A9F4’,
          success: ‘#4CAF50’,
          yellow: ‘#FBC02D’,
        },
      },
      icons: {
        iconfont: ‘mdi’,
      },
    },
    */
  },

  /*
   * Plugin do manifest.json
   * Documentação: https://pwa.nuxtjs.org/modules/manifest.html
   */
  manifest: {
    name: 'APP FULL NAME', // TODO: Alterar valor
    short_name: 'APP SHORTCUT NAME', // TODO: Alterar valor
    background_color: '#FFF', // TODO: Alterar valor
  },

  /*
   * Módulo do Axios
   * Documentação: https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.API_URL || 'http://localhost:4000/',
    browserBaseURL:
      process.env.BROWSER_API_URL ||
      process.env.API_URL ||
      'http://localhost:4000/',
  },

  /*
   * Módulo de autenticação
   * Documentação: https://auth.nuxtjs.org/api/options.html
   */
  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/',
      home: '/',
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'token' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/me', method: 'get', propertyName: 'user' },
        },
      },
    },
  },

  /*
   * === === === === === === === ===
   * ===                         ===
   * ===  CONFIGURAÇÃO DE BUILD  ===
   * ===                         ===
   * ===       NÃO  ALTERAR      ===
   * ===                         ===
   * === === === === === === === ===
   */
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
