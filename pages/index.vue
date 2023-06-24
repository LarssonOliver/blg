<template>
  <main>
    <ClientOnly>
      <div class="list-item" v-for="(item, key) of contentList">
        <PostListItem :content="item" />
        <hr v-if="key !== contentList.length - 1" />
      </div>
    </ClientOnly>
    <PostListPagination :page-size="pageSize" />
  </main>
</template>

<script setup lang="ts">
import type { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types"

const pageSize = 5;

const route = useRoute();
const page = ref(+(route.query.page || 1));

async function fetchData() {
  const { data } = await useAsyncData(() => {
    return queryContent<MarkdownParsedContent>()
      .only(["title", "author", "date", "description", "_path"])
      .sort({ date: -1 })
      .skip(pageSize * (page.value - 1))
      .limit(pageSize)
      .find();
  });

  contentList.value = data.value || [];
}

watch(() => route.query, (query) => {
  page.value = +(query.page || 1)
  fetchData();
});

const contentList = ref<any[]>([]);
fetchData();
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
