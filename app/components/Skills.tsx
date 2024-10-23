'use client'

import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa6'
import { SiFirebase, SiCplusplus, SiGnubash } from 'react-icons/si'

const skills = [
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <FaJs />, name: 'JavaScript' },
  { icon: <FaReact />, name: 'React' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <FaGitAlt />, name: 'Git' },
  { icon: <SiFirebase />, name: 'Firebase' },
  { icon: <SiCplusplus />, name: 'C++' },
  { icon: <SiGnubash />, name: 'Bash' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800 bg-opacity-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-100" data-aos="fade-up">Skills</h2>
        <div className="relative">
          <div className="flex animate-scroll">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center mx-8"
              >
                <div className="text-5xl text-gray-100 mb-2">{skill.icon}</div>
                <span className="text-sm text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}