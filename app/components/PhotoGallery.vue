<script setup lang="ts">
defineProps<{ photos: { src: string; alt: string }[] }>()
const strip = ref<HTMLElement>()
function move(direction: number) { strip.value?.scrollBy({ left: direction * strip.value.clientWidth * .7, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }) }
</script>
<template><div class="photo-gallery"><div class="gallery-controls"><span>Dentro la community</span><div><button aria-label="Foto precedenti" @click="move(-1)">←</button><button aria-label="Foto successive" @click="move(1)">→</button></div></div><div ref="strip" class="photo-strip" tabindex="0" aria-label="Galleria fotografica scorribile"><figure v-for="(photo, i) in photos" :key="photo.src"><img :src="photo.src" :alt="photo.alt" loading="lazy" width="800" height="1066"><figcaption>RMH / {{ String(i + 1).padStart(2, '0') }}</figcaption></figure></div></div></template>
