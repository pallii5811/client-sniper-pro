'use client'

import {
  ArrowRight,
  Play,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import CtaLink from '@/components/CtaLink'
import HeroDashboardAnimation from '@/components/hero-dashboard-animation'

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.12),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(37,99,235,0.10),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
              <Sparkles className="h-4 w-4 text-violet-600" />
              Usato da oltre <span className="font-semibold text-slate-900">5.000</span> aziende innovative
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
              Trova i clienti che stanno cercando te. <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600">Ora.</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl leading-relaxed text-slate-600 max-w-xl">
              Client Sniper estrae contatti B2B verificati (Telefoni ed Email) e analizza l&apos;infrastruttura web in tempo reale
              (Meta/TikTok Pixel, GTM, SSL, Mobile, Social). Smetti di cercare, inizia a vendere.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="h-12 px-7 text-base bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 shadow-lg transition-all cta-glow-hover"
              >
                <CtaLink>
                  Provalo Gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </CtaLink>
              </Button>
              <Button variant="outline" className="h-12 px-7 text-base border-slate-200 bg-white hover:bg-slate-50">
                <Play className="mr-2 h-5 w-5" />
                Guarda la Demo
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Tempo reale</div>
                <div className="text-sm text-slate-700 mt-1">Dati freschi, verificati.</div>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">B2B pronto</div>
                <div className="text-sm text-slate-700 mt-1">Decision maker inclusi.</div>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">CSV/Excel</div>
                <div className="text-sm text-slate-700 mt-1">Esporta in 1 click.</div>
              </div>
            </div>
          </div>

          <HeroDashboardAnimation />
        </div>
      </div>
    </section>
  )
}
