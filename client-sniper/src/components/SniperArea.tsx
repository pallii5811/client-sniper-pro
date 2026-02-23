'use client'

import { Target, Zap, Search, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'

type SniperAreaProps = {
  what: string
  where: string
  onWhatChange: (value: string) => void
  onWhereChange: (value: string) => void
  onStart: () => void | Promise<void>
  isLoading: boolean
  error: string | null
}

const SniperArea = ({ what, where, onWhatChange, onWhereChange, onStart, isLoading, error }: SniperAreaProps) => {
  
  return (
    <Card className="bg-white shadow-2xl border-0 rounded-2xl p-8 mb-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-100 to-blue-100 rounded-2xl mb-4">
          <Target className="w-8 h-8 text-violet-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Client Sniper</h3>
        <p className="text-gray-600">Trova contatti aziendali in tempo reale</p>
      </div>

      <div className="space-y-6">
        <div className="relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <Input
            placeholder="Cosa cerchi? (es. Web Agency, Ristoranti)"
            value={what}
            onChange={(e) => onWhatChange(e.target.value)}
            className="pl-12 pr-4 py-4 text-lg border-gray-200 rounded-xl focus:border-violet-500 focus:ring-violet-500 transition-all duration-200"
          />
        </div>

        <div className="relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <MapPin className="w-5 h-5 text-gray-400" />
          </div>
          <Input
            placeholder="Dove? (es. Milano)"
            value={where}
            onChange={(e) => onWhereChange(e.target.value)}
            className="pl-12 pr-4 py-4 text-lg border-gray-200 rounded-xl focus:border-violet-500 focus:ring-violet-500 transition-all duration-200"
          />
        </div>

        <Button 
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-bold py-4 px-6 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] disabled:hover:scale-100 flex items-center justify-center space-x-3"
          onClick={onStart}
        >
          {isLoading ? (
            <>
              <div className="w-6 h-6 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              <span>Scansione target in corso...</span>
            </>
          ) : (
            <>
              <Zap className="w-6 h-6" />
              <span>Avvia Sniper (Costa 1 Credito)</span>
            </>
          )}
        </Button>

        {error ? (
          <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
            {error}
          </div>
        ) : null}
      </div>

      <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-500">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>Database aggiornato</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span>2.5M+ contatti</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
          <span>95% accuratezza</span>
        </div>
      </div>
    </Card>
  )
}

export default SniperArea
