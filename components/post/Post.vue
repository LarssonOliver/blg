<template>
  <article>
    {{ metadata.title }}
    {{ metadata.description }}
    <MarkdownRenderer :content="article" />
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

const parsed = yaml.parseAllDocuments(post);
const metadata = parsed[0].toJSON() as PostMetadata;
const article = post.split("---")[2];
</script>
