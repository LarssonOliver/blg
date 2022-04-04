<template>
  <article>
    {{ metadata.title }}
    {{ metadata.description }}
    <MarkdownRenderer :content="content" />
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

const regexp = /^(---\n(?:\s*(?:(?:[a-zA-Z]+\:)|-)\s+.*\n)+---)/g;
const matches = [...post.matchAll(regexp)][0];

var metadata = {} as PostMetadata;
var content = post;

console.log(content.substring(matches[0].length));

// There is a YAML section
if (matches) {
  metadata = yaml.parseDocument(matches[0]).toJSON() as PostMetadata;
  content = content.substring(matches[0].length);
}
</script>
