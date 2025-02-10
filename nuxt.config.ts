export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  target: "static",
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    '@nuxtjs/google-fonts',
    '@pinia-plugin-persistedstate/nuxt',
    '@pinia/nuxt',
  ],
  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
      pixi: true,
    }
  },
  supabase: {
    redirect: false,
  },
  googleFonts: {
    families: {
      Roboto: true
    }
  },
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark',
    storage: 'cookie'
  },
  i18n: {
    lazy: true,
    strategy: 'no_prefix',
    defaultLocale: 'en',
    locales: [
      { code: 'ja', language: 'ja-JP', name: 'Japanese', file: 'ja.ts' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.ts' },
    ],
    langDir: 'locales',
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'eitaar.dev',
      charset: 'utf-8',
      meta: [
        { name: 'description', content: 'eitaar.dev' },
        { name: 'author', content: 'eitaar' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'eitaar.dev' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://eitaar.dev' },
        { property: 'og:image', content: 'https://eitaar.dev/logo.png' },
        { property: 'og:site_name', content: 'eitaar.dev' },
        { property: 'og:locale', content: 'en_US' },
      ],
    }
  },

  compatibilityDate: '2024-12-15',
})
