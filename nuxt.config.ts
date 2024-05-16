export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Super TicTacToe",
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
