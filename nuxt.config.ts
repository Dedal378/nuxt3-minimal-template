// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  // Заменяется значениями из .env
  runtimeConfig: {
    apiSecret: 'ENV_1234',
    public: {
      apiBase: 'ENV_1234',
    }
  },

  css: [
    '~/assets/css/styles.css'
  ],

  app: {
    head: {
      title: 'Nuxt3',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ],
      /* script: [
        {
          defer: true,
          'data-domain': 'content.nuxtjs.org',
          src: 'https://sample/script.js'
        }
      ] */
      link: [],
      style: [],
      noscript: []
    }
  },

  modules: [
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',

    // Unocss https://unocss.dev/integrations/nuxt
    '@unocss/nuxt'
    // '@nuxtjs/tailwindcss'
  ],

  // Tailwind можно заменить Unocss, он быстрее и меньше весит,
  // и также использует классы Tailwind, Bootstrap & etc
  // https://antfu.me/posts/reimagine-atomic-css#introducing-unocss
  // Tailwind & Nuxt 2/3: https://tailwindcss.com/docs/guides/nuxtjs
  /* tailwindcss: {
    configPath: '~/tailwind.config.cjs',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true
  }, */

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  typescript: {
    typeCheck: true,
    strict: true
  },

  devtools: {
    timeline: {
      enabled: true,
    },
  },
})
