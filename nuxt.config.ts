import { resolve } from "path"
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
const config = defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxtjs/robots",
  ],
  content: {
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
  ssr: false,
  robots: {
    configPath: "./robots.config"
  },
  routeRules: {
    "/giscus_theme.css": {
      headers: { "Access-Control-Allow-Origin": "https://giscus.app" }
    },
  },
});

// if (process.env.CONTENT_REPO_GITHUB) {
//   const content = config.content || {};

//   content.sources = {
//     github: {
//       driver: "github",
//       prefix: "/",
//       repo: process.env.CONTENT_REPO_GITHUB,
//       dir: "content",
//       branch: process.env.CONTENT_REPO_BRANCH || "main",
//       token: process.env.CONTENT_REPO_GITHUB_TOKEN || undefined,
//     },
//   };

//   config.content = content;
// }

export default config;
