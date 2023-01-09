<template>
  <span>
    <NuxtLink :class="prevDisabled ? 'disabled' : ''" :to="prevDisabled ? undefined : { query: { page: page - 1 } }">
      &lt; Previous
    </NuxtLink>

    <NuxtLink v-for="n in pages" :to="n !== page ? { query: { page: n } } : undefined"
      :class="n === page ? 'this-page' : ''">
      {{ n }}
    </NuxtLink>

    <NuxtLink :class="nextDisabled ? 'disabled' : ''" :to="nextDisabled ? undefined : { query: { page: page + 1 } }">
      Next &gt;
    </NuxtLink>
  </span>
</template>

<script setup lang="ts">
import type { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types"

const { pageSize = 5 } = defineProps<{
  pageSize?: number
}>();

const route = useRoute();
const page = ref(+(route.query.page || 1));

watch(() => route.query, (query) => {
  page.value = +(query.page || 1)
});

const { data } = await useAsyncData(() => {
  return queryContent<MarkdownParsedContent>()
    .only(["title"])
    .find();
});

const contentList = data.value || [];
const count = contentList.length;
const pages = Math.ceil(count / pageSize);

const prevDisabled = computed<boolean>(() => page.value === 1);
const nextDisabled = computed<boolean>(() => page.value === pages);

if (page.value < 1 || page.value > pages) {
  navigateTo(undefined);
}
</script>

<style scoped lang="scss">
@import "nord/src/sass/nord.scss";
span {
  width: 100%;
  display: inline-block;
  text-align: center;
  margin-top: 2em;
}

a {
  margin-left: .125em;
  margin-right: .125em;
  padding-left: .25em;
  padding-right: .25em;
}

a.disabled {
  color: $nord3;
}

/* Disable the hover effect. */
a.disabled:hover,
a.disabled:active,
a.disabled:focus {
  background-color: inherit;
}

a.this-page {
  color: $nord4;
  background-color: rgba($nord3, 0.8);
}
</style>
