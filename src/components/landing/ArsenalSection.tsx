'use client'

import {
  MapPinned,
  Smartphone,
  Mail,
  FileSpreadsheet,
  ShieldCheck,
  Sparkles,
  ShieldAlert,
  Fingerprint,
  Zap,
  Instagram,
  Activity,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

type Card = {
  title: string
  description: string
  icon: LucideIcon
  badge?: {
    label: string
    variant: 'emerald' | 'violet'
  }
}

const general: Card[] = [
  {
    icon: MapPinned,
    title: 'Ricerca Iper-Localizzata',
    description: 'Città e categorie per colpire il mercato giusto con precisione chirurgica.',
  },
  {
    icon: Smartphone,
    title: 'Telefoni Cellulari Verificati',
    description: 'Algoritmo proprietario per distinguere mobile da fisso e ridurre sprechi di crediti.',
  },
  {
    icon: Mail,
    title: 'Email dei Decision Maker',
    description: 'Contatti utili, non generici: punta a CEO, Founder, Owner, Head of Sales.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Export CSV/Excel Immediato',
    description: 'Esporta e sincronizza il tuo workflow in pochi secondi.',
  },
  {
    icon: ShieldCheck,
    title: 'Qualità & Compliance',
    description: 'Filtri e verifiche per mantenere il tuo database pulito e affidabile.',
  },
  {
    icon: Sparkles,
    title: 'UX Enterprise',
    description: 'Layout pulito, veloce e pensato per team che lavorano su volumi.',
  },
]

const bentoSpans = [
  'md:col-span-2 md:row-span-1',
  'md:col-span-1 md:row-span-1',
  'md:col-span-1 md:row-span-2',
  'md:col-span-2 md:row-span-1',
  'md:col-span-1 md:row-span-1',
  'md:col-span-1 md:row-span-1',
  'md:col-span-2 md:row-span-1',
  'md:col-span-1 md:row-span-1',
  'md:col-span-1 md:row-span-1',
  'md:col-span-1 md:row-span-2',
  'md:col-span-1 md:row-span-1',
  'md:col-span-2 md:row-span-1',
]

function CardMicroGraphic({ title }: { title: string }) {
  if (title === 'Ricerca Iper-Localizzata') {
    return (
      <div className="mt-6">
        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-3">
          <div className="flex items-center gap-2">
            <div className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-[12px] font-medium text-white/80">
              Centri Sportivi • Milano
            </div>
            <div className="rounded-xl bg-gradient-to-br from-violet-600/80 to-blue-600/80 px-3 py-2 text-[12px] font-semibold text-white shadow-sm transition-all duration-300 group-hover:shadow-[0_0_0_4px_rgba(124,58,237,0.20)] group-hover:brightness-110">
              Search
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between text-[11px] text-white/55">
            <span>Radius</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-medium">5 km</span>
          </div>
        </div>
      </div>
    )
  }

  if (title === 'Telefoni Cellulari Verificati') {
    return (
      <div className="mt-6">
        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
          <div className="flex items-center justify-between">
            <div className="text-[12px] font-semibold text-white/80">Number Type</div>
            <div className="text-[11px] text-white/55">Verified</div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div className="text-[11px] font-medium text-white/50 transition-colors duration-300 group-hover:text-white/40">
              Landline
            </div>
            <div className="relative h-7 w-12 rounded-full bg-white/15 p-1 transition-colors duration-300 group-hover:bg-emerald-400/85">
              <div className="h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-300 group-hover:translate-x-5" />
            </div>
            <div className="text-[11px] font-semibold text-white/65 transition-colors duration-300 group-hover:text-emerald-300">
              Mobile
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between text-[11px]">
            <span className="text-white/55">Confidence</span>
            <span className="font-semibold text-white/75 group-hover:text-emerald-200 transition-colors">98%</span>
          </div>
        </div>
      </div>
    )
  }

  if (title === 'Email dei Decision Maker') {
    return (
      <div className="mt-6">
        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
          <div className="flex items-center justify-between">
            <div className="text-[12px] font-semibold text-white/80">Contacts</div>
            <div className="text-[11px] text-white/55">DM</div>
          </div>
          <div className="mt-3 space-y-2">
            {[
              { n: 'Marco B.', r: 'Founder', s: 'verified' },
              { n: 'Giulia R.', r: 'CEO', s: 'verified' },
              { n: 'Paolo C.', r: 'Head of Sales', s: 'found' },
            ].map((row) => (
              <div
                key={row.n}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2"
              >
                <div>
                  <div className="text-[12px] font-semibold text-white/85">{row.n}</div>
                  <div className="text-[11px] text-white/55">{row.r}</div>
                </div>
                <div
                  className={
                    row.s === 'verified'
                      ? 'rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-200'
                      : 'rounded-full border border-violet-400/25 bg-violet-400/10 px-2 py-0.5 text-[11px] font-semibold text-violet-200'
                  }
                >
                  {row.s === 'verified' ? 'Verified' : 'Found'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (title === 'Export CSV/Excel Immediato') {
    return (
      <div className="mt-6">
        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
          <div className="flex items-center justify-between">
            <div className="text-[12px] font-semibold text-white/80">Export</div>
            <div className="text-[11px] text-white/55">CSV</div>
          </div>
          <div className="mt-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            <div className="flex items-center justify-between">
              <div className="text-[12px] font-medium text-white/80">data_export_oggi.csv</div>
              <div className="rounded-lg bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/85 transition-all duration-300 group-hover:bg-emerald-400/20 group-hover:text-emerald-200">
                Download
              </div>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[18%] rounded-full bg-emerald-400/80 transition-all duration-300 group-hover:w-[88%]" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (title === 'Qualità & Compliance') {
    return (
      <div className="mt-6">
        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
          <div className="flex items-center justify-between">
            <div className="text-[12px] font-semibold text-white/80">Checks</div>
            <div className="text-[11px] text-white/55">GDPR</div>
          </div>
          <div className="mt-3 space-y-2">
            {['Deduplication', 'Email validation', 'Opt-out rules'].map((label, idx) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2"
              >
                <div className="text-[12px] font-medium text-white/70">{label}</div>
                <div
                  className={
                    idx === 1
                      ? 'h-2.5 w-2.5 rounded-full bg-violet-400/85 shadow-[0_0_0_4px_rgba(167,139,250,0.10)] transition-transform duration-300 group-hover:scale-110'
                      : 'h-2.5 w-2.5 rounded-full bg-emerald-400/85 shadow-[0_0_0_4px_rgba(52,211,153,0.10)] transition-transform duration-300 group-hover:scale-110'
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (title === 'UX Enterprise') {
    return (
      <div className="mt-6">
        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
          <div className="flex items-center justify-between">
            <div className="text-[12px] font-semibold text-white/80">Workspace</div>
            <div className="text-[11px] text-white/55">Team</div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {['Leads', 'Lists', 'Signals', 'Exports'].map((t, idx) => (
              <div
                key={t}
                className={
                  idx === 2
                    ? 'rounded-xl border border-violet-400/25 bg-violet-400/10 px-3 py-2 text-[12px] font-semibold text-violet-200 transition-all duration-300 group-hover:shadow-[0_0_0_4px_rgba(167,139,250,0.12)]'
                    : 'rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-[12px] font-semibold text-white/75'
                }
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (title === 'Sicurezza SSL') {
    return (
      <div className="mt-6">
        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-3">
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            <div className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            <div className="ml-1 flex-1 rounded-lg bg-slate-950/40 px-2 py-1">
              <div className="flex items-center gap-2 text-[12px] font-medium">
                <span className="text-white/45 transition-colors duration-300 group-hover:text-emerald-300">https://</span>
                <span className="text-white/80">azienda.it</span>
              </div>
            </div>
            <div className="h-7 w-7 rounded-lg border border-white/10 bg-slate-950/40 flex items-center justify-center">
              <div className="h-3.5 w-3.5 rounded-sm border border-white/35 transition-all duration-300 group-hover:border-emerald-300 group-hover:shadow-[0_0_16px_rgba(52,211,153,0.55)]" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (title === 'Meta & TikTok Pixel') {
    return (
      <div className="mt-6">
        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
          <div className="flex items-center justify-between">
            <div className="text-[12px] font-semibold text-white/80">pixel.ts</div>
            <div className="text-[11px] text-white/55">Injected</div>
          </div>
          <div className="mt-3 rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 font-mono text-[11px] leading-relaxed text-white/70">
            <div>
              <span className="transition-colors duration-300 group-hover:text-violet-200">&lt;script&gt;</span>
              <span className="ml-1 transition-colors duration-300 group-hover:text-emerald-200">fbq</span>
              <span className="text-white/60">(</span>
              <span className="transition-colors duration-300 group-hover:text-amber-200">&apos;track&apos;</span>
              <span className="text-white/60">,</span>
              <span className="ml-1 transition-colors duration-300 group-hover:text-amber-200">&apos;PageView&apos;</span>
              <span className="text-white/60">);</span>
              <span className="ml-1 transition-colors duration-300 group-hover:text-violet-200">&lt;/script&gt;</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.60)] opacity-80 group-hover:opacity-100" />
              <div className="text-[11px] text-white/55 group-hover:text-white/70 transition-colors">Event ready</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (title === 'Tracciamenti & GTM') {
    return (
      <div className="mt-6">
        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
          <div className="flex items-center justify-between">
            <div className="text-[12px] font-semibold text-white/80">Tag Manager</div>
            <div className="text-[11px] text-white/55">Containers</div>
          </div>
          <div className="mt-3 space-y-2">
            {[
              { name: 'GA4', state: 'Active', color: 'emerald' },
              { name: 'Ads', state: 'Active', color: 'violet' },
              { name: 'Events', state: 'Queued', color: 'blue' },
            ].map((r) => (
              <div
                key={r.name}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2"
              >
                <div className="text-[12px] font-semibold text-white/80">{r.name}</div>
                <div
                  className={
                    r.color === 'emerald'
                      ? 'rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-200'
                      : r.color === 'violet'
                        ? 'rounded-full border border-violet-400/25 bg-violet-400/10 px-2 py-0.5 text-[11px] font-semibold text-violet-200'
                        : 'rounded-full border border-blue-400/25 bg-blue-400/10 px-2 py-0.5 text-[11px] font-semibold text-blue-200'
                  }
                >
                  {r.state}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (title === 'Mobile Responsiveness') {
    return (
      <div className="mt-6">
        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
          <div className="flex items-center justify-between">
            <div className="text-[12px] font-semibold text-white/80">Device Preview</div>
            <div className="text-[11px] text-white/55">Mobile</div>
          </div>
          <div className="mt-3 flex items-end gap-3">
            <div className="relative h-16 w-10 rounded-xl border border-white/15 bg-slate-950/60 overflow-hidden">
              <div className="absolute left-1/2 top-1.5 h-1 w-4 -translate-x-1/2 rounded-full bg-white/15" />
              <div className="mt-5 px-2">
                <div className="h-2 rounded bg-white/10 transition-all duration-300 group-hover:bg-violet-400/25" />
                <div className="mt-2 h-2 rounded bg-white/10 transition-all duration-300 group-hover:bg-blue-400/25" />
                <div className="mt-2 h-2 rounded bg-white/10 transition-all duration-300 group-hover:bg-emerald-400/20" />
              </div>
            </div>
            <div className="flex-1 rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="h-2.5 w-24 rounded bg-white/10" />
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-5 rounded-lg bg-white/10 transition-all duration-300 group-hover:bg-white/12"
                    style={{
                      transitionDelay: `${i * 20}ms`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (title === 'Social & Instagram') {
    return (
      <div className="mt-6">
        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
          <div className="flex items-center justify-between">
            <div className="text-[12px] font-semibold text-white/80">@azienda</div>
            <div className="text-[11px] text-white/55">Profile</div>
          </div>
          <div className="mt-3 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-violet-500/70 to-blue-500/60 ring-1 ring-white/10" />
            <div className="flex-1">
              <div className="h-2.5 w-24 rounded bg-white/15" />
              <div className="mt-2 h-2 w-36 rounded bg-white/10" />
            </div>
            <div className="rounded-lg border border-emerald-400/25 bg-emerald-400/10 px-2 py-1 text-[11px] font-semibold text-emerald-200 transition-all duration-300 group-hover:shadow-[0_0_18px_rgba(52,211,153,0.25)]">
              Open
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (title === 'Tech Stack & Error Status') {
    return (
      <div className="mt-6">
        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="text-[12px] font-semibold text-white/80">HTTP</div>
            <div className="text-[11px] text-white/55">Status</div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="rounded-full border border-rose-400/30 bg-rose-400/15 px-2 py-1 text-[11px] font-semibold text-rose-200">404 Not Found</span>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/15 px-2 py-1 text-[11px] font-semibold text-emerald-200 transition-all duration-300 group-hover:shadow-[0_0_22px_rgba(52,211,153,0.25)] group-hover:ring-2 group-hover:ring-emerald-400/30">
              200 OK
            </span>
            <div className="relative ml-auto h-6 w-6">
              <div className="absolute left-0 top-0 h-0 w-0 border-l-[10px] border-l-white/70 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent transition-transform duration-300 group-hover:translate-x-[-22px] group-hover:translate-y-[6px]" />
              <div className="absolute left-0 top-0 h-0 w-0 border-l-[10px] border-l-white/25 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent translate-x-[1px] translate-y-[1px]" />
            </div>
          </div>
          <div className="mt-3 grid grid-cols-6 gap-2">
            {['ok', 'ok', 'warn', 'ok', 'err', 'ok'].map((c, idx) => (
              <div key={idx} className="h-8 rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                <div
                  className={
                    c === 'ok'
                      ? 'h-full w-full bg-gradient-to-t from-emerald-400/35 to-transparent transition-transform duration-300 group-hover:scale-y-110 origin-bottom'
                      : c === 'warn'
                        ? 'h-full w-full bg-gradient-to-t from-amber-400/30 to-transparent transition-transform duration-300 group-hover:scale-y-110 origin-bottom'
                        : 'h-full w-full bg-gradient-to-t from-rose-400/30 to-transparent transition-transform duration-300 group-hover:scale-y-110 origin-bottom'
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return null
}

const intelligence: Card[] = [
  {
    icon: Zap,
    title: 'Meta & TikTok Pixel',
    description:
      "Scopri istantaneamente se l’azienda sta già investendo in advertising o se è un terreno vergine.",
    badge: { label: 'BUYING SIGNAL', variant: 'emerald' },
  },
  {
    icon: Fingerprint,
    title: 'Tracciamenti & GTM',
    description:
      'Verifica la presenza di Google Tag Manager, Analytics e infrastrutture dati avanzate.',
  },
  {
    icon: ShieldAlert,
    title: 'Sicurezza SSL',
    description:
      'Intercetta siti web “Non Sicuri” e vendi immediatamente certificati o restyling web.',
    badge: { label: 'PREMIUM', variant: 'violet' },
  },
  {
    icon: Smartphone,
    title: 'Mobile Responsiveness',
    description:
      'L’algoritmo rileva se il sito è ottimizzato per smartphone o se necessita di un rifacimento urgente.',
  },
  {
    icon: Instagram,
    title: 'Social & Instagram',
    description:
      'Estrazione diretta dei profili social collegati per un approccio multicanale.',
  },
  {
    icon: Activity,
    title: 'Tech Stack & Error Status',
    description:
      'Analisi dei codici di risposta (200, 404, 500) e della tecnologia del sito.',
  },
]

function PremiumBadge({ badge }: { badge: NonNullable<Card['badge']> }) {
  if (badge.variant === 'emerald') {
    return (
      <Badge className="bg-emerald-400/15 text-emerald-200 border border-emerald-400/30">
        {badge.label}
      </Badge>
    )
  }

  return (
    <Badge className="bg-violet-400/15 text-violet-200 border border-violet-400/30">
      {badge.label}
    </Badge>
  )
}

export default function ArsenalSection() {
  const allCards = [...general, ...intelligence]

  return (
    <section id="intelligence" className="relative w-full overflow-hidden bg-slate-950 text-white py-20 md:py-24">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-violet-600/18 blur-3xl" />
        <div className="absolute -bottom-44 -right-40 h-[560px] w-[560px] rounded-full bg-blue-600/18 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.65)]" />
            Intelligence & Buying Signals
          </div>

          <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight">
            Molto più di un contatto. Vera Intelligence B2B.
          </h2>
          <p className="mt-4 text-lg text-white/75 leading-relaxed">
            Client Sniper analizza l&apos;infrastruttura tecnologica dei tuoi lead in tempo reale.
            Trova i punti deboli delle aziende prima ancora di chiamarle.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 auto-rows-[320px] gap-6">
          {allCards.map((c, idx) => (
            <div
              key={c.title}
              className={`group relative rounded-3xl border border-white/10 bg-white/5 p-7 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.85)] hover:bg-white/7 transition-colors overflow-hidden ${bentoSpans[idx]}`}
            >
              <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-violet-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start justify-between gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-600/70 to-blue-600/70 flex items-center justify-center ring-1 ring-white/15 shadow-[0_0_35px_rgba(124,58,237,0.25)]">
                  <c.icon className="h-6 w-6 text-white" />
                </div>
                {c.badge ? <PremiumBadge badge={c.badge} /> : null}
              </div>

              <div className="mt-5 text-lg font-bold text-white">{c.title}</div>
              <div className="mt-2 text-white/70 leading-relaxed">{c.description}</div>

              <CardMicroGraphic title={c.title} />

              <div className="mt-6 h-px w-full bg-gradient-to-r from-violet-400/40 via-blue-400/30 to-transparent" />
              <div className="mt-4 text-sm text-white/60">
                Output pronto per vendere: dati chiari, azionabili e immediati.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
