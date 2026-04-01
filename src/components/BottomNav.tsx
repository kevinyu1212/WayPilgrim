'use client'
import { Home, BookOpen, PenLine, Users, Music2 } from 'lucide-react'

export default function BottomNav({ activeTab, onTabChange }: any) {
  const tabs = [
    { id: 'bible', i: BookOpen, l: '성경' },
    { id: 'prayer', i: PenLine, l: '기도' },
    { id: 'home', i: Home, l: '홈' },
    { id: 'community', i: Users, l: '교제' },
    { id: 'praise', i: Music2, l: '찬양' }
  ]

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] h-20 bg-white/90 backdrop-blur-xl border-t border-gray-100 flex items-center justify-around px-6 z-50 shadow-[0_-10px_25px_rgba(0,0,0,0.03)]">
      {tabs.map((t) => {
        const isActive = activeTab === t.id
        return (
          <button 
            key={t.id} 
            onClick={() => onTabChange(t.id)} 
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${isActive ? 'text-[#2D5A27] scale-110' : 'text-gray-300'}`}
          >
            <t.i size={24} strokeWidth={isActive ? 2.5 : 1.5} />
            <span className={`text-[10px] font-medium transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`}>{t.l}</span>
          </button>
        )
      })}
    </nav>
  )
}