'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroCard() {
  return (
    <div className="relative w-full h-[520px] sacred-arch overflow-hidden border-b-4 border-[var(--color-gold)]/20">
      <Image
        src="/hero.jpeg"
        alt="Sacred Space"
        fill
        className="object-cover brightness-90"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-green)] via-transparent to-transparent opacity-80" />
      
      <div className="absolute inset-0 p-10 flex flex-col justify-end items-center text-center space-y-6">
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="w-16 h-[1px] bg-[var(--color-gold)]"
        />
        <blockquote className="text-white/95 text-lg font-light leading-relaxed font-korean break-keep italic">
          "진리가 너희를 자유케 하리라"
        </blockquote>
        <p className="text-[var(--color-gold)] font-serif text-sm tracking-widest opacity-80 uppercase">
          John 8:32
        </p>
      </div>
    </div>
  )
}