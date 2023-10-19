// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  title: 'Skolokovo Технопарк — От стартапа до единорога',
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Skolokovo Технопарк — От стартапа до единорога',
      htmlAttrs: {
        lang: 'ru'
      }
    }
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  googleFonts: {
    families: {
      'Manrope': [300, 500, 600, 700, 800],
    },
    display: "swap",
    
  },
  css: [
    // 'assets/css/main.css',
  ],

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@vueuse/nuxt', '@nuxtjs/yandex-metrika'],
  yandexMetrika: {
    id: '95292036',
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true
  }
  // spaLoadingTemplate: false
})