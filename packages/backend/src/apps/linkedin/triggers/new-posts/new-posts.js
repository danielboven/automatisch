const newPosts = async ($) => {
  let next = 0;
  const count = 10;
  let hasMore = true;

  while (hasMore) {
    const params = new URLSearchParams({
      author: $.step.parameters.author,
      q: 'author',
      count: count.toString(),
      sortBy: 'CREATED',
      start: next.toString(),
    });

    const { data } = await $.http.get('/rest/posts', params.toString());

    const elements = data.elements || [];

    for (const post of elements) {
      $.pushTriggerItem({
        raw: post,
        meta: {
          internalId: post.id,
        },
      });
    }

    // Done if elements is less than count
    hasMore = elements.length === count;
    next += count;
  }
};

export default newPosts;
