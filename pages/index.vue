<template>
  <main>
    <div class="list-item" v-for="(item, key) of contentList">
      <PostListItem :content="item" />
      <hr v-if="key !== contentList.length - 1" />
    </div>
    <PostListPagination :page-size="pageSize" />
  </main>
</template>

<script setup lang="ts">
const pageSize = 5;

const route = useRoute();
const page = ref(+(route.query.page || 1));

async function fetchData() {
  const { data } = await useAsyncData(() => queryCollection("content")
    .select("title", "author", "date", "description", "path", "external", "externalUrl", "language")
    .order("date", "DESC")
    .skip(pageSize * (page.value - 1))
    .limit(pageSize)
    .all()
  );

  contentList.value = data.value || [];
}

watch(() => route.query, (query) => {
  page.value = +(query.page || 1)
  fetchData();
});

const contentList = ref<any[]>([]);
await fetchData();
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
