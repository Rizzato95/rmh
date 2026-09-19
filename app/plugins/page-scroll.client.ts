export default defineNuxtPlugin(() => {
  const router = useRouter()
  const defaultScrollBehavior = router.options.scrollBehavior

  router.options.scrollBehavior = async (to, from, savedPosition) => {
    const position = await defaultScrollBehavior?.(to, from, savedPosition)
    // Keep Nuxt's timing, anchor offsets and back/forward restoration, but
    // bypass the global smooth scrolling when navigating to another page.
    if (position && to.path !== from.path) {
      return { ...position, behavior: 'instant' }
    }
    return position
  }
})
