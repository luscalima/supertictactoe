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
});
