'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import SniperArea from '@/components/SniperArea'
import ResultsTable from '@/components/ResultsTable'
import { createClient } from '@/utils/supabase/client'
import { useToast } from '@/components/ToastProvider'
import { useDashboard } from '@/components/DashboardContext'

export type SniperResult = {
  id: string
  azienda: string
  telefono: string
  email: string
  tech_stack: string[]
  facebook?: string
  instagram?: string
  html_errors?: number
  technical_report?: {
    error_details?: unknown[]
    response_time_seconds?: number
  }
  rating?: number
  reviews_count?: number
  meta_ads_library?: string
  decision_maker?: string
}

export default function DashboardShell() {
  const supabase = useMemo(() => createClient(), [])
  const { error: toastError, info: toastInfo, success: toastSuccess } = useToast()
  const { userId, credits, setCredits } = useDashboard()

  const pollRef = useRef<number | null>(null)

  const [what, setWhat] = useState('')
  const [where, setWhere] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [results, setResults] = useState<SniperResult[]>([])

  const clearPolling = () => {
    if (pollRef.current) {
      window.clearInterval(pollRef.current)
      pollRef.current = null
    }
  }

  useEffect(() => {
    return () => {
      clearPolling()
    }
  }, [])

  const coerceResults = (value: unknown): SniperResult[] => {
    if (!Array.isArray(value)) return []
    return value
      .map((item) => {
        if (!item || typeof item !== 'object') return null
        const obj = item as Record<string, unknown>

        const techStackRaw = obj.tech_stack
        const tech_stack = Array.isArray(techStackRaw)
          ? techStackRaw.filter((v) => typeof v === 'string')
          : typeof techStackRaw === 'string'
            ? techStackRaw
                .split(',')
                .map((s) => s.trim())
                .filter(Boolean)
            : []

        const result: SniperResult = {
          id: typeof obj.id === 'string' ? obj.id : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
          azienda:
            typeof obj.azienda === 'string'
              ? obj.azienda
              : typeof obj.company === 'string'
                ? obj.company
                : '',
          telefono:
            typeof obj.telefono === 'string'
              ? obj.telefono
              : typeof obj.phone === 'string'
                ? obj.phone
                : '',
          email:
            typeof obj.email === 'string'
              ? obj.email
              : typeof obj.mail === 'string'
                ? obj.mail
                : '',
          tech_stack,
          facebook: typeof obj.facebook === 'string' ? obj.facebook : typeof obj.fb === 'string' ? obj.fb : undefined,
          instagram: typeof obj.instagram === 'string' ? obj.instagram : typeof obj.ig === 'string' ? obj.ig : undefined,
          html_errors:
            typeof obj.html_errors === 'number'
              ? obj.html_errors
              : typeof obj.htmlErrors === 'number'
                ? obj.htmlErrors
                : typeof obj.html_error_count === 'number'
                  ? obj.html_error_count
                  : undefined,
          technical_report:
            obj.technical_report && typeof obj.technical_report === 'object'
              ? (() => {
                  const tr = obj.technical_report as Record<string, unknown>
                  return {
                    error_details: Array.isArray(tr.error_details) ? (tr.error_details as unknown[]) : undefined,
                    response_time_seconds:
                      typeof tr.response_time_seconds === 'number'
                        ? (tr.response_time_seconds as number)
                        : typeof tr.responseTimeSeconds === 'number'
                          ? (tr.responseTimeSeconds as number)
                          : typeof tr.response_time === 'number'
                            ? (tr.response_time as number)
                            : typeof tr.load_time_seconds === 'number'
                              ? (tr.load_time_seconds as number)
                              : undefined,
                  }
                })()
              : undefined,
          rating:
            typeof obj.rating === 'number'
              ? obj.rating
              : typeof obj.reputation_rating === 'number'
                ? obj.reputation_rating
                : typeof obj.google_rating === 'number'
                  ? obj.google_rating
                  : undefined,
          reviews_count:
            typeof obj.reviews_count === 'number'
              ? obj.reviews_count
              : typeof obj.reviewsCount === 'number'
                ? obj.reviewsCount
                : typeof obj.review_count === 'number'
                  ? obj.review_count
                  : typeof obj.google_reviews_count === 'number'
                    ? obj.google_reviews_count
                    : undefined,
          meta_ads_library:
            typeof obj.meta_ads_library === 'string'
              ? obj.meta_ads_library
              : typeof obj.metaAdsLibrary === 'string'
                ? obj.metaAdsLibrary
                : typeof obj.ads_library === 'string'
                  ? obj.ads_library
                  : undefined,
          decision_maker:
            typeof obj.decision_maker === 'string'
              ? obj.decision_maker
              : typeof obj.decisionMaker === 'string'
                ? obj.decisionMaker
                : typeof obj.contact_person === 'string'
                  ? obj.contact_person
                  : undefined,
        }
        return result
      })
      .filter(Boolean) as SniperResult[]
  }

  const startSniper = async () => {
    clearPolling()
    setError(null)

    if (!what.trim() || !where.trim()) {
      const msg = 'Compila entrambi i campi per avviare la scansione.'
      setError(msg)
      toastError(msg, 'Dati mancanti')
      return
    }

    if (credits < 1) {
      const msg = 'Crediti esauriti. Fai l’upgrade del piano.'
      setError(msg)
      toastError(msg, 'Crediti insufficienti')
      return
    }

    setIsLoading(true)
    setResults([])

    toastInfo('Scansione in corso... Il nostro motore sta estraendo i dati.', 'Avvio Sniper')

    try {
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('credits')
        .eq('id', userId)
        .single()

      if (profileError) throw profileError

      const currentCredits = typeof profile?.credits === 'number' ? profile.credits : 0

      if (currentCredits < 1) {
        setCredits(0)
        const msg = 'Crediti esauriti. Fai l’upgrade del piano.'
        setError(msg)
        toastError(msg, 'Crediti insufficienti')
        return
      }

      const { data: updated, error: updateError } = await supabase
        .from('profiles')
        .update({ credits: currentCredits - 1 })
        .eq('id', userId)
        .select('credits')
        .single()

      if (updateError) throw updateError

      const newCredits = typeof updated?.credits === 'number' ? updated.credits : currentCredits - 1
      setCredits(newCredits)

      const searchCategory = what.trim()
      const searchLocation = where.trim()

      const { data: inserted, error: insertError } = await supabase
        .from('searches')
        .insert({ user_id: userId, category: searchCategory, location: searchLocation, status: 'pending' })
        .select('id')
        .single()

      if (insertError) throw insertError
      if (!inserted?.id) throw new Error('Impossibile avviare la ricerca (id mancante).')

      const searchId = inserted.id as string

      pollRef.current = window.setInterval(async () => {
        const { data: row, error: pollError } = await supabase
          .from('searches')
          .select('status, results')
          .eq('id', searchId)
          .single()

        if (pollError) {
          clearPolling()
          setIsLoading(false)
          const msg = pollError.message || 'Errore durante il polling'
          setError(msg)
          toastError(msg, 'Errore')
          return
        }

        const status = typeof row?.status === 'string' ? row.status : 'pending'

        if (status === 'completed') {
          clearPolling()
          const parsed = coerceResults(row?.results)
          setResults(parsed)
          setIsLoading(false)
          toastSuccess('Risultati pronti. Scorri la tabella per i dettagli.', 'Scansione completata')
          return
        }

        if (status === 'error') {
          clearPolling()

          try {
            const { data: p2, error: p2Error } = await supabase
              .from('profiles')
              .select('credits')
              .eq('id', userId)
              .single()

            if (p2Error) throw p2Error

            const current = typeof p2?.credits === 'number' ? p2.credits : credits
            const { data: refunded, error: refundError } = await supabase
              .from('profiles')
              .update({ credits: current + 1 })
              .eq('id', userId)
              .select('credits')
              .single()

            if (refundError) throw refundError

            const refundedCredits = typeof refunded?.credits === 'number' ? refunded.credits : current + 1
            setCredits(refundedCredits)
          } catch {
            // ignore refund errors (UI will still show an error toast)
          }

          setIsLoading(false)
          const msg = 'La ricerca è andata in errore. Credito rimborsato.'
          setError(msg)
          toastError(msg, 'Ricerca fallita')
        }
      }, 3000)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Errore durante la scansione'
      setError(message)
      toastError(message, 'Errore')
    } finally {
      // keep loading until polling finishes
    }
  }

  return (
    <>
      <SniperArea
        what={what}
        where={where}
        onWhatChange={setWhat}
        onWhereChange={setWhere}
        onStart={startSniper}
        isLoading={isLoading}
        error={error}
      />
      <ResultsTable what={what} where={where} results={results} />
    </>
  )
}
