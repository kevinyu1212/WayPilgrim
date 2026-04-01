'use client'

import { motion } from 'framer-motion'
import { BookOpen, CheckCircle2 } from 'lucide-react'

export default function QuickWidgets() {
  return (
    <div className="space-y-3">
      <div className="bg-white/60 p-4 rounded-2xl shine-border">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen size={18} className="text-green-800" />
          <h3 className="text-sm font-bold text-green-900">오늘의 통독</h3>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gold w-2/3" />
        </div>
        <p className="text-[10px] mt-2 text-gray-500">요한복음 14장 진행 중 (66%)</p>
      </div>
    </div>
  )
}