<script setup lang="ts">
useSeoMeta({
  ogSiteName: 'RMH Run Club',
  ogLocale: 'it_IT',
})
useSchemaOrg([
  defineOrganization({
    name: 'RMH Run Club',
    alternateName: 'Restera Mad Horses',
    description: 'Run club aperto a tutti a Treviso, lungo la Restera.',
    url: '/',
    logo: '/images/logo-white.png',
    areaServed: { '@type': 'City', name: 'Treviso' },
    sameAs: ['https://www.instagram.com/rmh_runclub/'],
  }),
])

const menuOpen = ref(false)
const menuToggle = ref<HTMLButtonElement>()
const menuPanel = ref<HTMLElement>()
const menuClose = ref<HTMLButtonElement>()
const route = useRoute()
const activeHash = ref('')
function isNavActive(to: string) {
  if (to === '/eventi') return route.path === '/eventi' || route.path.startsWith('/eventi/')
  return route.path === '/' && (activeHash.value || '#club') === to.slice(1)
}
watch(() => route.fullPath, () => { activeHash.value = route.hash })
const menuLinks = [
  { to: '/#club', label: 'Il club', number: '01' },
  { to: '/eventi', label: 'Eventi', number: '02' },
  { to: '/#community', label: 'La community', number: '03' },
]
let previousOverflow = ''
let desktopQuery: MediaQueryList | undefined
function closeMenu() { menuOpen.value = false }
function onDesktop(event: MediaQueryListEvent) { if (event.matches) closeMenu() }
function onMenuKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') { event.preventDefault(); closeMenu(); return }
  if (event.key !== 'Tab') return
  const items = menuPanel.value?.querySelectorAll<HTMLElement>('a[href], button')
  if (!items?.length) return
  const first = items[0], last = items[items.length - 1]
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
}
watch(() => route.fullPath, closeMenu)
watch(menuOpen, async (open) => {
  if (!import.meta.client) return
  if (open) {
    previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    await nextTick()
    menuClose.value?.focus()
  } else {
    document.body.style.overflow = previousOverflow
    menuToggle.value?.focus({ preventScroll: true })
  }
})
onMounted(() => {
  activeHash.value = route.hash
  desktopQuery = window.matchMedia('(min-width: 701px)')
  desktopQuery.addEventListener('change', onDesktop)
})
onBeforeUnmount(() => {
  desktopQuery?.removeEventListener('change', onDesktop)
  if (menuOpen.value) document.body.style.overflow = previousOverflow
})
</script>
<template>
  <div>
    <a class="skip-link" href="#main">Vai al contenuto</a>
    <header class="site-header">
      <NuxtLink to="/" aria-label="RMH Run Club, home" class="brand"><img src="/images/logo-white.png" alt="RMH Run Club" width="180" height="88"></NuxtLink>
      <nav class="desktop-nav" aria-label="Navigazione principale">
        <NuxtLink v-for="link in menuLinks" :key="link.to" :to="link.to" :class="{ 'nav-current': isNavActive(link.to) }" :aria-current="isNavActive(link.to) ? (link.to === '/eventi' ? 'page' : 'location') : false">{{ link.label }}</NuxtLink>
      </nav>
      <a href="https://chat.whatsapp.com/IDH3LhGGmqc4LsCLBkP7YN?mode=gi_t" target="_blank" rel="noopener noreferrer" class="header-cta">Corri con noi <span aria-hidden="true"><AppIcon name="arrow-up-right" /></span></a>
      <button ref="menuToggle" class="menu-toggle" :aria-expanded="menuOpen" aria-controls="mobile-nav" :aria-label="menuOpen ? 'Chiudi menu' : 'Apri menu'" @click="menuOpen = !menuOpen" @keydown.esc="menuOpen = false"><svg class="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true" focusable="false"><path v-if="menuOpen" d="m6 6 12 12M6 18 18 6" /><path v-else d="M3 6h18M3 12h18M3 18h18" /></svg></button>
      <Transition name="mobile-menu">
      <div v-if="menuOpen" ref="menuPanel" class="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu di navigazione" @keydown="onMenuKeydown">
        <div class="mobile-menu-top">
          <NuxtLink to="/" class="brand" aria-label="RMH Run Club, home" @click="closeMenu"><img src="/images/logo-white.png" alt="RMH Run Club" width="180" height="88"></NuxtLink>
          <button ref="menuClose" class="mobile-menu-close" aria-label="Chiudi menu" @click="closeMenu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6" /></svg></button>
        </div>
        <nav id="mobile-nav" class="mobile-menu-links" aria-label="Navigazione mobile">
          <NuxtLink v-for="(link, index) in menuLinks" :key="link.to" :to="link.to" class="mobile-menu-link" :class="{ 'nav-current': isNavActive(link.to) }" :aria-current="isNavActive(link.to) ? (link.to === '/eventi' ? 'page' : 'location') : false" :style="{ '--item-index': index }" @click="closeMenu"><span class="mobile-menu-number">{{ link.number }}</span><span class="mobile-menu-label">{{ link.label }}</span><AppIcon name="arrow-up-right" /></NuxtLink>
        </nav>
        <div class="mobile-menu-bottom"><span>Treviso. Restera. Insieme.</span><a href="https://www.instagram.com/rmh_runclub/" target="_blank" rel="noopener noreferrer">Instagram <AppIcon name="arrow-up-right" /></a></div>
      </div>
    </Transition>
    </header>
    <main id="main" :inert="menuOpen"><NuxtPage /></main>
    <footer class="footer" :inert="menuOpen">
      <div class="footer-top" v-reveal>
        <div>
          <p class="eyebrow">Treviso. Restera. Insieme.</p>
          <p class="footer-motto">Ci vediamo<br>alla prossima <em>run.</em></p>
        </div>
        <a class="round-link" href="https://www.instagram.com/rmh_runclub/" target="_blank" rel="noopener noreferrer" aria-label="Segui RMH Run Club su Instagram"><AppIcon name="arrow-up-right" /></a>
      </div>
      <div class="footer-content" v-reveal>
        <div class="footer-brand">
          <NuxtLink to="/" aria-label="RMH Run Club, home"><img src="/images/logo-white.png" alt="RMH Run Club" width="110" height="54"></NuxtLink>
          <p>Restera Mad Horses<br>Treviso, Italia</p>
        </div>
        <nav class="footer-links" aria-label="Link RMH Run Club">
          <p class="footer-label">Resta in corsa</p>
          <a href="https://www.instagram.com/rmh_runclub/" target="_blank" rel="noopener noreferrer">Instagram <AppIcon name="arrow-up-right" /></a>
          <a href="https://chat.whatsapp.com/IDH3LhGGmqc4LsCLBkP7YN?mode=gi_t" target="_blank" rel="noopener noreferrer">Gruppo WhatsApp <AppIcon name="arrow-up-right" /></a>
        </nav>
        <nav class="footer-links footer-legal" aria-label="Informazioni legali">
          <p class="footer-label">Informazioni</p>
          <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
          <NuxtLink to="/cookie-policy">Cookie Policy</NuxtLink>
        </nav>
      </div>
      <div class="footer-meta" v-reveal>
        <span>© 2026 RMH Run Club</span>
        <p>Made with love by <a href="https://www.marcorizzato.it" target="_blank" rel="noopener noreferrer">Marco Rizzato</a></p>
      </div>
    </footer>
  </div>
</template>
