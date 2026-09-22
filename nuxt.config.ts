import tailwindcss from '@tailwindcss/vite'
import { events } from './app/data/events'

export default defineNuxtConfig({
  compatibilityDate: '2026-09-19',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/seo'],
  vite: { plugins: [tailwindcss()] },
  site: {
    // Set NUXT_PUBLIC_SITE_URL in the hosting environment to the canonical origin.
    url: process.env.NUXT_PUBLIC_SITE_URL || process.env.URL,
    name: 'RMH Run Club',
    defaultLocale: 'it',
    trailingSlash: false,
  },
  sitemap: {
    // The site is deployed statically; generate the sitemap at build time only.
    zeroRuntime: true,
    urls: events.map((event) => `/eventi/${event.slug}`),
  },
  // Page-specific social images are supplied by usePageSeo; no image renderer is needed.
  ogImage: { enabled: false },
  app: {
    head: {
      htmlAttrs: { lang: 'it' },
      title: 'RMH Run Club — Push your horses',
      meta: [
        { name: 'description', content: 'Restera Mad Horses. La community di Treviso che corre, si incontra e si diverte. Scopri il prossimo evento e unisciti a noi.' },
        { name: 'theme-color', content: '#ed171f' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    },
  },
  nitro: {
    prerender: { crawlLinks: true },
  },
})
