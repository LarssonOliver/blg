<template>
  <div class="line-numbers" v-html="md.render(content)"></div>
</template>

<script lang="ts" setup>
import MarkdownIt from "markdown-it";
import MarkdownItEmoji from "markdown-it-emoji";

import Prism from "prismjs";
import "@/assets/prism-nord.css";

import "prismjs/plugins/line-numbers/prism-line-numbers";

import "prismjs/plugins/autolinker/prism-autolinker";
import "prismjs/plugins/unescaped-markup/prism-unescaped-markup";

import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";

// I want markdown to be server rendered, it seems this means I cannot
// load languages dynamically.
import "prismjs/components/prism-sql";

const md = new MarkdownIt({
  breaks: false,
  html: true,
  linkify: true,
  typographer: true,
  highlight: (str, lang) => {
    if (Prism.languages[lang]) {
      try {
        return Prism.highlight(str, Prism.languages[lang], lang);
      } catch (__) {}
    }

    return "";
  },
}).use(MarkdownItEmoji);

defineProps({
  content: {
    type: String,
    required: false,
    default: "",
  },
});
</script>
