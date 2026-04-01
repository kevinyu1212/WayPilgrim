'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EMOTIONS = [
  { id: 'peace', label: '평안', emoji: '🕊️', verse: '빌 4:7' },
  { id: 'anxiety', label: '불안', emoji: '🌊', verse: '마 6:34' },
  { id: 'gratitude', label: '감사', emoji: '✨', verse: '살전 5:18' },
  { id: 'sadness', label: '슬픔', emoji: '💧', verse: '시 34:18' },
  { id: 'joy', label: '기쁨', emoji: '☀️', verse: '시 16:11' },
  { id: 'tired', label: '지침', emoji: '🌿', verse: '마 11:28' },
]

export default function EmotionGrid() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="grid grid-cols-3 gap-3">
      {EMOTIONS.map((e) => (
        <button
          key={e.id}
          onClick={() => setSelected(selected === e.id ? null : e.id)}
          className={`flex flex-col items-center p-4 rounded-2xl transition-all ${selected === e.id ? 'bg-green-100 ring-2 ring-green-600' : 'bg-white/50'}`}
        >
          <span className="text-2xl mb-1">{e.emoji}</span>
          <span className="text-xs font-medium">{e.label}</span>
        </button>
      ))}
    </div>
  )
}