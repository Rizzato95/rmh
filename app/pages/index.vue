<script setup lang="ts">
import { communityPhotos, eventDate } from '~/data/events'
const { next } = useEvents()
usePageSeo({
  title: 'Run club a Treviso | RMH Run Club',
  description: 'RMH Run Club è la community di Treviso per social run aperte a tutti, lungo la Restera. Corri, incontra persone e scopri il prossimo evento.',
  image: '/images/og-home.jpg',
  imageAlt: 'RMH Run Club — Push your horses',
})
</script>
<template>
  <div>
    <section class="hero">
      <img class="hero-photo" src="/images/running.webp" alt="I Restera Mad Horses in corsa con la bandiera del club" fetchpriority="high" width="1200" height="1600">
      <div class="hero-shade"></div>
      <div class="hero-content"><p class="eyebrow hero-eyebrow" v-reveal><span class="little-cross"><AppIcon name="asterisk" /></span> Restera Mad Horses · Treviso</p><h1 v-reveal="80">Push your<br><em>horses.</em></h1><div class="hero-bottom" v-reveal><p>Si corre meglio in compagnia.<br>Ci vediamo in Restera.</p><a class="button button-red" href="#next-event">Il prossimo evento <span aria-hidden="true"><AppIcon name="arrow-up-right" /></span></a></div></div>
      <div class="hero-side" aria-hidden="true">RUN TOGETHER. STAY TOGETHER.</div>
      <div class="hero-caption" v-reveal><span title="Restera sull’Alzaia del Sile · Via Alzaia 7, Treviso">45.66381° N &nbsp; 12.25906° E</span><a href="#club">Scopri RMH ↓</a></div>
    </section>
    <div class="ticker" aria-hidden="true"><div><span>Social run</span><b><AppIcon name="asterisk" /></b><span>Good people</span><b><AppIcon name="asterisk" /></b><span>Push your horses</span><b><AppIcon name="asterisk" /></b><span>Treviso</span><b><AppIcon name="asterisk" /></b><span>Planare</span><b><AppIcon name="asterisk" /></b><span>Sigari</span><b><AppIcon name="asterisk" /></b><span>Social run</span><b><AppIcon name="asterisk" /></b><span>Good people</span><b><AppIcon name="asterisk" /></b><span>Push your horses</span><b><AppIcon name="asterisk" /></b><span>Treviso</span><b><AppIcon name="asterisk" /></b><span>Planare</span><b><AppIcon name="asterisk" /></b><span>Sigari</span><b><AppIcon name="asterisk" /></b></div></div>
    <section id="club" class="club-section section-pad">
      <div class="section-index" v-reveal><span class="eyebrow">01 / Il club</span><span>Un posto anche per te.</span></div>
      <div class="club-grid"><h2 v-reveal>Il bello è<br>farlo <em>insieme.</em></h2><div class="club-copy"><p class="lead" v-reveal>Siamo i Restera Mad Horses.<br>Corriamo a Treviso, lungo la Restera.<br>E ci piace tutto quello che viene dopo.</p><a class="text-link" v-reveal href="https://www.instagram.com/rmh_runclub/" target="_blank" rel="noopener noreferrer">Seguici su Instagram <AppIcon name="arrow-up-right" /></a></div></div>
      <div class="club-values">
        <article class="value-card" v-reveal><span class="value-number" aria-hidden="true">01</span><div><h3>Adatto a tutti.</h3><p>La voglia di esserci conta più del cronometro.</p></div></article>
        <article class="value-card value-card-dark" v-reveal="90"><span class="value-number" aria-hidden="true">02</span><div><h3>A casa nostra, in Restera</h3><p>Il nostro punto d’incontro, a due passi da Treviso.</p></div></article>
        <article class="value-card value-card-red" v-reveal="180"><span class="value-number" aria-hidden="true">03</span><div><h3>Oltre la corsa.</h3><p>Due chiacchiere, un brindisi, una nuova amicizia.</p></div></article>
      </div>
    </section>
    <section id="next-event" class="next-section section-pad">
      <div class="section-index" v-reveal><span class="eyebrow">02 / Next event</span><NuxtLink to="/eventi" class="text-link">Tutti gli eventi <AppIcon name="arrow-up-right" /></NuxtLink></div>
      <div v-if="next" class="next-grid"><NuxtLink :to="`/eventi/${next.slug}`" :aria-label="`Scopri l’evento ${next.title}`" class="next-poster" v-reveal><img :src="next.cover" :alt="`Locandina ${next.title}`" loading="lazy" width="1000" height="1250"></NuxtLink><div class="next-copy"><div class="event-labels" v-reveal><span class="pill">{{ eventDate(next.startsAt, { weekday: 'long', day: 'numeric', month: 'long' }) }}</span><span v-if="next.price === 0" class="free-label">Ingresso gratuito</span></div><h2 v-reveal>{{ next.title }}<span class="red">.</span></h2><p class="event-subtitle" v-reveal>{{ next.subtitle }}</p><p v-reveal>{{ next.description }}</p><div class="next-info" v-reveal><div><span>Dove</span><strong>{{ next.venue }} · Treviso</strong><small>{{ next.address }}</small></div><div><span>Quando</span><strong>{{ next.program[0]?.time || eventDate(next.startsAt, { day: 'numeric', month: 'long' }) }}</strong><small>{{ next.program[0]?.title }}</small></div></div><div class="next-actions" v-reveal><NuxtLink :to="`/eventi/${next.slug}`" class="button button-dark">Scopri l’evento <span aria-hidden="true"><AppIcon name="arrow-up-right" /></span></NuxtLink><a v-if="next.registrationUrl" :href="next.registrationUrl" target="_blank" rel="noopener noreferrer" class="button button-red">Iscriviti <span aria-hidden="true"><AppIcon name="arrow-up-right" /></span></a></div></div></div>
      <div v-else class="empty-next"><h2 v-reveal>La prossima?<br>Sta arrivando<span class="red">.</span></h2><p>Seguici su Instagram per scoprire il prossimo appuntamento.</p><a class="button button-red" href="https://www.instagram.com/rmh_runclub/" target="_blank" rel="noopener noreferrer">Seguici su Instagram <AppIcon name="arrow-up-right" /></a></div>
    </section>
    <section id="community" class="community-section section-pad"><div class="section-index" v-reveal><span class="eyebrow">03 / La community</span><span>@rmh_runclub</span></div><div class="community-heading"><h2 v-reveal>Stessa voglia.<br><em>Storie diverse.</em></h2><p v-reveal="100">Ci si incontra per correre.<br>Si torna per le persone.</p></div><PhotoGallery :photos="communityPhotos" /></section>
    <section class="manifesto"><span class="eyebrow" v-reveal>Restera Mad Horses</span><p v-reveal>Il tuo passo.<br>La nostra <em>crew.</em></p><a v-reveal class="button button-dark" href="https://www.instagram.com/rmh_runclub/" target="_blank" rel="noopener noreferrer">Entra nel mondo RMH <AppIcon name="arrow-up-right" /></a></section>
  </div>
</template>
