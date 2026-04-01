import { Feather, Waves, Sparkles, Leaf, Moon, Flame } from 'lucide-react'
const ITEMS = [{i:Feather,l:'평안',s:'Shalom'},{i:Waves,l:'불안',s:'Anxious'},{i:Sparkles,l:'감사',s:'Grateful'},{i:Leaf,l:'치유',s:'Healing'},{i:Moon,l:'안식',s:'Rest'},{i:Flame,l:'열정',s:'Passion'}]
export default function MinistryGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {ITEMS.map((m, i) => (
        <div key={i} className="flex flex-col items-center p-5 bg-white border border-gray-100 rounded-[32px] shadow-sm hover:shadow-md transition-all cursor-pointer">
          <div className="w-12 h-12 bg-[#EBF2EA] rounded-2xl flex items-center justify-center mb-3 text-[var(--c-green)]"><m.i size={24} /></div>
          <span className="text-xs font-bold text-gray-800">{m.l}</span>
          <span className="text-[9px] text-gray-400 tracking-widest uppercase mt-1">{m.s}</span>
        </div>
      ))}
    </div>
  )
}