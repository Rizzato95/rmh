<script setup lang="ts">defineProps<{ error: { statusCode: number } }>()</script>
<template><div class="error-page"><p class="eyebrow">RMH Run Club / {{ error.statusCode }}</p><h1>Fuori percorso.</h1><p>Questa pagina non è disponibile. Ci ritroviamo alla partenza.</p><a class="button button-red" href="/">Torna alla home <AppIcon name="arrow-up-right" /></a></div></template>
