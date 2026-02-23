'use client'

import { Bell } from 'lucide-react'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { createClient } from '@/utils/supabase/client'

type TopHeaderProps = {
  email: string
}

const TopHeader = ({ email }: TopHeaderProps) => {
  const router = useRouter()
  const handle = email.includes('@') ? email.split('@')[0] : email
  const initials = handle
    .split(/[\s._-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join('')

  const onLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <div className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8 shadow-sm">
      {/* Welcome Message */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Welcome back, {handle}</h2>
        <p className="text-sm text-gray-500 mt-1">Troviamo nuovi clienti per la tua attività oggi</p>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <Button variant="ghost" size="sm" className="relative p-2 hover:bg-gray-50">
          <Bell className="w-5 h-5 text-gray-600" />
          <Badge className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full p-0 flex items-center justify-center">
            3
          </Badge>
        </Button>

        {/* User Avatar */}
        <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-900">{email}</p>
            <p className="text-xs text-gray-500">Account Pro</p>
          </div>

          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onLogout}
            className="p-2 hover:bg-rose-50 text-gray-600 hover:text-rose-700"
          >
            <LogOut className="w-4 h-4" />
          </Button>

          <Avatar className="w-10 h-10">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            <AvatarFallback className="bg-gradient-to-br from-violet-500 to-blue-500 text-white font-semibold">
              {initials || 'U'}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
