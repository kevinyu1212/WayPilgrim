'use client'
const EMOTIONS = [
  { id: 'peace', label: '평안', symbol: '𐂂' },
  { id: 'anxiety', label: '불안', symbol: '⚓︎' },
  { id: 'gratitude', label: '감사', symbol: '❦' },
  { id: 'sadness', label: '슬픔', symbol: '💧' },
  { id: 'hope', label: '소망', symbol: '☀︎' },
  { id: 'love', label: '사랑', symbol: '❤︎' }
]

export default function EmotionGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {EMOTIONS.map((e) => (
        <button key={e.id} className="h-24 flex flex-col items-center justify-center space-y-2 rounded-2xl prayer-glass transition-all hover:bg-white/60 group">
          <span className="text-xl text-[var(--color-green)]/40 group-hover:text-[var(--color-gold)]">{e.symbol}</span>
          <span className="text-xs text-[var(--color-text-muted)] font-medium">{e.label}</span>
        </button>
      ))}
    </div>
  )
}