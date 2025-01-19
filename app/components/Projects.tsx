'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const projects = [
  {
    title: 'Weather App',
    description: 'A real-time weather application with a clean UI.',
    image: '/images/weather-app.jpg',
    link: 'https://weatheria-beta.vercel.app/'
  },
  {
    title: 'EON AI Image Generator',
    description: 'An AI-powered image generation tool.',
    image: '/images/eon-ai.jpg',
    link: 'https://eon-woad.vercel.app/'
  },
  {
    title: 'Naya Dokan',
    description: 'A modern e-commerce platform with comprehensive features.',
    image: '/images/naya-dokan.jpg',
    link: 'https://github.com/SudipThapa-Arc/Naya-Dokan'
  },
  {
    title: 'Asking Out Site',
    description: 'A fun, interactive site for asking someone out.',
    image: '/images/asking-out.jpg',
    link: 'https://gooutwithme.freewebhostmost.com/'
  },
  {
    title: 'Netflix UI Clone',
    description: 'A faithful recreation of the Netflix user interface.',
    image: '/images/netflix-clone.jpg',
    link: 'https://github.com/SudipThapa-Arc/Netflix-Clone'
  }
]

export default function Projects() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        const projectsTop = projectsSection.offsetTop
        setIsScrolled(scrollPosition > projectsTop - window.innerHeight / 2)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-100" data-aos="fade-up">Projects</h2>
        <div className={`transition-all duration-1000 ease-in-out ${isScrolled ? 'grid grid-cols-1 md:grid-cols-2 gap-8' : 'flex overflow-x-auto pb-8'}`}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-500 ease-in-out ${
                isScrolled ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'
              } ${!isScrolled ? 'flex-shrink-0 w-80 mr-6' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={225}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-100">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md transition-colors duration-300 hover:bg-blue-700"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}