<template>
  <TheHeader />
  <NuxtPage />
  <TheFooter />
</template>

<script setup lang="ts">
import "@/assets/index.scss";

useHead({
  title: 'Oliver Larsson',
  meta: [
    { name: 'description', content: "Oliver Larsson's personal blog." },
    { name: 'lang', content: 'en' },
  ],
  htmlAttrs: {
    lang: 'en'
  },
});

useSeoMeta({
  title: 'Oliver Larsson',
  ogTitle: 'Oliver Larsson',
  author: 'Oliver Larsson',
  description: "Oliver Larsson's personal blog.",
  ogDescription: "Oliver Larsson's personal blog.",
//  ogImage: 'https://example.com/image.png',
//  twitterCard: 'summary_large_image',
});
</script>
