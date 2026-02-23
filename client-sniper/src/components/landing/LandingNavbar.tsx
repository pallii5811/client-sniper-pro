'use client'

import { Target, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import CtaLink from '@/components/CtaLink'

export default function LandingNavbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center shadow-sm">
              <Target className="h-5 w-5 text-white" />
            </div>
            <div className="font-bold text-slate-900 text-lg">Client Sniper</div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a className="hover:text-slate-900 transition-colors" href="#come-funziona">Come funziona</a>
            <a className="hover:text-slate-900 transition-colors" href="#intelligence">Features</a>
            <a className="hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" className="hidden sm:inline-flex">
              <Link href="/login">Accedi</Link>
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 shadow-lg transition-all cta-glow-hover"
            >
              <CtaLink>
                Inizia Ora
                <ArrowRight className="ml-2 h-4 w-4" />
              </CtaLink>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
