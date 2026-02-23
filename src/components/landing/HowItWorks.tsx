'use client'

import { Crosshair, Radar, BadgeCheck } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Crosshair,
      title: 'Scegli il Target',
      description: 'Categorie + città + filtri: mira solo ai clienti migliori.',
    },
    {
      icon: Radar,
      title: 'Scansione & Audit Tecnico Profondo',
      description:
        'Il motore estrae i contatti e analizza simultaneamente: Meta/TikTok Pixel, Google Tag Manager, sicurezza SSL, ottimizzazione Mobile e profili Instagram/TikTok.',
    },
    {
      icon: BadgeCheck,
      title: 'Lead & Segnali di Acquisto Pronti',
      description:
        'Esporta telefoni cellulari, email dei decision maker e l’analisi tecnica completa. Dati perfetti per chiudere il contratto.',
    },
  ]

  return (
    <section id="come-funziona" className="w-full bg-slate-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Come funziona Client Sniper
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              Un flusso semplice, veloce, e pensato per l’operatività quotidiana dei team B2B.
            </p>

            <div className="mt-8 space-y-4">
              {steps.map((s, idx) => (
                <div key={s.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center shadow-sm">
                      <s.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-slate-500">Step {idx + 1}</div>
                      <div className="text-lg font-bold text-slate-900 mt-1">{s.title}</div>
                      <div className="text-slate-600 mt-1">{s.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="rounded-3xl border border-transparent bg-gradient-to-br from-violet-200/60 via-blue-200/50 to-slate-200/40 p-[1px] shadow-2xl">
              <div className="rounded-3xl bg-white border border-slate-200/60 p-8">
                <video
                  src="/demo-sniper.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
