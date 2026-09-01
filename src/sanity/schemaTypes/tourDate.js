export default {
  name: 'tourDate',
  title: 'Optreden',
  type: 'document',
  fields: [
    { name: 'date', title: 'Datum', type: 'date' },
    { name: 'name', title: 'Naam optreden', type: 'string' },
    { name: 'venue', title: 'Locatie', type: 'string' },
    { name: 'city', title: 'Stad', type: 'string' },
    {
      name: 'ticketUrl',
      title: 'Tickets-link',
      type: 'url',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    },
  ],
  orderings: [
    {
      title: 'Datum, oplopend',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
  ],
}
