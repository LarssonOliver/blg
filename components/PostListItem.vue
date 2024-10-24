<template>
  <h2 v-if="content.external">
    <NuxtLink :to="content.externalUrl" target="_blank">
      {{ content.title }}
    </NuxtLink>
  </h2>
  <h2 v-else>
    <NuxtLink :to="content._path">
      {{ content.title }}
    </NuxtLink>
  </h2>
  <span>{{ content.external ? "External Post - " : "" }}{{ content.language ? `${content.language} - ` : "" }}{{ date }}</span>
  <p>{{ content.description }}</p>
</template>

<script setup lang="ts">
import type { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types";

const props = defineProps<{
  content: MarkdownParsedContent
}>();

const date = computed(() => new Date(props.content.date).toDateString());
</script>

<style scoped>
h2 {
  margin-bottom: 0;
}

span {
  font-size: .9em;
  font-weight: 300;
}

a {
  padding-left: .25em;
  padding-right: .25em;
  margin-left: -.25em;
}
</style>
