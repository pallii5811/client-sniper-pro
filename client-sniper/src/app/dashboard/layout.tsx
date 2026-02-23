import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import DashboardLayoutClient from '@/components/DashboardLayoutClient'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('credits')
    .eq('id', user.id)
    .single()

  const credits = typeof profile?.credits === 'number' ? profile.credits : 0

  return (
    <DashboardLayoutClient userId={user.id} email={user.email ?? ''} initialCredits={credits}>
      {children}
    </DashboardLayoutClient>
  )
}
