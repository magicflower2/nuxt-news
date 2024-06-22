export default defineNuxtConfig({
  app: {
    baseURL: "/",
  },
  postcss: {
    plugins: {
      "postcss-nesting": {},
    },
  },
  devtools: {
    enabled: true,
  },
});
