'use client'

import { ShieldCheck } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const faqs = [
  {
    q: 'Da dove provengono i dati?',
    a: 'Estraiamo dati pubblici e consenzienti dal web e directory ufficiali in tempo reale, garantendo la massima aderenza alle normative sulla privacy (GDPR).',
  },
  {
    q: 'I numeri di telefono sono reali?',
    a: 'Sì. Il nostro algoritmo scarta i numeri non validi, identifica i centralini e ti fornisce i cellulari aziendali verificati dove disponibili.',
  },
  {
    q: 'Come funzionano i crediti?',
    a: 'Un credito equivale a un lead estratto con successo (che contenga almeno telefono o email). Le ricerche a vuoto non consumano crediti.',
  },
  {
    q: "Posso cancellare l'abbonamento?",
    a: 'Assolutamente sì. Nessun vincolo, puoi disdire in qualsiasi momento con un click dalla tua dashboard.',
  },
]

export default function FaqComplianceSection() {
  return (
    <section className="w-full bg-slate-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Domande Frequenti</h2>
            <p className="mt-3 text-lg text-slate-600 max-w-2xl">
              Risposte chiare su dati, qualità e crediti. Nessuna ambiguità.
            </p>
          </div>

          <Badge className="h-9 px-4 bg-emerald-100 text-emerald-800 border border-emerald-200 inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" />
            100% GDPR Compliant
          </Badge>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((item) => (
            <details key={item.q} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm open:shadow-lg transition-shadow">
              <summary className="cursor-pointer list-none">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-base md:text-lg font-bold text-slate-900">{item.q}</div>
                  <div className="mt-1 h-7 w-7 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-600 group-open:rotate-45 transition-transform">
                    +
                  </div>
                </div>
              </summary>
              <div className="mt-4 text-slate-600 leading-relaxed">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
