import { Card } from '@/components/ui/card'

export default function IntegrationsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-white shadow-2xl border-0 rounded-2xl p-6">
        <div className="text-lg font-bold text-gray-900">Meta Ads</div>
        <div className="mt-2 text-sm text-gray-600">
          Invia i lead estratti direttamente a Meta Ads per creare campagne di retargeting automatiche.
        </div>
      </Card>
      <Card className="bg-white shadow-2xl border-0 rounded-2xl p-6">
        <div className="text-lg font-bold text-gray-900">Google Ads</div>
        <div className="mt-2 text-sm text-gray-600">
          Sincronizza le liste e genera audience simili per aumentare conversioni e ridurre CPA.
        </div>
      </Card>
      <Card className="bg-white shadow-2xl border-0 rounded-2xl p-6">
        <div className="text-lg font-bold text-gray-900">Email Sender</div>
        <div className="mt-2 text-sm text-gray-600">
          Avvia sequenze email personalizzate e tracking automatico su apertura, click e reply.
        </div>
      </Card>
    </div>
  )
}
