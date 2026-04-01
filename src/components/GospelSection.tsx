'use client'
import { Sparkles, ArrowRight } from 'lucide-react'

export default function GospelSection() {
  return (
    <div className="bg-gradient-to-br from-pilgrim-green to-[#1a3a16] rounded-[2.5rem] p-8 text-white shadow-xl mb-12">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles size={20} className="text-pilgrim-gold" />
        <span className="text-xs font-bold tracking-widest uppercase opacity-80">Welcome, New Pilgrim</span>
      </div>
      <h3 className="text-2xl font-bold font-serif-kr mb-3 leading-tight">
        당신은 혼자가 아닙니다.<br/>오늘, 당신을 향한 사랑의 소식.
      </h3>
      <p className="text-sm opacity-70 mb-6 font-light leading-relaxed">
        신앙생활이 처음이신가요? 세상을 이길 힘과 평안을 주는 기쁜 소식(복음)을 지금 확인해보세요.
      </p>
      <button className="flex items-center gap-2 bg-white text-pilgrim-green px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform">
        복음 알아보기 <ArrowRight size={16} />
      </button>
    </div>
  )
}