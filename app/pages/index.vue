<template>
  <main>
    <div class="list-item" v-for="(item, key) of posts">
      <PostListItem :content="item" />
      <hr v-if="key !== posts.length - 1" />
    </div>
    <PostListPagination :page-size="pageSize" />
  </main>
</template>

<script setup lang="ts">
const pageSize = 5;

const route = useRoute();
const router = useRouter();
const page = computed({
  get: () => Number(route.query.page || 1),
  set: (p: number) => {
    router.push({
      query: { ...route.query, page: p },
    });
  },
});

const { posts } = usePaginatedPosts(page, pageSize);
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
