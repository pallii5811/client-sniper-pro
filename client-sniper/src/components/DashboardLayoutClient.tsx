'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import TopHeader from '@/components/TopHeader'
import { DashboardProvider } from '@/components/DashboardContext'

type DashboardLayoutClientProps = {
  userId: string
  email: string
  initialCredits: number
  children: React.ReactNode
}

export default function DashboardLayoutClient({
  userId,
  email,
  initialCredits,
  children,
}: DashboardLayoutClientProps) {
  const [credits, setCredits] = useState<number>(initialCredits)

  return (
    <DashboardProvider value={{ userId, email, credits, setCredits }}>
      <div className="min-h-screen bg-slate-50">
        <div className="flex">
          <Sidebar credits={credits} />

          <div className="flex-1">
            <TopHeader email={email} />
            <div className="p-8">{children}</div>
          </div>
        </div>
      </div>
    </DashboardProvider>
  )
}
