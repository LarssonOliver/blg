import { resolve } from "path"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
const config = defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxtjs/robots",
  ],
  content: {
    markdown: {
      remarkPlugins: [
        "remark-reading-time",
      ],
    },
    highlight: {
      preload: [
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
    sources: {
      blg_content: {
        prefix: "/posts",
        driver: "fs",
        base: resolve(__dirname, "posts/content")
      },
    },
  },
  robots: {
    configPath: "./robots.config"
  },
  routeRules: {
    "/giscus_theme.css": {
      headers: { "Access-Control-Allow-Origin": "https://giscus.app" }
    },
  },
});

export default config;
