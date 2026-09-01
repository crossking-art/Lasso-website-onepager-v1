import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    react(),
    sanity({
      projectId: 'o0f2dxt7',
      dataset: 'production',
      // Embedded Studio bereikbaar op /studio, zodat de klant daar kan inloggen en content bewerken
      studioBasePath: '/studio',
      useCdn: false,
    }),
  ],
});
