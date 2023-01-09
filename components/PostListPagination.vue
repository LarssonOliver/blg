<template>
  <span>
    <NuxtLink disabled :to="{ query: { page: 3 } }">&lt; Previous</NuxtLink>
    <NuxtLink :to="{ query: { page: 3 } }">Next &gt;</NuxtLink>
  </span>
  {{ contentList }}
  <br />
  {{ page }}
  <NuxtLink :to="{ query: { page: 3 } }">test</NuxtLink>
</template>

<script setup lang="ts">
import type { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types"

const route = useRoute();
const page = ref(+(route.query.page || 1));
watch(() => route.query,
  (query) => page.value = +(query.page || 1)
);

const { data } = await useAsyncData(() => {
  return queryContent<MarkdownParsedContent>()
    .only(["title"])
    .find();
});

const contentList = data.value || [];
</script>
