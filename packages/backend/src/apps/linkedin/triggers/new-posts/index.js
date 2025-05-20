import defineTrigger from '../../../../helpers/define-trigger.js';
import newPosts from './new-posts.js';

export default defineTrigger({
  name: 'New posts',
  key: 'newPosts',
  pollInterval: 15,
  description: 'Triggers when a new post is created',
  arguments: [
    {
      label: 'Author',
      key: 'author',
      type: 'string',
      description: 'Enter the URN (ID) of the author/organization, including urn:li:',
      required: true,
    },
    {
      label: 'Which types of posts should this trigger on?',
      key: 'postType',
      type: 'dropdown',
      description: 'Defaults to All posts.',
      required: true,
      variables: false,
      value: 'all',
      options: [
        {
          label: 'All posts',
          value: 'all',
        },
        {
          label: 'Only articles',
          value: 'articles',
        },
      ],
    },
  ],

  async run($) {
    await newPosts($);
  },
});
