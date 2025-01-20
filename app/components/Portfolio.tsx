'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaQuoteLeft } from 'react-icons/fa6'
import { SiFirebase, SiCplusplus, SiGnubash, SiFlutter, SiDart, SiGooglegemini } from 'react-icons/si'
import { FaGithubAlt } from 'react-icons/fa'

const skills = [
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <FaJs />, name: 'JavaScript' },
  { icon: <FaReact />, name: 'React' },
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <SiFlutter />, name: 'Flutter' },
  { icon: <SiDart />, name: 'Dart' },
  { icon: <FaGitAlt />, name: 'Git' },
  { icon: <SiFirebase />, name: 'Firebase' },
  { icon: <SiCplusplus />, name: 'C++' },
  { icon: <SiGnubash />, name: 'Bash' },
  { icon: <SiGooglegemini />, name: 'Gemini' },
  { icon: <FaGithubAlt />, name: 'Github' },
]

const projects = [
  {
    title: 'Habitos',
    description: 'A feature-rich to-do list application built with Flutter.',
    image: '/images/todo.png',
    link: 'https://habitos-pi.vercel.app/'
  },
  {
    title: 'Weatheria',
    description: 'A real-time weather application with a clean UI.',
    image: '/images/weather-app.jpg',
    link: 'https://weatheria-beta.vercel.app/'
  },
  {
    title: 'Naya Dokan',
    description: 'A modern e-commerce platform with comprehensive features.',
    image: '/images/ecom.png',
    link: 'https://github.com/SudipThapa-Arc/Naya-Dokan'
  },
  {
    title: 'EON AI',
    description: 'An AI-powered image generation tool.',
    image: '/images/eon-ai.jpg',
    link: 'https://eon-woad.vercel.app/'
  },
  {
    title: 'Date Quest',
    description: 'A fun, interactive site for asking someone out.',
    image: '/images/asking-out.jpg',
    link: 'https://date-quest-omega.vercel.app/'
  },
  {
    title: 'Netflix UI Clone',
    description: 'A faithful recreation of the Netflix user interface.',
    image: '/images/netflix-clone.jpg',
    link: 'https://github.com/SudipThapa-Arc/Netflix-Clone'
  }
]

const testimonials = [
  {
    name: "Monkey D. Luffy",
    post: "Captain of the Straw Hat Pirates",
    role: "Future Pirate King",
    text: "Sudip helped us build an amazing app to track our adventures and find the One Piece! His code is as strong as my Gear 5! Shishishi!",
    image: "/images/luffy.jpg"
  },
  {
    name: "Roronoa Zoro",
    post: "First Mate & Swordsman",
    role: "World's Strongest Swordsman",
    text: "Despite my tendency to get lost in code repositories, Sudip's clean architecture and clear documentation always helped me find my way. His dedication to perfection matches my path to becoming the greatest swordsman.",
    image: "/images/zoro.jpg"
  },
  {
    name: "Nami",
    post: "Navigator & Cartographer",
    role: "Master Navigator",
    text: "Sudip's attention to detail in UI design is as precise as my navigation skills. His projects are worth every berry we invested! The weather app he built is particularly impressive.",
    image: "/images/namiswan.jpg"
  },
  {
    name: "Sanji",
    post: "Chef of the Straw Hat Pirates",
    role: "Master Chef",
    text: "His code is as refined as my cooking. The recipe management system he developed for the Baratie would make even old man Zeff proud. Clean, efficient, and perfectly seasoned with features!",
    image: "/images/sanji.jpg"
  }
]

const articles = [
  // Flutter & Dart Articles
  {
    title: "Flutter State Management with Riverpod",
    excerpt: "A comprehensive guide to managing state in Flutter applications using Riverpod, including practical examples and best practices.",
    date: "2024-03-15",
    link: "https://medium.com/@sudipthapa/flutter-state-management-with-riverpod",
    category: "Flutter"
  },
  {
    title: "Building Custom Animations in Flutter",
    excerpt: "Learn how to create stunning custom animations in Flutter using AnimationController and Transform widgets.",
    date: "2024-03-10",
    link: "https://medium.com/@sudipthapa/custom-animations-flutter",
    category: "Flutter"
  },
  // React & JavaScript Articles
  {
    title: "Advanced React Patterns",
    excerpt: "Deep dive into advanced React patterns including compound components, render props, and custom hooks.",
    date: "2024-03-08",
    link: "https://medium.com/@sudipthapa/advanced-react-patterns",
    category: "React"
  },
  {
    title: "Modern JavaScript Features",
    excerpt: "Exploring the latest JavaScript features and how to use them effectively in your projects.",
    date: "2024-03-05",
    link: "https://medium.com/@sudipthapa/modern-javascript",
    category: "JavaScript"
  },
  // Node.js Articles
  {
    title: "Building RESTful APIs with Node.js",
    excerpt: "Complete guide to building scalable RESTful APIs using Node.js, Express, and MongoDB.",
    date: "2024-02-28",
    link: "https://medium.com/@sudipthapa/nodejs-rest-apis",
    category: "Node.js"
  },
  {
    title: "Node.js Performance Optimization",
    excerpt: "Tips and techniques for optimizing Node.js applications for better performance.",
    date: "2024-02-25",
    link: "https://medium.com/@sudipthapa/nodejs-optimization",
    category: "Node.js"
  },
  // Firebase Articles
  {
    title: "Firebase Authentication Deep Dive",
    excerpt: "Implementing secure authentication in web applications using Firebase Auth.",
    date: "2024-02-20",
    link: "https://medium.com/@sudipthapa/firebase-auth",
    category: "Firebase"
  },
  {
    title: "Real-time Data with Firebase",
    excerpt: "Building real-time applications using Firebase Realtime Database and Cloud Firestore.",
    date: "2024-02-15",
    link: "https://medium.com/@sudipthapa/firebase-realtime",
    category: "Firebase"
  },
  // CSS Articles
  {
    title: "Modern CSS Layout Techniques",
    excerpt: "Mastering CSS Grid, Flexbox, and modern layout patterns for responsive design.",
    date: "2024-02-10",
    link: "https://medium.com/@sudipthapa/modern-css",
    category: "CSS"
  },
  {
    title: "CSS Animation Masterclass",
    excerpt: "Creating smooth and performant animations using CSS keyframes and transitions.",
    date: "2024-02-05",
    link: "https://medium.com/@sudipthapa/css-animations",
    category: "CSS"
  },
  // Git Articles
  {
    title: "Git Workflow Best Practices",
    excerpt: "Professional Git workflows and best practices for team collaboration.",
    date: "2024-02-01",
    link: "https://medium.com/@sudipthapa/git-workflow",
    category: "Git"
  },
  {
    title: "Advanced Git Commands",
    excerpt: "Deep dive into powerful Git commands and features for better version control.",
    date: "2024-01-28",
    link: "https://medium.com/@sudipthapa/advanced-git",
    category: "Git"
  }
]

export default function Portfolio() {
  const [currentTime, setCurrentTime] = useState('')
  
  // Add refs for sections we want to animate
  const sectionRefs = {
    skills: useRef(null),
    projects: useRef(null),
    testimonials: useRef(null),
    articles: useRef(null),
    contact: useRef(null)
  }

  useEffect(() => {
    // Time update logic remains the same
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }))
    }
    const timer = setInterval(updateTime, 1000)

    // Enhanced intersection observer with staggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the fade-in animation
            entry.target.classList.add('animate-fade-in-up')
            
            // Add staggered animations to children
            const children = entry.target.querySelectorAll('.stagger-animation')
            children.forEach((child, index) => {
              ;(child as HTMLElement).style.animationDelay = `${index * 0.1}s`
              child.classList.add('animate-fade-in-up')
            })
            
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    )

    // Observe all section refs
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => {
      clearInterval(timer)
      observer.disconnect()
    }
  }, [sectionRefs])

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-90 bg-gray-900 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">ST</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a>
            <a href="#articles" className="hover:text-blue-400 transition-colors">Articles</a>
          </nav>
          <div className="flex items-center space-x-4">
            <span className="text-sm">{currentTime}</span>
            <a
              href="mailto:js7096785@gmail.com?subject=Project%20Inquiry&body=Hi%20Sudip,%0D%0A%0D%0AI'd%20like%20to%20discuss%20a%20project%20with%20you.%0D%0A%0D%0AProject%20Details:%0D%0A-%20%0D%0A%0D%0ABest%20regards,"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Start a Project
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section 
        ref={sectionRefs.skills}
        id="skills" 
        className="py-20 bg-gray-800 bg-opacity-50 opacity-0 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Skills</h2>
          <div className="relative">
            <div className="flex space-x-8 animate-scroll">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center flex-shrink-0"
                >
                  <div className="text-5xl text-gray-100 mb-2">
                    {skill.icon}
                  </div>
                  <span className="text-sm text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        ref={sectionRefs.projects}
        id="projects" 
        className="py-20 bg-gray-900 opacity-0"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="stagger-animation opacity-0 bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
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

      {/* Testimonials Section */}
      <section 
        ref={sectionRefs.testimonials}
        id="testimonials" 
        className="py-20 bg-gray-800 opacity-0"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Clients Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="stagger-animation opacity-0 bg-gray-700/50 p-8 rounded-xl backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75" />
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="relative rounded-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-lg text-white">{testimonial.name}</div>
                    <div className="text-sm text-blue-400">{testimonial.role}</div>
                    <div className="text-sm text-gray-400">{testimonial.post}</div>
                  </div>
                </div>
                <FaQuoteLeft className="text-blue-400 text-2xl mb-4 opacity-50" />
                <p className="text-gray-300 leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section 
        ref={sectionRefs.articles}
        id="articles" 
        className="py-20 bg-gray-900 opacity-0"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <a
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="stagger-animation opacity-0 bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-750"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm text-blue-400">{article.date}</span>
                  <svg 
                    className="w-5 h-5 text-gray-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{article.title}</h3>
                <p className="text-gray-400">{article.excerpt}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        ref={sectionRefs.contact}
        id="contact" 
        className="py-20 bg-gray-800 opacity-0"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Get in Touch</h2>
          <div className="flex flex-col items-center space-y-6">
            <a
              href="https://www.linkedin.com/in/sudip-thapa-9599371b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="stagger-animation opacity-0 inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </a>
            <a
              href="mailto:js7096785@gmail.com"
              className="stagger-animation opacity-0 inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md transition-all duration-300 ease-in-out hover:bg-red-700 hover:scale-105"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}