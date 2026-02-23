'use client'

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import CtaLink from '@/components/CtaLink'

type Plan = {
  name: string
  price: string
  credits: string
  highlight?: boolean
  badge?: string
  features: string[]
}

const plans: Plan[] = [
  {
    name: 'Starter',
    price: '€49',
    credits: '1.000 crediti / mese',
    features: ['Ricerca base', 'Export CSV', 'Supporto email'],
  },
  {
    name: 'PRO',
    price: '€99',
    credits: '2.500 crediti / mese',
    highlight: true,
    badge: 'Più venduto',
    features: [
      'Ricerca iper-localizzata',
      'Telefoni mobile verificati',
      'Email decision maker',
      'Export CSV/Excel',
      'Priorità supporto',
    ],
  },
  {
    name: 'Agency',
    price: '€249',
    credits: '10.000 crediti / mese',
    features: ['Tutto del PRO', 'Team & permessi', 'Integrazioni', 'Supporto dedicato'],
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full bg-slate-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Scegli il tuo arsenale
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Tre pacchetti chiari. Upgrade quando vuoi.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={
                p.highlight
                  ? 'rounded-3xl bg-white border border-transparent shadow-2xl p-[1px] bg-gradient-to-br from-violet-300/60 via-blue-300/50 to-slate-200/40'
                  : 'rounded-3xl border border-slate-200 bg-white shadow-sm'
              }
            >
              <div className={p.highlight ? 'rounded-3xl bg-white p-8 h-full' : 'p-8 h-full'}>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-slate-900">{p.name}</div>
                  {p.badge ? (
                    <Badge className="bg-violet-100 text-violet-700 border border-violet-200">
                      {p.badge}
                    </Badge>
                  ) : null}
                </div>

                <div className="mt-6">
                  <div className="text-5xl font-bold tracking-tight text-slate-900">{p.price}</div>
                  <div className="mt-2 text-slate-600">{p.credits}</div>
                </div>

                <div className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-start gap-3 text-slate-700">
                      <div className="h-6 w-6 rounded-full bg-green-100 border border-green-200 flex items-center justify-center mt-0.5">
                        <Check className="h-4 w-4 text-green-700" />
                      </div>
                      <div className="leading-relaxed">{f}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button
                    asChild
                    className={
                      p.highlight
                        ? 'w-full h-12 text-base bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 shadow-lg transition-all cta-glow-hover'
                        : 'w-full h-12 text-base'
                    }
                    variant={p.highlight ? 'default' : 'outline'}
                  >
                    <CtaLink>Inizia Ora</CtaLink>
                  </Button>
                </div>

                <div className="mt-4 text-xs text-slate-500">
                  Nessuna carta richiesta per la demo. Cancella quando vuoi.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
