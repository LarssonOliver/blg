export function usePaginatedPosts(page: Ref<number>, pageSize: number) {
  const key = computed(() => `posts-${page.value}`);

  const { data, pending, error, refresh } = useAsyncData(
    key,
    () =>
      queryCollection("posts")
        .select(
          "title",
          "author",
          "date",
          "description",
          "path",
          "external",
          "externalUrl",
          "language"
        )
        .order("date", "DESC")
        .skip(pageSize * (page.value - 1))
        .limit(pageSize)
        .all(),
    {
      watch: [page],
    }
  );

  const posts = computed(() => data.value || []);

  return {
    posts,
    pending,
    error,
    refresh,
  };
}
