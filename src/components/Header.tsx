'use client'
import { User, LogIn, Menu } from 'lucide-react'

export default function Header({ isLoggedIn, onAuth }: { isLoggedIn: boolean, onAuth: () => void }) {
  return (
    <header className="h-20 border-b border-gray-50 flex items-center justify-center bg-white/90 backdrop-blur-xl sticky top-0 z-50 px-6">
      <div className="w-full max-w-[1280px] flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-pilgrim-green rounded-lg flex items-center justify-center text-white font-bold text-xl">W</div>
          <h1 className="font-serif-kr font-bold text-xl text-pilgrim-green hidden sm:block">WayPilgrim</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={onAuth} 
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
              isLoggedIn 
              ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
              : 'bg-pilgrim-green text-white hover:bg-opacity-90 shadow-lg shadow-pilgrim-green/20'
            }`}
          >
            {isLoggedIn ? (
              <>
                <User size={18} />
                <span className="text-sm font-medium">마이페이지</span>
              </>
            ) : (
              <>
                <LogIn size={18} />
                <span className="text-sm font-medium">시작하기</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}