import { CheckCircle2, Circle, BookOpen, Plus } from 'lucide-react'
export default function RecordList() {
  return (
    <div className="space-y-4">
      <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-4"><BookOpen size={18} className="text-[var(--c-green)]" /><span className="text-sm font-bold">성경 통독 진도</span></div>
        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden"><div className="bg-[var(--c-green)] h-full w-[66%] transition-all duration-1000" /></div>
        <p className="text-[10px] text-gray-400 mt-3 text-right font-serif-kr">요한복음 14/21장 완료 (66%)</p>
      </div>
      <div className="space-y-3">
        {[{t:'아침 묵상 기도', d:true}, {t:'점심 중보 기도', d:true}].map((p, i) => (
          <div key={i} className="flex items-center justify-between p-5 bg-white/70 rounded-[24px] border border-white shadow-sm">
            <div className="flex items-center gap-3">{p.d ? <CheckCircle2 size={20} className="text-[var(--c-green)]" /> : <Circle size={20} className="text-gray-200" />}<span className="text-sm font-medium text-gray-700">{p.t}</span></div>
          </div>
        ))}
        <button className="w-full py-4 rounded-[24px] border-2 border-dashed border-[var(--c-gold)]/30 text-[var(--c-gold)] text-xs font-bold flex items-center justify-center gap-2 bg-white/30 hover:bg-white/50 transition-all"><Plus size={14}/> 저녁 기도 기록하기</button>
      </div>
    </div>
  )
}