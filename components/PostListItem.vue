<template>
  <h2>
    <NuxtLink :to="content._path">
      {{ content.title }}
    </NuxtLink>
  </h2>
  <span>{{ date }}</span>
  <p>{{ content.description }}</p>
</template>

<script setup lang="ts">
import type { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types"

const props = defineProps<{
  content: MarkdownParsedContent
}>();

const date = new Date(props.content.date).toDateString();
</script>

<style scoped lang="scss">
@import "nord/src/sass/nord.scss";

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
