<script setup lang="ts">
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).only(['title']).findOne()
})
console.log(data);
</script>

<template>
  <main>
    <!-- stuff here -->
    <article>
      <ContentDoc />
    </article>
  </main>
</template>

<style scoped>
  article {
    width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

</style>
