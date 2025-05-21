const newPosts = async ($) => {
  let next = 0;
  const count = 100;
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
    const posts = elements.filter((post) => {
      const refId = post?.content?.reference?.id;

      if ($.step.parameters.postType === 'articles') {
        return refId?.startsWith('urn:li:linkedInArticle') ?? false;
      }

      return true;
    });

    for (const post of posts) {
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
