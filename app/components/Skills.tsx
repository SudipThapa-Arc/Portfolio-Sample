const skills = [
    'HTML', 'CSS', 'JavaScript', 'Git/GitHub', 'React JS', 'Firebase',
    'Node JS', 'C/C++', 'Bash Scripting'
  ]
  
  export default function Skills() {
    return (
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow-sm transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-lg font-semibold text-center">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }