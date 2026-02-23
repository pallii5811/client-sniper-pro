'use client'

import {
  ShieldAlert,
  Smartphone,
  Fingerprint,
  Zap,
  Instagram,
  Activity,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'

type IntelligenceCard = {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  badge?: {
    label: string
    variant: 'emerald' | 'violet'
  }
}

const cards: IntelligenceCard[] = [
  {
    title: 'Meta & TikTok Pixel',
    description:
      "Scopri istantaneamente se l’azienda sta già investendo in advertising o se è un terreno vergine.",
    icon: Zap,
    badge: { label: 'BUYING SIGNAL', variant: 'emerald' },
  },
  {
    title: 'Tracciamenti & GTM',
    description:
      'Verifica la presenza di Google Tag Manager, Analytics e infrastrutture dati avanzate.',
    icon: Fingerprint,
  },
  {
    title: 'Sicurezza SSL',
    description:
      'Intercetta siti web “Non Sicuri” e vendi immediatamente certificati o restyling web.',
    icon: ShieldAlert,
    badge: { label: 'PREMIUM', variant: 'violet' },
  },
  {
    title: 'Mobile Responsiveness',
    description:
      'L’algoritmo rileva se il sito è ottimizzato per smartphone o se necessita di un rifacimento urgente.',
    icon: Smartphone,
  },
  {
    title: 'Social & Instagram',
    description:
      'Estrazione diretta dei profili social collegati per un approccio multicanale.',
    icon: Instagram,
  },
  {
    title: 'Tech Stack & Error Status',
    description:
      'Analisi dei codici di risposta (200, 404, 500) e della tecnologia del sito.',
    icon: Activity,
  },
]

function PremiumBadge({ badge }: { badge: NonNullable<IntelligenceCard['badge']> }) {
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

export default function IntelligenceSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute -bottom-44 -right-40 h-[560px] w-[560px] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.65)]" />
            Intelligence & Buying Signals
          </div>

          <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight">
            Molto più di un contatto. Vera Intelligence B2B.
          </h2>
          <p className="mt-4 text-lg text-white/75 leading-relaxed">
            Client Sniper analizza l’infrastruttura tecnologica dei tuoi lead in tempo reale.
            Trova i punti deboli delle aziende prima ancora di chiamarle.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-7 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.8)] hover:bg-white/7 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-600/70 to-blue-600/70 flex items-center justify-center ring-1 ring-white/15 shadow-[0_0_35px_rgba(124,58,237,0.25)]">
                  <c.icon className="h-6 w-6 text-white" />
                </div>
                {c.badge ? <PremiumBadge badge={c.badge} /> : null}
              </div>

              <div className="mt-5 text-lg font-bold text-white">{c.title}</div>
              <div className="mt-2 text-white/70 leading-relaxed">{c.description}</div>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-violet-400/40 via-blue-400/30 to-transparent" />
              <div className="mt-4 text-sm text-white/60">
                Output pronto per vendere: &quot;pixel presente&quot; • &quot;SSL scaduto&quot; • &quot;mobile non ottimizzato&quot;
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
