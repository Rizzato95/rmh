import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2026-09-19',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  app: { head: { htmlAttrs: { lang: 'it' }, title: 'RMH Run Club — Push your horses', meta: [{ name: 'description', content: 'Restera Mad Horses. La community di Treviso che corre, si incontra e si diverte. Scopri il prossimo evento e unisciti a noi.' }, { name: 'theme-color', content: '#ed171f' }], link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }] } },
  nitro: { prerender: { crawlLinks: true } }
})
