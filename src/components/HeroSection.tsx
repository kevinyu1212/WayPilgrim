import { ChevronRight } from 'lucide-react'
export default function HeroSection() {
  return (
    <section className="relative h-[82vh] w-full bg-[var(--c-bg-deep)] flex items-end pb-20 px-8">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=2071')] bg-cover bg-center opacity-60" />
      <div className="relative z-10 w-full">
        <p className="text-[var(--c-gold)] font-serif italic mb-3">Today's Word</p>
        <h1 className="text-2xl text-white font-serif-kr leading-relaxed mb-8 break-keep">"내가 진실로 너희에게 이르노니 나를 믿는 자는 내가 하는 일을 그도 할 것이요"</h1>
        <div className="flex justify-between items-center">
          <span className="text-white/40 text-xs">— 요한복음 14:12</span>
          <button className="bg-[var(--c-green)] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-xl flex items-center gap-1 hover:bg-[var(--c-green-mid)] transition-colors">묵상하기 <ChevronRight size={12} /></button>
        </div>
      </div>
    </section>
  )
}