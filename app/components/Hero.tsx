"use client"; // Make this a Client Component

import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden"
      style={{ backgroundSize: '200% 200%' }}
    >
      <div className="text-center" data-aos="fade-up">
        <h1 className="text-6xl font-bold mb-4 tracking-wide">Sudip Thapa</h1>
        <p className="text-2xl mb-8">Design, Dev & Wizardry</p>
        <a
          href="#projects"
          className="inline-block px-8 py-3 text-lg font-semibold text-white bg-teal-600 rounded-lg transition-all duration-300 ease-in-out hover:bg-teal-700 hover:scale-105"
        >
          See My Work
        </a>
      </div>
    </section>
  );
}
