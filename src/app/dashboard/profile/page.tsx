'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { useDashboard } from '@/components/DashboardContext'

export default function ProfilePage() {
  const router = useRouter()
  const { email } = useDashboard()

  const onLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <Card className="bg-white shadow-2xl border-0 rounded-2xl p-8">
      <div className="text-2xl font-bold text-gray-900">Profilo</div>
      <div className="mt-2 text-gray-600">{email}</div>

      <div className="mt-6">
        <Button variant="destructive" onClick={onLogout}>
          Logout
        </Button>
      </div>
    </Card>
  )
}
