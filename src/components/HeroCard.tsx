'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronRight, Sparkles } from 'lucide-react'

const VERSE = {
  text: '내가 진실로 진실로 너희에게 이르노니 나를 믿는 자는 내가 하는 일을 그도 할 것이요 또한 그보다 큰 일도 하리니',
  reference: '요한복음 14:12',
  theme: '환희와 사명',
}

export default function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full overflow-hidden shine-border"
      style={{
        borderRadius: '24px',
        height: '420px',
        boxShadow: '0 20px 60px rgba(45,90,39,0.18), 0 4px 16px rgba(0,0,0,0.12)',
      }}
    >
      <Image
        src="/hero.jpeg"
        alt="환희 - 오늘의 말씀 배경"
        fill
        priority
        className="object-cover object-top"
        sizes="(max-width: 448px) 100vw, 448px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <motion.blockquote
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-white mb-3 leading-relaxed font-light text-[0.9rem]"
          style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}
        >
          "{VERSE.text}"
        </motion.blockquote>
        <div className="flex items-center justify-between">
          <span className="text-sm italic text-gold/90">— {VERSE.reference}</span>
        </div>
      </div>
    </motion.div>
  )
}