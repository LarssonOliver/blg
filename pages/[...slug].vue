<template>
  <header v-if="page">
    <h1>{{ page?.title }}</h1>
    <span>{{ formattedDate }} &#183; {{ readTime }} {{ readTime !== 1 ? "minutes" : "minute" }} read.</span>
  </header>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 "
    preserveAspectRatio="none" v-if="page">
    <defs>
      <path id="gentle-wave" d="M-160 44c30 0
       58-18 88-18s
       58 18 88 18
       58-18 88-18
       58 18 88 18
       v44h-352z" />
    </defs>
    <g class="parallax1">
      <use xlink:href="#gentle-wave" x="50" y="3" />
    </g>
    <g class="parallax2">
      <use xlink:href="#gentle-wave" x="50" y="0" />
    </g>
    <g class="parallax3">
      <use xlink:href="#gentle-wave" x="50" y="9" />
    </g>
    <g class="parallax4">
      <use xlink:href="#gentle-wave" x="50" y="6" />
    </g>
  </svg>
  <main>
    <article>
      <ContentRenderer v-if="page" :value="page">
        <template #empty>
          <p class="not-found">
            This article appears to be empty.
            <br />
            <NuxtLink :to="{ name: 'index' }">
              Back to Post List.
            </NuxtLink>
          </p>
        </template>
      </ContentRenderer>
      <p v-else class="not-found">
        <strong>404:</strong>
        This page could not be found.
        <br />
        <NuxtLink :to="{ name: 'index' }">
          Back to Post List.
        </NuxtLink>
      </p>
    </article>
  </main>
  <div class="comments" v-if="page !== null && page.body">
    <hr style="margin-top: 2em; margin-bottom: 2em;" />
    <CommentSection />
  </div>
</template>

<script setup lang="ts">
const { path } = useRoute();
const { data: page } = await useAsyncData(path, () =>
  queryCollection("content")
    .path(path)
    .select("title", "author", "date", "body", "meta")
    .first()
);

const formattedDate = new Date(page.value?.date ?? "").toDateString();
const readTime = Math.ceil((page.value?.meta.readingTime as { minutes: number }).minutes);
</script>

<style scoped lang="scss">
@use "nord/src/sass/nord.scss" as *;

header,
article {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding-left: .25em;
  padding-right: .25em;
}

svg {
  display: block;
  width: 100%;
  height: calc(100vw * 0.08);
  max-height: 60px;
  margin-top: 1em;
}

.parallax1 {
  fill: $nord3;
  transform: translate(-70px);
}

.parallax2 {
  fill: $nord2;
  transform: translate(50px);
}

.parallax3 {
  fill: $nord1;
  transform: translate(-20px, -3px);
}

.parallax4 {
  fill: $nord0;
  transform: translate(20px);
}

.not-found {
  width: 100%;
  text-align: center;
}

.comments {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding-left: .25em;
  padding-right: .25em;
}
</style>
