// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
const config = defineNuxtConfig({
  modules: [
    ["@nuxtjs/robots", { configPath: "robots.config" }],
    "@nuxtjs/sitemap",
    "@nuxt/content",
  ],
  compatibilityDate: "2024-10-24",
  content: {
    build: {
      markdown: {
        remarkPlugins: {
          "remark-reading-time": {},
        },
        highlight: {
          langs: [
            "diff",
            "json",
            "js",
            "ts",
            "css",
            "shell",
            "html",
            "md",
            "yaml",
          ],
          theme: "nord",
        },
      },
    },
    experimental: {
      nativeSqlite: true,
    },
  },
  routeRules: {
    "/giscus_theme.css": {
      headers: { "Access-Control-Allow-Origin": "https://giscus.app" }
    },
  },
});

export default config;
