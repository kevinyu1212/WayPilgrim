'use client'
import { UserCircle, Settings, Bell, ShieldCheck, X, LogOut, Heart, BookOpen, Star } from 'lucide-react'

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export default function Sidebar({ isOpen, onClose, onLogout }: SidebarProps) {
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/40 z-[100] backdrop-blur-sm" onClick={onClose} />}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white z-[101] shadow-2xl transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-xl font-bold font-serif-kr text-pilgrim-green">My Pilgrim</h3>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X size={24} /></button>
          </div>
          
          <nav className="flex-1 space-y-8">
            <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100">
              <p className="text-[10px] text-orange-400 uppercase tracking-widest mb-3 font-bold">Newcomer Guide</p>
              <button className="flex items-center gap-3 w-full text-orange-700 font-bold hover:translate-x-1 transition-transform">
                <Star size={18} fill="currentColor" /> 신앙 첫걸음 가이드
              </button>
            </div>

            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-4">Activity</p>
              <div className="space-y-4">
                <button className="flex items-center gap-4 w-full text-gray-700 hover:text-pilgrim-green transition-colors"><BookOpen size={20} /> 내 묵상 기록</button>
                <button className="flex items-center gap-4 w-full text-gray-700 hover:text-pilgrim-green transition-colors"><Heart size={20} /> 관심 있는 사역</button>
              </div>
            </div>
          </nav>

          <button onClick={onLogout} className="mt-auto flex items-center justify-center gap-2 w-full py-4 bg-gray-50 text-gray-500 rounded-2xl hover:bg-red-50 hover:text-red-500 transition-all">
            <LogOut size={18} /> 로그아웃
          </button>
        </div>
      </div>
    </>
  )
}