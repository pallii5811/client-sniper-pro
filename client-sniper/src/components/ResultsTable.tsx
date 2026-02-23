'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Phone, CheckCircle, MessageCircle, Instagram, Facebook, Star, Eye } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import type { SniperResult } from '@/components/DashboardShell'

type ResultsTableProps = {
  what: string
  where: string
  results: SniperResult[]
}

const ResultsTable = ({ what, where, results }: ResultsTableProps) => {
  const [analysisOpen, setAnalysisOpen] = useState(false)
  const [analysisItem, setAnalysisItem] = useState<SniperResult | null>(null)

  if (results.length === 0) return null

  const handleWhatsAppContact = (telefono: string) => {
    const raw = typeof telefono === 'string' ? telefono : ''
    const cleaned = raw.replace(/[^\d+]/g, '').replace(/^00/, '+')
    const digitsOnly = cleaned.replace(/\D/g, '')

    if (!digitsOnly) return

    const number = digitsOnly.startsWith('39') ? digitsOnly : `39${digitsOnly}`

    const message =
      'Ciao, ho visto il tuo profilo su Client Sniper e vorrei farti una proposta. Possiamo sentirci?' 
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const toPhoneDigits = (telefono: string) => {
    const raw = typeof telefono === 'string' ? telefono : ''
    const cleaned = raw.replace(/[^\d+]/g, '').replace(/^00/, '+')
    return cleaned.replace(/\D/g, '')
  }

  const isItalianMobile = (telefono: string) => {
    const digitsOnly = toPhoneDigits(telefono)
    if (!digitsOnly) return false
    const normalized = digitsOnly.startsWith('39') ? digitsOnly.slice(2) : digitsOnly
    return normalized.startsWith('3')
  }

  const renderNd = (value: string) => {
    const v = typeof value === 'string' ? value.trim() : ''
    if (!v) return <span className="text-sm text-gray-900">N/D</span>
    return <span className="text-sm text-gray-900 font-mono">{value}</span>
  }

  const getTechBadgeClass = (label: string) => {
    const raw = typeof label === 'string' ? label.trim() : ''
    const key = raw.toUpperCase()

    if (key === 'EMAIL IN SPAM (NO DMARC)') return 'bg-fuchsia-900 text-fuchsia-200 border border-fuchsia-700'
    if (key === 'NO WEBSITE') return 'bg-red-900 text-white font-bold'
    if (key === 'SCHEDA NON RIVENDICATA') return 'bg-yellow-600 text-white font-bold border border-yellow-700'
    if (
      key === 'DISASTRO SEO (NO H1/TITLE)' ||
      key === 'MISSING FB PIXEL' ||
      key === 'MISSING GTM' ||
      key === 'MISSING GOOGLE ADS' ||
      key === 'MISSING GA4' ||
      key === 'NO CHATBOT'
    )
      return 'bg-[#5c2b29] text-[#fca5a5] border border-red-900'
    if (key === 'SITO LENTO') return 'bg-red-800 text-white font-bold'
    if (key === 'NO TIKTOK') return 'bg-red-700 text-white'

    if (key === 'WORDPRESS' || key === 'WIX' || key === 'SHOPIFY' || key === 'CUSTOM HTML')
      return 'bg-indigo-900 text-indigo-200'

    if (key === 'SSL' || key === 'MOBILE' || key === 'WEBSITE OK') return 'bg-green-900 text-green-200'

    if (key === 'GOOGLE ADS' || key === 'GA4') return 'bg-[#5c4b10] text-[#fde68a] border border-[#a16207]'
    if (key === 'CHATBOT AI') return 'bg-[#3b0a2a] text-[#5eead4] border border-[#0f766e]'

    if (key === 'SISTEMA PRENOTAZIONI') return 'bg-blue-900 text-blue-200 border border-blue-950'
    if (key === 'E-COMMERCE') return 'bg-blue-900 text-blue-200 border border-blue-950'
    if (key === 'NO SISTEMA PRENOTAZIONI') return 'bg-[#2b2b2b] text-slate-200 border border-slate-700'

    return 'bg-slate-500/10 text-slate-500 border border-slate-200'
  }

  const sortTechStack = (stack: string[]) => {
    const getPriority = (label: string) => {
      const key = (label || '').trim().toUpperCase()
      if (key === 'EMAIL IN SPAM (NO DMARC)') return 0
      if (key === 'NO WEBSITE') return 0
      if (key === 'SCHEDA NON RIVENDICATA') return 1
      if (key === 'DISASTRO SEO (NO H1/TITLE)') return 2
      if (key.startsWith('MISSING') || key === 'NO CHATBOT') return 2
      if (key === 'SITO LENTO') return 3
      return 4
    }

    return [...stack].sort((a, b) => {
      const pa = getPriority(a)
      const pb = getPriority(b)
      if (pa !== pb) return pa - pb
      return (a || '').localeCompare(b || '')
    })
  }

  const withSalesTriggers = (item: SniperResult) => {
    const base = Array.isArray(item.tech_stack) ? item.tech_stack : []
    const normalized = new Set(base.map((v) => (typeof v === 'string' ? v.trim().toUpperCase() : '')).filter(Boolean))

    const hasWebsiteSignals =
      normalized.has('WEBSITE OK') ||
      normalized.has('WORDPRESS') ||
      normalized.has('WIX') ||
      normalized.has('SHOPIFY') ||
      normalized.has('CUSTOM HTML') ||
      normalized.has('SSL') ||
      normalized.has('MOBILE')

    const hasWebsite = hasWebsiteSignals && !normalized.has('NO WEBSITE')
    const hasBooking = normalized.has('SISTEMA PRENOTAZIONI')
    const hasEcom = normalized.has('E-COMMERCE')

    const enriched = [...base]
    if (hasWebsite && !hasBooking && !hasEcom) enriched.push('NO SISTEMA PRENOTAZIONI')
    return enriched
  }

  const downloadJson = (filename: string, value: unknown) => {
    try {
      const blob = new Blob([JSON.stringify(value, null, 2)], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = filename
      a.click()
      URL.revokeObjectURL(url)
    } catch {
      // ignore
    }
  }

  const normalizeUrl = (value: string | undefined) => {
    const v = typeof value === 'string' ? value.trim() : ''
    if (!v) return null
    if (v.startsWith('http://') || v.startsWith('https://')) return v
    return `https://${v}`
  }

  const verifiedCount = results.length

  return (
    <Card className="bg-white shadow-2xl border-0 rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Risultati della Ricerca</h3>
            <p className="text-sm text-gray-500 mt-1">
              {results.length} contatti trovati per &quot;{what || '—'}&quot; a {where || '—'}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
              <CheckCircle className="w-3 h-3 mr-1" />
              {verifiedCount} Verificati
            </Badge>
            <Badge variant="secondary" className="bg-violet-100 text-violet-700 border-violet-200">
              Premium
            </Badge>
          </div>
        </div>
      </div>

      <div className="w-full pb-4">
        <table className="w-full table-fixed text-left text-xs font-medium">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="w-[22%] px-2 py-3 text-left text-[10px] font-semibold text-gray-600 uppercase tracking-wider">
                Nome Azienda
              </th>
              <th className="w-[20%] px-2 py-3 text-left text-[10px] font-semibold text-gray-600 uppercase tracking-wider">
                Contatti
              </th>
              <th className="w-[8%] px-2 py-3 text-left text-[10px] font-semibold text-gray-600 uppercase tracking-wider">
                Indirizzo
              </th>
              <th className="w-[25%] px-2 py-3 text-left text-[10px] font-semibold text-gray-600 uppercase tracking-wider">
                Tech Stack
              </th>
              <th className="w-[8%] px-2 py-3 text-center text-[10px] font-semibold text-gray-600 uppercase tracking-wider">
                Reputazione
              </th>
              <th className="w-[5%] px-2 py-3 text-center text-[10px] font-semibold text-gray-600 uppercase tracking-wider">
                Social
              </th>
              <th className="w-[6%] px-2 py-3 text-center text-[10px] font-semibold text-gray-600 uppercase tracking-wider">
                Analisi
              </th>
              <th className="w-[6%] shrink-0 px-2 py-3 text-center text-[10px] font-semibold text-gray-600 uppercase tracking-wider bg-gray-50">
                Azioni
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {results.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-2 py-3 overflow-hidden align-top">
                  <div className="flex flex-col gap-1 w-full">
                    <span className="font-bold truncate w-full text-sm text-gray-900">
                      {item.azienda?.trim() ? item.azienda : 'N/D'}
                    </span>
                    {item.decision_maker && item.decision_maker.trim() && item.decision_maker.trim().toUpperCase() !== 'N/D' ? (
                      <span className="text-green-600 truncate w-full">{item.decision_maker}</span>
                    ) : null}
                    <div className="mt-1">
                      <Badge className="bg-green-100 text-green-700 border-green-200 text-[10px] px-1.5 py-0.5 leading-none">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Verificato
                      </Badge>
                    </div>
                  </div>
                </td>

                <td className="px-2 py-3 overflow-hidden align-top">
                  <div className="flex flex-col gap-1.5 w-full">
                    <div
                      className="truncate w-full"
                      title={typeof item.telefono === 'string' && item.telefono.trim() ? item.telefono : 'N/D'}
                    >
                      📞 {renderNd(item.telefono)}
                    </div>
                    <div
                      className="truncate w-full text-gray-500"
                      title={typeof item.email === 'string' && item.email.trim() ? item.email : 'N/D'}
                    >
                      ✉️ {renderNd(item.email)}
                    </div>
                  </div>
                </td>

                <td className="px-2 py-3 overflow-hidden align-top">
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs text-gray-700 truncate">
                      {(() => {
                        const anyItem = item as unknown as Record<string, unknown>
                        const addr =
                          typeof anyItem.indirizzo === 'string'
                            ? anyItem.indirizzo
                            : typeof anyItem.address === 'string'
                              ? anyItem.address
                              : ''
                        return addr?.trim() ? addr : '—'
                      })()}
                    </span>
                    <span className="text-[11px] text-gray-500 truncate">{where || 'N/D'}</span>
                  </div>
                </td>
                <td className="px-2 py-3 overflow-hidden align-top">
                  <div className="flex flex-wrap items-center gap-1 min-w-0">
                    {item.tech_stack?.length ? (
                      sortTechStack(withSalesTriggers(item)).map((t) => (
                        <Badge
                          key={t}
                          variant="secondary"
                          className={`text-[9px] px-1 py-0.5 leading-tight ${getTechBadgeClass(t)}`}
                        >
                          {t}
                        </Badge>
                      ))
                    ) : (
                      <span className="text-xs text-gray-900">N/D</span>
                    )}
                  </div>
                </td>
                <td className="px-2 py-3 overflow-hidden align-top">
                  <div className="flex items-center justify-center gap-2">
                    {(() => {
                      const rating = typeof item.rating === 'number' ? item.rating : null
                      const count = typeof item.reviews_count === 'number' ? item.reviews_count : null

                      if (!rating || rating <= 0) {
                        return (
                          <Badge variant="secondary" className="bg-slate-100 text-slate-600 border border-slate-200 text-[10px] px-1.5 py-0.5 leading-none">
                            N/D
                          </Badge>
                        )
                      }

                      if (!count || count <= 0) {
                        return (
                          <Badge variant="secondary" className="bg-slate-100 text-slate-600 border border-slate-200 text-[10px] px-1.5 py-0.5 leading-none">
                            NO REVIEWS
                          </Badge>
                        )
                      }

                      if (rating < 3.8) {
                        return (
                          <Badge variant="secondary" className="bg-red-900 text-white font-bold text-[10px] px-1.5 py-0.5 leading-none">
                            BAD REVIEWS
                          </Badge>
                        )
                      }

                      return (
                        <div className="inline-flex items-center gap-1 rounded-md border border-amber-200 bg-amber-50 px-1.5 py-0.5">
                          <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                          <span className="text-xs text-slate-900 tabular-nums">{rating.toFixed(1)}</span>
                          <span className="text-[10px] text-slate-600 tabular-nums">({count})</span>
                        </div>
                      )
                    })()}
                  </div>
                </td>
                <td className="px-2 py-3 overflow-hidden align-top">
                  <div className="flex items-center justify-center gap-3">
                    {(() => {
                      const ig = normalizeUrl(item.instagram)
                      const fb = normalizeUrl(item.facebook)
                      const ads = normalizeUrl(item.meta_ads_library)

                      return (
                        <>
                          {ig ? (
                            <a
                              href={ig}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center rounded-md p-2 text-fuchsia-500 hover:bg-fuchsia-500/10 transition-colors"
                              aria-label="Instagram"
                              title="Instagram"
                            >
                              <Instagram className="h-4 w-4" />
                            </a>
                          ) : (
                            <Badge
                              variant="secondary"
                              className="bg-[#5c1941] text-[#fbcfe8] border border-[#5c1941] text-[10px] px-1.5 py-0.5 leading-none"
                            >
                              NO INSTA
                            </Badge>
                          )}

                          {fb ? (
                            <div className="inline-flex items-center">
                              <a
                                href={fb}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-md p-2 text-blue-500 hover:bg-blue-500/10 transition-colors"
                                aria-label="Facebook"
                                title="Facebook"
                              >
                                <Facebook className="h-4 w-4" />
                              </a>
                              {ads ? (
                                <a
                                  href={ads}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="-ml-1 inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 transition-colors"
                                  aria-label="Spia Inserzioni Meta"
                                  title="Spia Inserzioni Meta"
                                >
                                  <Eye className="h-4 w-4" />
                                </a>
                              ) : null}
                            </div>
                          ) : null}
                        </>
                      )
                    })()}
                  </div>
                </td>
                <td className="px-2 py-3 overflow-hidden align-top">
                  <div className="flex items-center justify-center">
                    <Button
                      size="sm"
                      type="button"
                      variant="outline"
                      className="text-[10px] border-slate-200 hover:bg-slate-50 px-2 py-1 h-7"
                      onClick={() => {
                        setAnalysisItem(item)
                        setAnalysisOpen(true)
                      }}
                    >
                      🔍 ANALISI TECNICA
                    </Button>
                  </div>
                </td>
                <td className="w-[80px] shrink-0 px-2 py-3 overflow-hidden align-top bg-white">
                  <div className="flex items-center justify-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-[10px] border-gray-200 hover:bg-gray-50 px-2 py-1 h-7"
                    >
                      Salva
                    </Button>
                    {isItalianMobile(item.telefono) ? (
                      <Button
                        size="sm"
                        type="button"
                        onClick={() => handleWhatsAppContact(item.telefono)}
                        className="h-7 w-7 rounded-full bg-green-600 hover:bg-green-500 text-white transition-colors p-0"
                        title="WhatsApp"
                        aria-label="WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                    ) : (
                      <span
                        className="h-7 w-7 inline-flex items-center justify-center rounded-full bg-slate-100 text-slate-400"
                        title="Numero fisso"
                        aria-label="Numero fisso"
                      >
                        <Phone className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 border-t border-gray-100 bg-gray-50">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Mostrando 1-{results.length} di {results.length} risultati
          </p>
          <div className="flex items-center space-x-2">
            <Button
              size="sm"
              variant="outline"
              disabled
              className="text-xs"
            >
              Precedente
            </Button>
            <Button
              size="sm"
              variant="outline"
              disabled
              className="text-xs"
            >
              Successivo
            </Button>
          </div>
        </div>
      </div>

      <Dialog
        open={analysisOpen}
        onOpenChange={(open) => {
          setAnalysisOpen(open)
          if (!open) setAnalysisItem(null)
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Analisi Tecnica</DialogTitle>
            <DialogDescription>
              {analysisItem?.azienda?.trim() ? analysisItem.azienda : 'N/D'}
            </DialogDescription>
          </DialogHeader>
          <div className="px-6 py-4 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-semibold text-slate-500">Email</div>
                <div className="mt-1 text-sm text-slate-900 font-mono">{analysisItem?.email?.trim() ? analysisItem.email : 'N/D'}</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-semibold text-slate-500">Telefono</div>
                <div className="mt-1 text-sm text-slate-900 font-mono">
                  {analysisItem?.telefono?.trim() ? analysisItem.telefono : 'N/D'}
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="text-xs font-semibold text-slate-500">Errori HTML</div>
              <div className="mt-1 text-sm text-slate-900">
                {typeof analysisItem?.html_errors === 'number' ? analysisItem.html_errors : 'N/D'}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="text-xs font-semibold text-slate-500">Tempo di risposta</div>
              <div className="mt-2">
                {typeof analysisItem?.technical_report?.response_time_seconds === 'number' ? (
                  analysisItem.technical_report.response_time_seconds >= 4 ? (
                    <div className="bg-[#2a0e0e] text-[#fca5a5] p-4 rounded-md border border-red-900 text-sm font-mono">
                      Tempo di risposta: {analysisItem.technical_report.response_time_seconds.toFixed(1)} secondi. CRITICO: Rischio abbandono utenti elevato.
                    </div>
                  ) : (
                    <div className="bg-slate-50 text-slate-700 p-4 rounded-md border border-slate-200 text-sm font-mono">
                      Tempo di risposta: {analysisItem.technical_report.response_time_seconds.toFixed(1)} secondi.
                    </div>
                  )
                ) : (
                  <div className="text-sm text-slate-700">N/D</div>
                )}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="text-xs font-semibold text-slate-500">Console CRITICAL</div>
              <div className="mt-3">
                {(() => {
                  const detailsRaw = analysisItem?.technical_report?.error_details
                  const details = Array.isArray(detailsRaw) ? detailsRaw : []
                  const htmlErrors = typeof analysisItem?.html_errors === 'number' ? analysisItem.html_errors : null

                  if (details.length > 0) {
                    return (
                      <div>
                        {details.map((err, idx) => (
                          <div
                            key={idx}
                            className="bg-[#2a0e0e] text-[#fca5a5] p-4 rounded-md border border-red-900 mb-3 text-sm font-mono"
                          >
                            {typeof err === 'string' ? err : JSON.stringify(err)}
                          </div>
                        ))}
                      </div>
                    )
                  }

                  if (htmlErrors === 0) {
                    return (
                      <div className="bg-green-900 text-green-200 p-4 rounded-md border border-green-950 text-sm font-mono">
                        ✓ Nessun errore critico rilevato.
                      </div>
                    )
                  }

                  return <div className="text-sm text-slate-700">N/D</div>
                })()}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="text-xs font-semibold text-slate-500">Tech Stack</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {analysisItem?.tech_stack?.length ? (
                  sortTechStack(withSalesTriggers(analysisItem)).map((t) => (
                    <Badge key={t} variant="secondary" className={`text-xs ${getTechBadgeClass(t)}`}>
                      {t}
                    </Badge>
                  ))
                ) : (
                  <span className="text-sm text-slate-900">N/D</span>
                )}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-xs font-semibold text-slate-500">Velocità / Core Web Vitals</div>
              <div className="mt-1 text-sm text-slate-700">In arrivo…</div>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setAnalysisOpen(false)}
            >
              Chiudi
            </Button>
            <Button
              type="button"
              onClick={() => {
                if (!analysisItem) return
                downloadJson(`analisi-${analysisItem.id}.json`, analysisItem)
              }}
            >
              Genera Report
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  )
}

export default ResultsTable
