<script setup lang="ts">
import { communityPhotos, eventDate } from '~/data/events'
const { next } = useEvents()
useSeoMeta({ title: 'RMH Run Club — Push your horses', description: 'Restera Mad Horses: social run, nuove amicizie e voglia di stare insieme a Treviso. Un run club aperto a tutti. Scopri il prossimo evento.' })
</script>
<template>
  <div>
    <section class="hero">
      <img class="hero-photo" src="/images/running.webp" alt="I Restera Mad Horses in corsa con la bandiera del club" fetchpriority="high" width="1200" height="1600">
      <div class="hero-shade"></div>
      <div class="hero-content"><p class="eyebrow hero-eyebrow"><span class="little-cross">✳</span> Restera Mad Horses · Treviso</p><h1>Push your<br><em>horses.</em><span class="hero-star" aria-hidden="true">↗</span></h1><div class="hero-bottom"><p>Un passo fuori. Un gruppo di amici.<br>La Restera è il nostro punto di partenza.</p><a class="button button-red" href="#next-event">Il prossimo evento <span aria-hidden="true">↗</span></a></div></div>
      <div class="hero-side" aria-hidden="true">RUN TOGETHER. STAY TOGETHER.</div>
      <div class="hero-caption"><span>45°40′ N &nbsp; 12°15′ E</span><a href="#club">Scopri RMH ↓</a></div>
    </section>
    <div class="ticker" aria-hidden="true"><div><span>Social run</span><b>✳</b><span>Good people</span><b>✳</b><span>Push your horses</span><b>✳</b><span>Treviso</span><b>✳</b><span>Social run</span><b>✳</b><span>Good people</span><b>✳</b><span>Push your horses</span><b>✳</b><span>Treviso</span><b>✳</b></div></div>
    <section id="club" class="club-section section-pad">
      <div class="section-index"><span class="eyebrow">01 / Il club</span><span>Un posto anche per te.</span></div>
      <div class="club-grid"><h2>Il bello è<br>farlo <em>insieme.</em></h2><div class="club-copy"><p class="lead">Siamo i Restera Mad Horses.<br>Corriamo a Treviso, lungo la Restera.<br>E ci piace tutto quello che viene dopo.</p><p>Ci troviamo circa ogni due settimane per una social run: un’occasione per muoversi, conoscere persone e vivere la città. Puoi venire anche se sei alla tua prima corsa. Per le uscite abituali non servono prenotazioni: scopri il prossimo ritrovo su Instagram e raggiungici.</p><a class="text-link" href="https://www.instagram.com/rmh_runclub/" target="_blank" rel="noopener noreferrer">Seguici su Instagram ↗</a></div></div>
      <div class="club-values"><div><span>01</span><h3>Adatto a tutti.</h3><p>La voglia di esserci conta più del cronometro.</p></div><div><span>02</span><h3>Di casa in Restera.</h3><p>Il nostro punto d’incontro, a due passi da Treviso.</p></div><div><span>03</span><h3>Oltre la corsa.</h3><p>Due chiacchiere, un brindisi, una nuova amicizia.</p></div></div>
    </section>
    <section id="next-event" class="next-section section-pad">
      <div class="section-index"><span class="eyebrow">02 / Next event</span><NuxtLink to="/eventi" class="text-link">Tutti gli eventi ↗</NuxtLink></div>
      <div v-if="next" class="next-grid"><NuxtLink :to="`/eventi/${next.slug}`" class="next-poster"><img :src="next.cover" :alt="`Locandina ${next.title}`" loading="lazy" width="1000" height="1250"></NuxtLink><div class="next-copy"><div class="event-labels"><span class="pill">{{ eventDate(next.startsAt, { weekday: 'long', day: 'numeric', month: 'long' }) }}</span><span v-if="next.price === 0" class="free-label">Ingresso gratuito</span></div><h2>{{ next.title }}<span class="red">.</span></h2><p class="event-subtitle">{{ next.subtitle }}</p><p>{{ next.description }}</p><div class="next-info"><div><span>Dove</span><strong>{{ next.venue }} · Treviso</strong><small>{{ next.address }}</small></div><div><span>Quando</span><strong>{{ next.program[0]?.time || eventDate(next.startsAt, { day: 'numeric', month: 'long' }) }}</strong><small>{{ next.program[0]?.title }}</small></div></div><NuxtLink :to="`/eventi/${next.slug}`" class="button button-red">Scopri l’evento <span aria-hidden="true">↗</span></NuxtLink></div></div>
      <div v-else class="empty-next"><h2>La prossima?<br>Sta arrivando<span class="red">.</span></h2><p>Seguici su Instagram per scoprire il prossimo appuntamento.</p><a class="button button-red" href="https://www.instagram.com/rmh_runclub/" target="_blank" rel="noopener noreferrer">Seguici su Instagram ↗</a></div>
    </section>
    <section id="community" class="community-section section-pad"><div class="section-index"><span class="eyebrow">03 / La community</span><span>@rmh_runclub</span></div><div class="community-heading"><h2>Stessa voglia.<br><em>Storie diverse.</em></h2><p>Ci si incontra per correre.<br>Si torna per le persone.</p></div><PhotoGallery :photos="communityPhotos" /></section>
    <section class="manifesto"><span class="eyebrow">Restera Mad Horses</span><p>Il tuo passo.<br>La nostra <em>crew.</em></p><a class="button button-dark" href="https://www.instagram.com/rmh_runclub/" target="_blank" rel="noopener noreferrer">Entra nel mondo RMH ↗</a></section>
  </div>
</template>
