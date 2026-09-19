<script setup lang="ts">
import { eventDate, type ClubEvent } from '~/data/events'
defineProps<{ event: ClubEvent; past?: boolean; revealDelay?: number; featured?: boolean }>()
</script>
<template>
  <NuxtLink :to="`/eventi/${event.slug}`" class="event-card group" :class="{ 'event-card-featured': featured }" v-reveal="revealDelay">
    <div class="event-card-image"><img :src="event.cover" :alt="`Locandina ${event.title} — ${eventDate(event.startsAt)}`" loading="lazy" width="800" height="1000"><span class="card-tag">{{ past ? 'Evento passato' : event.price === 0 ? 'Partecipazione gratuita' : 'Prossimamente' }}</span><span class="card-arrow" aria-hidden="true"><AppIcon name="arrow-up-right" /></span></div>
    <div class="event-card-copy"><div class="card-meta"><span>{{ eventDate(event.startsAt) }}</span><span>{{ event.venue }}<template v-if="event.city"> · {{ event.city }}</template></span></div><h3>{{ event.title }}</h3><p class="card-subtitle">{{ event.subtitle }}</p><p v-if="featured" class="card-description">{{ event.description }}</p><span class="card-details-link">Scopri l’evento <AppIcon name="arrow-up-right" /></span></div>
  </NuxtLink>
</template>
