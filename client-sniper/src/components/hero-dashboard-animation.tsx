'use client'

import { useEffect, useMemo, useState } from 'react'
import { Badge } from '@/components/ui/badge'

type TechBadge = { label: string; color: string }

type FakeResult = {
  company: string
  phone: string
  email: string
  city: string
  rating: number
  reviews: number
  hasInstagram?: boolean
  hasFacebook?: boolean
  techStack: TechBadge[]
}

export default function HeroDashboardAnimation() {
  const fakeResults: FakeResult[] = useMemo(
    () => [
      {
        company: 'Ristorante Da Nonna Rosa',
        phone: '3471234567',
        email: 'info@nonna-rosa.it',
        city: 'napoli',
        rating: 4.2,
        reviews: 716,
        hasInstagram: true,
        hasFacebook: true,
        techStack: [
          { label: 'NO WEBSITE', color: 'bg-red-900 text-white font-bold' },
          { label: 'EMAIL IN SPAM (NO DMARC)', color: 'bg-fuchsia-900 text-fuchsia-200 border-fuchsia-700' },
          { label: 'SCHEDA NON RIVENDICATA', color: 'bg-yellow-600 text-white font-bold' },
          { label: 'MISSING FB PIXEL', color: 'bg-[#5c2b29] text-[#fca5a5] border-red-900' },
        ],
      },
      {
        company: 'Studio Legale Martini',
        phone: '02 456789',
        email: 'info@studiolegalemartini.it',
        city: 'milano',
        rating: 4.8,
        reviews: 1565,
        hasFacebook: true,
        techStack: [
          { label: 'SITO LENTO (Speed: 6.2s)', color: 'bg-red-800 text-white font-bold' },
          { label: 'DISASTRO SEO (NO H1/TITLE)', color: 'bg-[#5c2b29] text-[#fca5a5] border-red-900' },
          { label: 'MISSING GOOGLE ADS', color: 'bg-[#5c2b29] text-[#fca5a5] border-red-900' },
          { label: 'NO CHATBOT', color: 'bg-[#5c2b29] text-[#fca5a5] border-red-900' },
          { label: 'WORDPRESS', color: 'bg-indigo-900 text-indigo-200' },
        ],
      },
      {
        company: 'Centro Estetico Bella',
        phone: '39382722686',
        email: 'prenotazioni@bella.it',
        city: 'roma',
        rating: 2.8,
        reviews: 62,
        hasInstagram: true,
        techStack: [
          { label: 'WEBSITE OK', color: 'bg-green-900 text-green-200' },
          { label: 'META PIXEL', color: 'bg-purple-900 text-purple-200' },
          { label: 'NO SISTEMA PRENOTAZIONI', color: 'bg-[#5c2b29] text-[#fca5a5] border-red-900' },
          { label: 'BAD REVIEWS (2.8⭐)', color: 'bg-red-900 text-white font-bold' },
        ],
      },
    ],
    []
  )

  const [step, setStep] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setStep((s) => (s + 1) % (fakeResults.length + 1))
    }, 1400)

    return () => window.clearInterval(id)
  }, [fakeResults.length])

  return (
    <div className="relative" style={{ perspective: '1200px' }}>
      <div className="absolute -inset-8 bg-gradient-to-br from-indigo-600/12 via-violet-600/8 to-transparent blur-2xl rounded-[2.5rem]" />
      <div className="relative transform-gpu [transform:rotateX(7deg)_rotateY(-10deg)]">
        <div className="relative rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-indigo-500/10 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 bg-white">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
            </div>
            <div className="text-xs font-semibold text-slate-900 tracking-wide">Client Sniper</div>
          </div>

          <div className="p-5">
            <div className="rounded-2xl border border-slate-200 overflow-hidden">
              <div className="flex items-center justify-between gap-2 border-b border-gray-800 pb-2 mb-2 text-[10px] font-bold text-gray-500 uppercase px-4 pt-3">
                <span className="w-[25%] shrink-0">Azienda</span>
                <span className="w-[25%] shrink-0">Contatto</span>
                <span className="flex-1 text-right">Tech Stack / Allarmi</span>
              </div>

              <div className="divide-y divide-slate-100 max-h-[236px] overflow-y-auto">
                {fakeResults.map((r, idx) => {
                  const isVisible = step > idx
                  const isActive = step === idx + 1
                  const isEven = idx % 2 === 0
                  const contact = `${r.phone} • ${r.email}`

                  return (
                    <div
                      key={r.company}
                      className={
                        `flex items-center justify-between gap-2 px-4 py-3 transition-all duration-500 ` +
                        (isEven ? 'bg-white' : 'bg-white') +
                        (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2') +
                        (isActive ? ' bg-slate-50' : '')
                      }
                      style={{ transitionDelay: `${idx * 120}ms` }}
                    >
                      <div className="w-[25%] shrink-0 truncate font-medium text-xs text-slate-900">
                        {r.company}
                      </div>

                      <div className="w-[25%] shrink-0 truncate text-xs text-gray-400">
                        {contact}
                      </div>

                      <div className="flex-1 flex flex-wrap items-center gap-1 justify-end min-w-0">
                        {r.techStack.map((b) => (
                          <Badge
                            key={b.label}
                            variant="secondary"
                            className={`text-[9px] uppercase font-bold px-1.5 py-0.5 rounded-sm leading-none whitespace-nowrap ${b.color}`}
                          >
                            {b.label}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
              <span className="font-mono">stream://leads</span>
              <span className="font-mono">{step === 0 ? '…' : 'ok'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
