'use client'

import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import BackgroundElements from './components/BackgroundElements'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#3f3a57] text-gray-100 overflow-hidden">
      <BackgroundElements />
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto">
          <Hero />
          <Features />
        </main>
        <Footer />
      </div>
    </div>
  )
}

