export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Super TicTacToe",
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Quicksand: [400, 700],
    },
  },
  watch: ["server/plugins/**/*.ts"],
  runtimeConfig: {
    storageUsername: process.env.NUXT_STORAGE_USERNAME,
    storagePassword: process.env.NUXT_STORAGE_PASSWORD,
    storagePort: process.env.NUXT_STORAGE_PORT,
    storageHost: process.env.NUXT_STORAGE_HOST,
    storageDb: process.env.NUXT_STORAGE_DB,
  },
});
