'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [opacity, setOpacity] = useState(1);

  // Adjust opacity based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = 1 - scrollPosition / 500;
      setOpacity(newOpacity > 0 ? newOpacity : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark">
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 to-dark/70" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8 relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full blur opacity-75 animate-pulse" />
            <Image
              src="/zoro.png"
              alt="Profile"
              width={150}
              height={150}
              priority
              className="relative rounded-full border-2 border-white/10"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent animate-fade-in drop-shadow-lg">
            Designer, Dev & Wizard
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto animate-slide-up drop-shadow-lg">
            Crafting exceptional digital experiences through innovative design and development
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-300 backdrop-blur-sm shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <svg 
            className="w-6 h-6 text-white"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>
    </div>
  )
}
