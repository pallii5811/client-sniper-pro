'use client'

import { Search, List, Plug, CreditCard, Target, Crown, LogOut } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { createClient } from '@/utils/supabase/client'

type SidebarProps = {
  credits: number
}

const Sidebar = ({ credits }: SidebarProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const planCredits = 100
  const creditsPercentage = Math.max(0, Math.min(100, (credits / planCredits) * 100))
  const onLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  const menuItems = [
    { icon: Search, label: 'Ricerca', href: '/dashboard' },
    { icon: List, label: 'Le mie Liste', href: '/dashboard/leads' },
    { icon: Plug, label: 'Integrazioni', href: '/dashboard/integrations' },
    { icon: CreditCard, label: 'Billing', href: '/dashboard/billing' },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-100 h-screen flex flex-col shadow-xl">
      {/* Logo */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-blue-600 rounded-xl flex items-center justify-center">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-900">Client Sniper</h1>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                type="button"
                onClick={() => router.push(item.href)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  pathname === item.href
                    ? 'bg-gradient-to-r from-violet-50 to-blue-50 text-violet-700 border border-violet-200'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Credits Progress */}
      <div className="p-4 border-t border-gray-100">
        <div className="bg-gradient-to-br from-violet-50 to-blue-50 rounded-xl p-4 border border-violet-200">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Crown className="w-4 h-4 text-violet-600" />
              <span className="text-sm font-semibold text-gray-900">Crediti Mensili</span>
            </div>
            <Badge variant="secondary" className="bg-violet-100 text-violet-700 border-violet-200">
              PRO
            </Badge>
          </div>
          
          <div className="mb-3">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600 font-medium">Crediti disponibili: {credits.toLocaleString()}</span>
              <span className="text-gray-500">{planCredits.toLocaleString()}</span>
            </div>
            <Progress value={creditsPercentage} className="h-2 bg-violet-100" />
          </div>
          
          <Button
            type="button"
            onClick={() => router.push('/dashboard/billing')}
            className="w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white font-semibold shadow-lg transition-all duration-200 cta-glow-hover"
          >
            Upgrade
          </Button>

          <div className="mt-4 pt-4 border-t border-violet-200/60">
            <Button
              type="button"
              variant="ghost"
              onClick={onLogout}
              className="w-full justify-center text-gray-700 hover:text-rose-700 hover:bg-rose-50/60"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
