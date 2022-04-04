<template>
  <article>
    <!-- {{ metadata.title }}
    {{ metadata.description }} -->
    <MarkdownRenderer :content="post" />
  </article>
</template>

<script lang="ts">
export interface PostMetadata {
  title: string;
  date?: string;
  tags?: string[];
  description?: string;
  image?: string;
  url?: string;
}
</script>

<script setup lang="ts">
import yaml from "yaml";
import post from "@/content/lorem.md?raw";

const regexp = /^(---(?:.|\n)*---)?\s*((?:.|\n)*)$/g;
const matches = [...post.matchAll(regexp)];

// var metadata = {} as PostMetadata;
var content = "";

// // There is a YAML section
// if (matches[2]) {
//   metadata = yaml.parseDocument(matches[1]).toJSON() as PostMetadata;
//   content = matches[2];
// } else {
//   content = post;
// }
</script>
