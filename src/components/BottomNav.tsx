'use client'

import { motion } from 'framer-motion'
import { BookOpen, BookMarked, Users, Music2, Home } from 'lucide-react'

export default function BottomNav({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'bible', label: '성경', icon: BookOpen },
    { id: 'prayer', label: '기도', icon: BookMarked },
    { id: 'home', label: '홈', icon: Home },
    { id: 'community', label: '커뮤', icon: Users },
    { id: 'praise', label: '찬양', icon: Music2 },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-beige/80 backdrop-blur-lg border-t border-gold/20 pb-safe">
      <div className="flex justify-around items-center h-16">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center gap-1 ${activeTab === tab.id ? 'text-green-800' : 'text-gray-400'}`}
          >
            <tab.icon size={20} />
            <span className="text-[10px]">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}