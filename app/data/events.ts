export interface ClubEvent {
  slug: string; title: string; subtitle: string; startsAt: string; endsAt: string;
  cover: string; venue: string; city?: string; address?: string; organizers: string[];
  description: string; registrationUrl?: string; price?: number;
  program: { time?: string; title: string; detail: string }[];
  groups?: { distance: string; label: string; pace?: string }[];
  gallery: { src: string; alt: string }[];
}
export const events: ClubEvent[] = [
  { slug: 'coffee-beats-settembre-2026', title: 'Coffee Beats', subtitle: 'Social run, breakfast & club', startsAt: '2026-09-26T09:45:00+02:00', endsAt: '2026-09-26T23:59:59+02:00', cover: '/images/coffee-september.webp', venue: 'Filò', city: 'Treviso', address: 'Viale Cadorna 8, Treviso', organizers: ['RMH Run Club', 'Disco Break', 'Alpro', 'Filò'], price: 0,
    registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSck70ZV0s6-aGu1Yb-RywQS7QphJqlVjvbz41K8W1cTdrKDNQ/viewform',
    description: 'Ci vediamo da Filò per iniziare il sabato insieme. Prima una social run, ognuno al proprio passo. Poi ci ritroviamo per colazione, musica e soft clubbing con il DJ. Non importa quanti chilometri hai nelle gambe: porta la tua voglia di esserci.',
    program: [{ time: '09:45', title: 'Si parte insieme', detail: 'Social run e camminata, con tre gruppi tra cui scegliere.' }, { time: '10:30', title: 'Coffee, breakfast & club', detail: 'Il post-run continua da Filò, tra colazione e DJ set.' }],
    groups: [{ distance: '3 km', label: 'Camminata' }, { distance: '5 km', label: 'Corsa easy', pace: '6:00–6:30 min/km' }, { distance: '7 km', label: 'Corsa media', pace: '5:30 min/km' }], gallery: [] },
  { slug: 'all-in-move-settembre-2026', title: 'All in Move', subtitle: 'Train · Run · Brunch', startsAt: '2026-09-13T00:00:00+02:00', endsAt: '2026-09-13T23:59:59+02:00', cover: '/images/all-in-move.webp', venue: 'Lancenigo (TV)', organizers: ['RMH Run Club', 'Vitamina'], description: 'Una giornata dedicata al movimento e allo stare insieme a Lancenigo: yoga e functional training, social run di 5 km, brunch e DJ set.', program: [{ title: 'Train', detail: 'Yoga e functional training.' }, { title: 'Run', detail: 'Social run di 5 km.' }, { title: 'Brunch', detail: 'Il momento di ritrovarsi, con il DJ set.' }], gallery: [] },
  { slug: 'coffee-beats-maggio-2026', title: 'Coffee Beats', subtitle: 'Deejay Ten After Run', startsAt: '2026-05-23T09:45:00+02:00', endsAt: '2026-05-23T23:59:59+02:00', cover: '/images/coffee-may.webp', venue: 'Filò', city: 'Treviso', address: 'Viale Cadorna 8, Treviso', organizers: ['Disco Break', 'RMH Run Club', 'Filò'], description: 'Corsa, colazione e musica: Coffee Beats porta a Treviso la voglia di ritrovarsi dopo la Deejay Ten. Una social run e un post-run da vivere insieme.', program: [{ time: '09:45', title: 'Social run', detail: 'Si corre insieme.' }, { time: '10:30', title: 'Breakfast & club', detail: 'Colazione e musica da Filò.' }], gallery: [] }
]
export const communityPhotos = [
  { src: '/images/crew.webp', alt: 'Il gruppo RMH sorride sotto la bandiera del run club' },
  { src: '/images/running.webp', alt: 'I runner RMH corrono insieme portando la bandiera' },
  { src: '/images/flag.webp', alt: 'La bandiera RMH tra i partecipanti' },
  { src: '/images/jersey.webp', alt: 'Il logo Restera Mad Horses sulla maglia del club' }
]
export const eventDate = (date: string, options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }) => new Intl.DateTimeFormat('it-IT', { ...options, timeZone: 'Europe/Rome' }).format(new Date(date))
