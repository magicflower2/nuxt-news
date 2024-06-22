export default defineNuxtConfig({
  app: {
    baseURL: "/news/",
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
