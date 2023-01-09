<template>
  <main>
    <div class="list-item" v-for="(item, key) of contentList">
      <PostListItem :content="item" />
      <hr v-if="key !== contentList.length - 1" />
    </div>
    <PostListPagination />
  </main>
</template>

<script setup lang="ts">
import type { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types"

const { data } = await useAsyncData(() => {
  return queryContent<MarkdownParsedContent>()
    .only(["title", "author", "date", "description", "_path"])
    .sort({ date: -1 })
    .skip(0)
    .limit(5)
    .find();
});

const contentList = data.value || [];

</script>

<style scoped>
main {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: justify;
}

.list-item {
  padding-left: .5em;
  padding-right: .5em;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
</style>
