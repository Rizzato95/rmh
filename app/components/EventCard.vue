<script setup lang="ts">
import { eventDate, type ClubEvent } from '~/data/events'
defineProps<{ event: ClubEvent; past?: boolean }>()
</script>
<template>
  <NuxtLink :to="`/eventi/${event.slug}`" class="event-card group">
    <div class="event-card-image"><img :src="event.cover" :alt="`Locandina ${event.title} — ${eventDate(event.startsAt)}`" loading="lazy" width="800" height="1000"><span class="card-tag">{{ past ? 'Evento passato' : event.price === 0 ? 'Partecipazione gratuita' : 'Prossimamente' }}</span><span class="card-arrow" aria-hidden="true">↗</span></div>
    <div class="card-meta"><span>{{ eventDate(event.startsAt) }}</span><span>{{ event.venue }}</span></div><h3>{{ event.title }}</h3><p>{{ event.subtitle }}</p>
  </NuxtLink>
</template>
