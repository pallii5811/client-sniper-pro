'use client'

import { Target } from 'lucide-react'

export default function LandingFooter() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center shadow-sm">
              <Target className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-slate-900">Client Sniper</div>
              <div className="text-sm text-slate-600">Lead intelligence in tempo reale</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-600">
            <a className="hover:text-slate-900 transition-colors" href="#">Contatti</a>
            <a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
            <a className="hover:text-slate-900 transition-colors" href="#">Termini</a>
            <a className="hover:text-slate-900 transition-colors" href="/dashboard">Dashboard</a>
          </div>
        </div>

        <div className="mt-10 text-sm text-slate-500">
          © 2024 Client Sniper. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  )
}
