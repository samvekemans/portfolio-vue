export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Sam Vekemans",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },

  publicRuntimeConfig: {
    cmsUrl: process.env.CMS_ENV,
  },

  server: {
    port: process.env.PORT || 3000,
},

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/css/global-styles.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-carousel.js", mode: "client" },
    '~/plugins/vee-validate.js',
  ],

  build: {
    transpile: ['vee-validate/dist/rules'],
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "vue-scrollto/nuxt",
    "@nuxtjs/axios",
    ['nuxt-mail', {
      message: {
        to: 's.vekemans11@gmail.com',
      },
      smtp: {
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
          user: 'aa82c59722c66d',
          pass: 'a2479f4296d469'
        },
      },
    }],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
};
