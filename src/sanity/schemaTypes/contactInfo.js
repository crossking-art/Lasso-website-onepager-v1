export default {
  name: 'contactInfo',
  title: 'Contactgegevens',
  type: 'document',
  fields: [
    { name: 'region', title: 'Label (bv. Boekingen)', type: 'string' },
    { name: 'value', title: 'Tekst (bv. e-mailadres)', type: 'string' },
    {
      name: 'link',
      title: 'Link (optioneel, bv. mailto: of social-url)',
      type: 'url',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https', 'mailto'] }),
    },
    {
      name: 'order',
      title: 'Volgorde (laag = eerst)',
      type: 'number',
    },
  ],
  orderings: [
    {
      title: 'Volgorde',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
}
