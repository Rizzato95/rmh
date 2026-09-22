<script setup lang="ts">
import { events, eventDate } from '~/data/events'
const route = useRoute()
const event = events.find(e => e.slug === route.params.slug)
if (!event) throw createError({ statusCode: 404, statusMessage: 'Evento non trovato' })
const { now } = useEvents()
const isPast = computed(() => Date.parse(event.endsAt) < now.value)
const mapsUrl = event.address ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.venue + ', ' + event.address)}` : null
const eventDescription = `${event.title}: ${event.subtitle}. ${eventDate(event.startsAt, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} a ${event.venue}${event.city ? `, ${event.city}` : ''}. ${event.price === 0 ? 'Partecipazione gratuita.' : ''}`

usePageSeo({
  title: `${event.title} – ${eventDate(event.startsAt)} | RMH Run Club`,
  description: eventDescription,
  image: event.cover,
  imageAlt: `Locandina ${event.title}, RMH Run Club`,
  type: 'article',
})

useSchemaOrg([
  defineEvent({
    name: event.title,
    description: event.description,
    startDate: event.startsAt,
    endDate: event.endsAt,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: definePlace({
      name: event.venue,
      address: event.address
        ? defineAddress({
            streetAddress: event.address,
            addressLocality: event.city || 'Treviso',
            addressCountry: 'IT',
          })
        : undefined,
    }),
    organizer: event.organizers.map((name) => defineOrganization({ name })),
    image: event.cover,
    offers: !isPast.value
      ? defineOffer({
          price: event.price ?? 0,
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
          url: `/eventi/${event.slug}`,
        })
      : undefined,
  }),
])
</script>
<template><article v-if="event" class="event-detail section-pad"><NuxtLink to="/eventi" class="back-link" v-reveal>← Tutti gli eventi</NuxtLink><div class="detail-grid"><div class="detail-poster" v-reveal><img :src="event.cover" :alt="`Locandina ${event.title}`" fetchpriority="high" width="1000" height="1250"></div><div class="detail-content"><div class="event-labels" v-reveal><span class="eyebrow">{{ isPast ? 'Ci siamo stati / Evento passato' : 'Il prossimo appuntamento' }}</span><span v-if="event.price === 0" class="free-label">Partecipazione gratuita</span></div><h1 v-reveal="80">{{ event.title }}<span class="red">.</span></h1><p class="event-subtitle" v-reveal>{{ event.subtitle }}</p><dl class="event-facts"><div v-reveal><dt>Data</dt><dd>{{ eventDate(event.startsAt, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) }}</dd></div><div v-reveal><dt>Luogo</dt><dd>{{ event.venue }}<span v-if="event.address">{{ event.address }}</span><a v-if="mapsUrl" :href="mapsUrl" target="_blank" rel="noopener noreferrer" class="text-link">Apri in Google Maps <AppIcon name="arrow-up-right" /></a></dd></div><div v-reveal v-if="event.price === 0"><dt>Iscrizione</dt><dd>Gratuita<span>La partecipazione all’evento è gratuita.</span></dd></div></dl><a v-if="!isPast && event.registrationUrl" :href="event.registrationUrl" target="_blank" rel="noopener noreferrer" class="button button-red register-button" v-reveal>Iscriviti gratis <span aria-hidden="true"><AppIcon name="arrow-up-right" /></span></a><p v-if="!isPast && event.registrationUrl" class="form-note" v-reveal>Iscrizione tramite Google Forms.</p><p v-if="isPast" class="past-note" v-reveal>Questo evento si è concluso. <NuxtLink to="/eventi">Scopri i prossimi appuntamenti <AppIcon name="arrow-up-right" /></NuxtLink></p></div></div><div class="detail-lower"><section><p class="eyebrow">L’idea è semplice</p><h2 v-reveal>Muoversi.<br>Ritrovarsi.<br><em>Stare bene.</em></h2><p class="description" v-reveal>{{ event.description }}</p><div v-if="event.groups" class="groups"><div v-reveal v-for="group in event.groups" :key="group.distance"><strong>{{ group.distance }}</strong><span>{{ group.label }}</span><small v-if="group.pace">{{ group.pace }}</small></div></div></section><div><section class="program"><p class="eyebrow">Il programma</p><div v-for="(item, index) in event.program" :key="item.title" class="program-item" v-reveal="(index % 3) * 70"><span>{{ item.time || String(index + 1).padStart(2, '0') }}</span><div><h3>{{ item.title }}</h3><p>{{ item.detail }}</p></div></div></section><section class="organizers" v-reveal><p class="eyebrow">Insieme a</p><div><span v-for="organizer in event.organizers" :key="organizer">{{ organizer }}</span></div></section></div></div><section v-if="event.gallery.length" class="event-gallery"><h2 v-reveal>Com’è andata.</h2><PhotoGallery :photos="event.gallery" /></section><div v-if="!isPast && event.registrationUrl" class="mobile-register"><span>{{ eventDate(event.startsAt, { day: 'numeric', month: 'long' }) }} <b>{{ event.price === 0 ? 'Gratis' : 'Partecipa' }}</b></span><a :href="event.registrationUrl" target="_blank" rel="noopener noreferrer">Iscriviti <AppIcon name="arrow-up-right" /></a></div></article></template>
