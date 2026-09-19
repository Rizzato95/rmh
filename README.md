# RMH Run Club

Sito in italiano per Restera Mad Horses, realizzato con Nuxt 4, Vue 3 e Tailwind CSS 4. Nessun database o servizio di tracciamento. Le iscrizioni agli eventi vengono gestite tramite un link esterno a Google Forms.

## Sites

Il progetto è collegato a Sites tramite `.openai/hosting.json`. I sorgenti sono nella radice di questa cartella, non in `outputs/`. La configurazione indica `.output/public` come output statico Nuxt.

La pubblicazione avviene tramite il plugin Sites: build, push del commit esatto al repository sorgente Sites, salvataggio della versione con il pacchetto statico e deploy. Le credenziali temporanee vengono gestite dal connettore e non vanno salvate nel progetto. Le nuove pubblicazioni partono con accesso privato del proprietario.

## Avvio

Richiede Node.js 22.12+ o 24. Per installare e avviare:

```sh
npm ci
npm run dev
```

Per generare il sito statico:

```sh
npm run build
```

Output: `.output/public`. `netlify.toml` configura già comando e directory per Netlify. Collegare il repository a Netlify per ricompilare ad ogni aggiornamento dei contenuti. Il pacchetto statico separato può anche essere caricato su Netlify tramite deploy manuale.

## Contenuti

- `app/data/events.ts`: eventi, organizzatori, programma, gruppi opzionali, costo, iscrizione e galleria per singolo evento. Gli slug devono essere univoci; gli orari includono il fuso locale esplicitamente.
- `public/images`: fotografie e locandine ottimizzate in WebP; logo derivato dagli originali forniti.
- `app/pages/index.vue`: presentazione del club, prossimo evento e fotografie della community. Nessun gruppo o distanza standard nella presentazione del club.
- `app/pages/eventi/index.vue`: calendario dei soli eventi speciali e archivio.
- `app/pages/eventi/[slug].vue`: pagina evento con Maps, programma e iscrizione. Per gli eventi passati l’iscrizione non è mostrata.
- `app/assets/css/main.css`: stile responsive, componenti, animazioni, gestione di movimento ridotto.

### Aggiungere un evento

Inserire una nuova voce in `events` rispettando il tipo `ClubEvent`, copiare la copertina in `public/images` e compilare. `price: 0` indica la gratuità. `registrationUrl` è opzionale, così come `groups`, `address` e gli orari del programma. `endsAt` determina quando l’evento passa in archivio: impostare la chiusura effettiva o la fine della giornata. Gli eventi di partenza hanno una fine convenzionale a fine giornata, non un orario pubblico di conclusione.

Il prossimo evento viene scelto automaticamente tra quelli non conclusi, ordinati per data. L’orologio si aggiorna all’apertura della pagina e ogni minuto. L’HTML prerenderizzato riflette la data della build; il browser aggiorna la classificazione dopo l’avvio di Vue. Per aggiornare anche il contenuto iniziale dei motori di ricerca al cambio di data, ricompilare il sito o introdurre in futuro un deploy pianificato/SSR.

### Fotografie degli eventi passati

Le fotografie fornite sono nella galleria della community. Non sono state associate arbitrariamente a uno dei due eventi passati. Dopo aver identificato le foto di un evento, aggiungerle al suo array `gallery` come `{ src: '/images/nome.webp', alt: 'Descrizione della foto' }`: la galleria nella pagina evento apparirà automaticamente.

### Evoluzione futura

Il modello degli eventi è separato dalla presentazione. Si può sostituire la sorgente locale con un’API/CMS e aggiungere una pagina di gestione protetta mantenendo le pagine esistenti. Autenticazione, caricamento immagini e autorizzazioni di scrittura andranno progettati in quel momento; nessun backend è richiesto dalla versione attuale.

## Verifica di questa consegna

- Build statica Nuxt completata; generate home, calendario e tre pagine evento.
- Verificati asset locali, collegamenti interni e dati principali dell’evento gratuito.
- Il server locale non si avvia nel sandbox della sessione. La verifica visiva/interattiva in browser non è stata completata. Lo stato della pubblicazione è disponibile nel progetto Sites collegato.
- Le dipendenze sono state installate dalla cache locale, senza download di rete.
