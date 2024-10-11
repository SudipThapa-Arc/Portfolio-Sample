'use client'

import { useEffect, useState } from 'react'

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React JS', level: 75 },
  { name: 'Node JS', level: 70 },
  { name: 'Git/GitHub', level: 85 },
  { name: 'Firebase', level: 65 },
  { name: 'C/C++', level: 60 },
  { name: 'Bash Scripting', level: 55 },
]

export default function Skills() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="skills" className="py-20 bg-gray-800 bg-opacity-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-100" data-aos="fade-up">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg p-6 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-lg font-semibold mb-2 text-gray-100">{skill.name}</h3>
              <div className="skill-bar">
                <div 
                  className="skill-progress"
                  style={{ width: animate ? `${skill.level}%` : '0%' }}
                ></div>
              </div>
              <span className="text-sm text-gray-400 mt-1">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}