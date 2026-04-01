'use client'
import { useEffect, useState } from 'react'
import { Search, Bell, Menu } from 'lucide-react'
export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const el = document.getElementById('scroll-root')
    const onScroll = () => setScrolled((el?.scrollTop || 0) > 40)
    el?.addEventListener('scroll', onScroll); return () => el?.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`fixed top-0 w-full max-w-[480px] z-50 flex justify-between items-center px-6 h-16 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="flex flex-col">
        <span className={`font-bold text-lg leading-none ${scrolled ? 'text-black' : 'text-white'}`}>웨이필그림</span>
        <span className={`text-[8px] tracking-widest uppercase mt-1 ${scrolled ? 'text-[var(--c-gold)]' : 'text-white/70'}`}>Way Pilgrim</span>
      </div>
      <div className={`flex gap-3 ${scrolled ? 'text-gray-600' : 'text-white'}`}><Search size={20} /> <Bell size={20} /> <Menu size={20} /></div>
    </header>
  )
}