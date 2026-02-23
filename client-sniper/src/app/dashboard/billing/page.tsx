import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function BillingPage() {
  return (
    <Card className="bg-white shadow-2xl border-0 rounded-2xl p-8">
      <div className="text-2xl font-bold text-gray-900">Abbonamento</div>
      <div className="mt-2 text-gray-600">Gestisci piano e ricarica crediti.</div>

      <div className="mt-6 flex items-center gap-3">
        <Button className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700">
          Ricarica crediti
        </Button>
        <Button variant="outline">Vedi piano</Button>
      </div>
    </Card>
  )
}
