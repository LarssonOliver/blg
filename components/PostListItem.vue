<template>
  <h2 v-if="content.external">
    <NuxtLink :to="content.externalUrl" target="_blank">
      {{ content.title }}
    </NuxtLink>
  </h2>
  <h2 v-else>
    <NuxtLink :to="content.path">
      {{ content.title }}
    </NuxtLink>
  </h2>
  <span>{{ content.external ? "External Post - " : "" }}{{ content.language ? `${content.language} - ` : "" }}{{ date
    }}{{ authorString }}</span>
  <p>{{ description }}</p>
</template>

<script setup lang="ts">
const props = defineProps<{
  content: any
}>();

const date = computed(() => new Date(props.content.date).toDateString());
const authorString = computed(() => {
  if (props.content.author && props.content.author !== "Oliver Larsson") {
    return ` - By ${props.content.author}`;
  }
  return "";
});

const description = computed(() => {
  if (!props.content.description)
    return "";

  let description = props.content.description as string;
  if (description.endsWith("\\n"))
    description = description.slice(0, "\\n".length * -1);

  return description;
});
</script>

<style scoped>
h2 {
  margin-bottom: 0;
}

span {
  font-size: .9em;
  font-weight: 300;
}

a {
  padding-left: .25em;
  padding-right: .25em;
  margin-left: -.25em;
}
</style>
