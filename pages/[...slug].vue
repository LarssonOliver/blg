<template>
  <header>
    <!-- stuff here -->
    <h1>{{ data?.title }}</h1>
    <span>Published {{ formattedDate }} by <strong>{{ data?.author }}</strong>
    ·
    {{ readTime }} min read</span>
  </header>
  <svg xmlns="http://www.w3.org/2000/svg"
       xmlns:xlink="http://www.w3.org/1999/xlink"
       viewBox="0 24 150 28 "
       preserveAspectRatio="none">
   <defs>
   <path id="gentle-wave"
     d="M-160 44c30 0
       58-18 88-18s
       58 18 88 18
       58-18 88-18
       58 18 88 18
       v44h-352z" />
    </defs>
    <g class="parallax1">
     <use xlink:href="#gentle-wave" x="50" y="3"/>
    </g>
      <g class="parallax2">
     <use xlink:href="#gentle-wave" x="50" y="0"/>
      </g>
        <g class="parallax3">
     <use xlink:href="#gentle-wave" x="50" y="9"/>
     </g>
      <g class="parallax4">
     <use xlink:href="#gentle-wave" x="50" y="6"/>
    </g>
  </svg>
  <main>
    <article ref="content">
      <ContentDoc />
    </article>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

// Using upper limit here, as I'm counting many "non words" as words.
const readSpeedWPM = 250;

const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent<ParsedContent>()
    .where({ _path: path })
    .only(["title", "author", "date"])
    .findOne();
});

const formattedDate = new Date(data.value?.date).toDateString();

const content = ref<HTMLElement | null>(null);
let readTime = ref(0);

onMounted(() => {
  const articleText = content.value?.innerText || "";
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
</style>
