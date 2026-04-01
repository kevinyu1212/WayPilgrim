'use client'

import { useState } from 'react'
import HeroCard from '@/components/HeroCard'
import EmotionGrid from '@/components/EmotionGrid'
import QuickWidgets from '@/components/QuickWidgets'
import BottomNav from '@/components/BottomNav'

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <main className="min-h-screen pb-20 px-4 pt-8 max-w-md mx-auto">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-green-900">샬롬, 필그림</h1>
        <button className="text-xl">🔔</button>
      </header>

      <div className="space-y-8">
        <HeroCard />
        <EmotionGrid />
        <QuickWidgets />
      </div>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </main>
  )
}