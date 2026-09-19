<script setup lang="ts">
const menuOpen = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { menuOpen.value = false })
</script>
<template>
  <div>
    <a class="skip-link" href="#main">Vai al contenuto</a>
    <header class="site-header">
      <NuxtLink to="/" aria-label="RMH Run Club, home" class="brand"><img src="/images/logo-white.png" alt="RMH Run Club" width="180" height="88"></NuxtLink>
      <nav class="desktop-nav" aria-label="Navigazione principale">
        <NuxtLink to="/#club">Il club</NuxtLink><NuxtLink to="/eventi">Eventi</NuxtLink><NuxtLink to="/#community">La community</NuxtLink>
      </nav>
      <NuxtLink to="/eventi" class="header-cta">Corri con noi <span aria-hidden="true">↗</span></NuxtLink>
      <button class="menu-toggle" :aria-expanded="menuOpen" aria-controls="mobile-nav" :aria-label="menuOpen ? 'Chiudi menu' : 'Apri menu'" @click="menuOpen = !menuOpen">{{ menuOpen ? 'Chiudi −' : 'Menu +' }}</button>
      <nav v-if="menuOpen" id="mobile-nav" class="mobile-nav" aria-label="Navigazione mobile" @keydown.esc="menuOpen = false"><NuxtLink to="/#club">Il club</NuxtLink><NuxtLink to="/eventi">Eventi ↗</NuxtLink><NuxtLink to="/#community">La community</NuxtLink></nav>
    </header>
    <main id="main"><NuxtPage /></main>
    <footer class="footer">
      <div class="footer-top"><div><p class="eyebrow">Treviso. Restera. Insieme.</p><p class="footer-motto">Ci vediamo<br>alla prossima <em>run.</em></p></div><a class="round-link" href="https://www.instagram.com/rmh_runclub/" target="_blank" rel="noopener noreferrer" aria-label="Segui RMH Run Club su Instagram">↗</a></div>
      <div class="footer-bottom"><img src="/images/logo-white.png" alt="RMH Run Club" width="110" height="54"><span>Restera Mad Horses · Treviso</span><a href="https://www.instagram.com/rmh_runclub/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><span>Push your horses.</span></div>
    </footer>
  </div>
</template>
