import Image from "next/legacy/image"

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
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 ease-in-out hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-center p-4">{project.description}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 bg-teal-600 text-white rounded-md transition-colors duration-300 hover:bg-teal-700"
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