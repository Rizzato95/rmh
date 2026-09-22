<script setup lang="ts">
const { upcoming, past } = useEvents()
usePageSeo({
  title: 'Eventi e social run a Treviso',
  description: 'Scopri i prossimi social run e gli eventi dei Restera Mad Horses a Treviso, oppure rivivi gli appuntamenti passati.',
  image: '/images/coffee-september.webp',
  imageAlt: 'Coffee Beats, un evento di RMH Run Club a Treviso',
})
</script>
<template><div class="events-page section-pad"><div class="page-intro" v-reveal><p class="eyebrow">Il calendario RMH</p><h1>Ci vediamo <em>qui.</em></h1><p>Social run, collaborazioni e momenti da condividere.<br>Segna la data. Al resto pensiamo insieme.</p></div><section class="event-list-section"><div class="list-heading" v-reveal><h2>Prossimi eventi</h2><span>{{ String(upcoming.length).padStart(2, '0') }}</span></div><div v-if="upcoming.length" class="event-grid upcoming-grid"><EventCard featured v-for="(event, index) in upcoming" :reveal-delay="(index % 3) * 90" :key="event.slug" :event="event" /></div><div v-else class="empty-list" v-reveal><p>Stiamo preparando il prossimo appuntamento.</p><a class="text-link" href="https://www.instagram.com/rmh_runclub/" target="_blank" rel="noopener noreferrer">Scoprilo su Instagram <AppIcon name="arrow-up-right" /></a></div></section><section class="event-list-section"><div class="list-heading" v-reveal><h2>C’eravamo anche noi.</h2><span>Eventi passati / {{ String(past.length).padStart(2, '0') }}</span></div><div class="event-grid"><EventCard v-for="(event, index) in past" :reveal-delay="(index % 3) * 90" :key="event.slug" :event="event" past /></div></section></div></template>
