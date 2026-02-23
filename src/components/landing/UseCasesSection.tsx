'use client'

import { ArrowRight, Crosshair, Users, Search, MailWarning, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CtaLink from '@/components/CtaLink'

export default function UseCasesSection() {
  return (
    <section className="w-full bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between gap-6 flex-col md:flex-row">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
              <Sparkles className="h-4 w-4 text-violet-600" />
              Lead Generation B2B • Segnali pronti da vendere
            </div>
            <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              L&apos;Arsenale per la Lead Generation B2B
            </h2>
            <p className="mt-4 text-lg text-slate-700">
              Una suite pensata per agency: identifica dolore tecnico, reputazione e contatti chiave prima della prima chiamata.
            </p>
          </div>

          <Button
            asChild
            className="h-12 px-7 text-base bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 shadow-lg transition-all cta-glow-hover"
          >
            <CtaLink>
              Provalo Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </CtaLink>
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur p-8 shadow-xl shadow-violet-500/10 hover:shadow-indigo-500/20 transition-shadow">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                <Crosshair className="h-6 w-6 text-violet-200" />
              </div>
              <div>
                <div className="text-lg font-bold text-white">Raggi X Tecnologici</div>
                <div className="text-sm text-slate-300">Dolore tecnico in 1 click</div>
              </div>
            </div>
            <p className="mt-5 text-slate-200 leading-relaxed">
              Scopri se usano Meta Pixel, Google Ads, GTM o se hanno un sito lento. Trova il dolore prima di chiamare.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {['MISSING FB PIXEL', 'SITO LENTO', 'NO DMARC', 'SCHEDA NON RIVENDICATA'].map((t) => (
                <div key={t} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-mono text-slate-200">
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur p-8 shadow-xl shadow-violet-500/10 hover:shadow-indigo-500/20 transition-shadow">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-emerald-200" />
              </div>
              <div>
                <div className="text-lg font-bold text-white">Cacciatore di Decision Maker</div>
                <div className="text-sm text-slate-300">Bypass i centralini</div>
              </div>
            </div>
            <p className="mt-5 text-slate-200 leading-relaxed">
              Identifichiamo titolari e contatti diretti nelle pagine “Chi Siamo”. Saprai chi cercare quando chiami.
            </p>
          </div>

          <div className="md:col-span-6 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur p-8 shadow-xl shadow-violet-500/10 hover:shadow-indigo-500/20 transition-shadow">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                <Search className="h-6 w-6 text-amber-200" />
              </div>
              <div>
                <div className="text-lg font-bold text-white">Analisi Reputazione & SEO</div>
                <div className="text-sm text-slate-300">Clienti facili da chiudere</div>
              </div>
            </div>
            <p className="mt-5 text-slate-200 leading-relaxed">
              Trova aziende con recensioni basse o disastri SEO (no H1/Title). Pipeline piena di opportunità immediate.
            </p>
          </div>

          <div className="md:col-span-6 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur p-8 shadow-xl shadow-violet-500/10 hover:shadow-indigo-500/20 transition-shadow">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                <MailWarning className="h-6 w-6 text-fuchsia-200" />
              </div>
              <div>
                <div className="text-lg font-bold text-white">Verifica Anti-Spam</div>
                <div className="text-sm text-slate-300">Servizio vendibile in 5 minuti</div>
              </div>
            </div>
            <p className="mt-5 text-slate-200 leading-relaxed">
              Controlla se le loro email finiscono in spam (DMARC check). Un&apos;offerta semplice, immediata, ad alto margine.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
