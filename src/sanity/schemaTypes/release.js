export default {
  name: 'release',
  title: 'Release',
  type: 'document',
  fields: [
    { name: 'year', title: 'Jaartal', type: 'number' },
    { name: 'title', title: 'Titel', type: 'string' },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: { list: ['Track', 'EP'] },
    },
    {
      name: 'spotifyUrl',
      title: 'Spotify-link',
      type: 'url',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    },
  ],
  orderings: [
    {
      title: 'Jaartal, aflopend',
      name: 'yearDesc',
      by: [{ field: 'year', direction: 'desc' }],
    },
  ],
}
