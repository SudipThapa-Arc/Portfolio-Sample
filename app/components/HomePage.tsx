import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [opacity, setOpacity] = useState(1);

  // Adjust opacity based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = 1 - scrollPosition / 500; // Adjust the denominator for more or less fade
      setOpacity(newOpacity > 0 ? newOpacity : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900"
        style={{
          backgroundImage: 'url(/background.jpg)', // Your background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: opacity,
        }}
      >
        <div className="container mx-auto text-center">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <Image
              src="/zoro.png"
              alt="Zoro"
              width={128}
              height={128}
              className="rounded-full"
            />
            <span className="absolute bottom-0 right-0 bg-green-500 text-xs text-white px-2 py-1 rounded-full">
              Verified Expert
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-4">Full Stack Developer</h1>
          <p className="text-xl text-gray-300 mb-8">
            Over 5 years of experience crafting exceptional websites and robust applications
          </p>
        </div>
      </section>
    </div>
  )
}
