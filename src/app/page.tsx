'use client'
import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import MinistryGrid from '@/components/MinistryGrid'
import RecordList from '@/components/RecordList'
import BottomNav from '@/components/BottomNav'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import GospelSection from '@/components/GospelSection'

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleAuthAction = () => {
    if (!isLoggedIn) setIsLoggedIn(true)
    else setIsSidebarOpen(true)
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'bible': return <div className="p-8 text-center"><h2 className="text-2xl font-bold font-serif-kr">성경 읽기</h2></div>
      case 'pray': return <div className="p-8 text-center"><h2 className="text-2xl font-bold font-serif-kr">기도하기</h2></div>
      case 'home':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 animate-in fade-in duration-700">
            <div className="lg:col-span-7">
              <GospelSection /> { /* 복음 전파 섹션 추가 */ }
              <div className="mb-8"><h2 className="text-2xl font-bold text-gray-900">Ministries</h2></div>
              <MinistryGrid />
            </div>
            <div className="lg:col-span-5">
              <div className="mb-8"><h2 className="text-2xl font-bold text-gray-900">Pilgrim Records</h2></div>
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100"><RecordList /></div>
            </div>
          </div>
        )
      case 'community': return <div className="p-8 text-center"><h2 className="text-2xl font-bold font-serif-kr">교제하기</h2></div>
      case 'music': return <div className="p-8 text-center"><h2 className="text-2xl font-bold font-serif-kr">찬양하기</h2></div>
      default: return null
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Header isLoggedIn={isLoggedIn} onAuth={handleAuthAction} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} onLogout={() => { setIsLoggedIn(false); setIsSidebarOpen(false); }} />
      <div className="page-wrapper pb-32">
        {activeTab === 'home' && <section className="w-full max-w-[1280px] mx-auto"><HeroSection /></section>}
        <div className="responsive-container mt-12">{renderTabContent()}</div>
        <div className="max-w-[1280px] mx-auto mt-20"><Footer /></div>
      </div>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </main>
  )
}