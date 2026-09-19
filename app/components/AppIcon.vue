<script setup lang="ts">
defineProps<{ name: 'arrow-up-right' | 'asterisk' }>()
</script>

<template>
  <svg class="app-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
    <path v-if="name === 'arrow-up-right'" d="M5 19 19 5M5 5h14v14" />
    <path v-else d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M5.6 18.4 18.4 5.6" />
  </svg>
</template>
