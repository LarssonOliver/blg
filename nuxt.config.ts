// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
const config = defineNuxtConfig({
  modules: [
    "@nuxt/content",
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
  },
});

if (process.env.CONTENT_REPO_GITHUB) {
  const content = config.content || {};

  content.sources = {
    github: {
      driver: "github",
      prefix: "/",
      repo: process.env.CONTENT_REPO_GITHUB,
      dir: "content",
      branch: process.env.CONTENT_REPO_BRANCH || "main",
      token: process.env.CONTENT_REPO_GITHUB_TOKEN || undefined,
    },
  };

  config.content = content;
}

export default config;
