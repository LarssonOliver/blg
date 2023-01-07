<template>
  <header>
    <!-- stuff here -->
    <h1>{{ data.title }}</h1>
    <p>By {{ data.author }} · {{ readTime }} min read</p>
  </header>
  <main>
    <article ref="content">
      <ContentDoc />
    </article>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

// Using upper limit here, as I'm counting many "non words" as words.
const readSpeedWPM = 250;

const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).only(["title", "author"]).findOne();
});

const content = ref(null);
let readTime = ref(0);

onMounted(() => {
  const articleText = content.value.innerText;
  const wordCount = wc(articleText);
  readTime.value = Math.ceil(wordCount / readSpeedWPM);
});
</script>

<script lang="ts">
function wc(text: string): number {
  return text.trim().split(/\s+/).length;
}
</script>

<style scoped lang="scss">
@import "nord/src/sass/nord.scss";

header,
article {
  width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* h1 { */
/*   text-align: center; */
/*   overflow: hidden; */
/*   padding: 0 5%; */

/*   &:before, &:after { */
/*     background-color: $nord3; */
/*     content: ""; */
/*     display: inline-block; */
/*     height: 2px; */
/*     position: relative; */
/*     vertical-align: middle; */
/*     width: 45%; */
/*   } */

/*   &:before { */
/*     right: 1em; */
/*     margin-left: -50%; */
/*   } */

/*   &:after { */
/*     left: 1em; */
/*     margin-right: -50%; */
/*   } */
/* } */
</style>
