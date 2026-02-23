import { Card } from '@/components/ui/card'

export default function LeadsPage() {
  return (
    <Card className="bg-white shadow-2xl border-0 rounded-2xl p-8">
      <div className="text-2xl font-bold text-gray-900">Le mie Liste</div>
      <div className="mt-2 text-gray-600">Qui vedrai i lead salvati (saved_leads) con export CSV e delete.</div>
    </Card>
  )
}
