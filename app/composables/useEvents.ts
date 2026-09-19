import { events } from '~/data/events'
export function useEvents() {
  const now = useState('event-clock', () => Date.now())
  let timer: ReturnType<typeof setInterval> | undefined
  onMounted(() => { now.value = Date.now(); timer = setInterval(() => { now.value = Date.now() }, 60000) })
  onUnmounted(() => { if (timer) clearInterval(timer) })
  const upcoming = computed(() => events.filter(e => new Date(e.endsAt).getTime() >= now.value).sort((a,b) => Date.parse(a.startsAt) - Date.parse(b.startsAt)))
  const past = computed(() => events.filter(e => new Date(e.endsAt).getTime() < now.value).sort((a,b) => Date.parse(b.startsAt) - Date.parse(a.startsAt)))
  return { upcoming, past, next: computed(() => upcoming.value[0]), now }
}
