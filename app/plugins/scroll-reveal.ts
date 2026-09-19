import type { ObjectDirective } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) {
    nuxtApp.vueApp.directive('reveal', {
      // Match the client-side initial state so SSR content never flashes before
      // hydration starts its reveal animation.
      getSSRProps: () => ({ class: 'reveal-pending' }),
    })
    return
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  const pending = new Map<HTMLElement, number>()
  const animations = new Map<HTMLElement, Animation>()
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) reveal(entry.target as HTMLElement)
    }
  }, { threshold: 0.08 }) : null

  function reveal(element: HTMLElement, immediate = false) {
    const delay = pending.get(element) ?? 0
    pending.delete(element)
    observer?.unobserve(element)
    element.classList.remove('reveal-pending')
    if (immediate || reducedMotion.matches || !element.animate) return
    const animation = element.animate([
      { opacity: 0, translate: '0 26px' },
      { opacity: 1, translate: '0 0' },
    ], { duration: 650, delay, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'backwards' })
    animations.set(element, animation)
    animation.onfinish = () => animations.delete(element)
  }

  function onPreferenceChange() {
    if (!reducedMotion.matches) return
    for (const element of pending.keys()) reveal(element, true)
    for (const animation of animations.values()) animation.cancel()
    animations.clear()
  }
  function onFocus(event: FocusEvent) {
    if (!(event.target instanceof Element)) return
    let element = event.target.closest<HTMLElement>('[data-reveal]')
    while (element) {
      if (pending.has(element)) reveal(element, true)
      animations.get(element)?.cancel()
      animations.delete(element)
      element = element.parentElement?.closest<HTMLElement>('[data-reveal]') ?? null
    }
  }
  reducedMotion.addEventListener('change', onPreferenceChange)
  document.addEventListener('focusin', onFocus)

  const directive: ObjectDirective<HTMLElement, number | undefined> = {
    getSSRProps: () => ({}),
    mounted(element, binding) {
      element.dataset.reveal = ''
      // The server renders everything visible. Motion is progressive enhancement.
      if (!observer || reducedMotion.matches) return
      const rect = element.getBoundingClientRect()
      if (rect.bottom <= 0) return
      pending.set(element, Math.min(Math.max(Number(binding.value) || 0, 0), 240))
      element.classList.add('reveal-pending')
      observer.observe(element)
    },
    unmounted(element) {
      observer?.unobserve(element)
      pending.delete(element)
      animations.get(element)?.cancel()
      animations.delete(element)
    },
  }
  nuxtApp.vueApp.directive('reveal', directive)
  if (import.meta.hot) import.meta.hot.dispose(() => {
    for (const element of pending.keys()) reveal(element, true)
    observer?.disconnect()
    for (const animation of animations.values()) animation.cancel()
    reducedMotion.removeEventListener('change', onPreferenceChange)
    document.removeEventListener('focusin', onFocus)
  })
})
