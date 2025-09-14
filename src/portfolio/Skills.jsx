import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

// Import icons
import javascriptIcon from '../assets/web dev icons/javascript-logo-javascript-icon-transparent-free-png.webp'
import typescriptIcon from '../assets/web dev icons/Typescript.png'
import reactIcon from '../assets/web dev icons/React-icon.svg.png'
import nodeIcon from '../assets/web dev icons/node.png'
import postgresqlIcon from '../assets/web dev icons/free-postgresql-icon-svg-download-png-1175120.webp'
import mongodbIcon from '../assets/web dev icons/mongodb.png'
import restApiIcon from '../assets/web dev icons/free-rest-api-blue-logo-icon-22099-thumb.png'
import cssIcon from '../assets/web dev icons/css.png'
import htmlIcon from '../assets/web dev icons/hmtl.png'
import { Bold } from 'lucide-react'

export default function Skills() {
  const { t } = useLanguage()

  const tools = [
    { name: 'JavaScript', icon: javascriptIcon },
    { name: 'TypeScript', icon: typescriptIcon },
    { name: 'React', icon: reactIcon },
    { name: 'Node', icon: nodeIcon },
    { name: 'PostgreSQL', icon: postgresqlIcon },
    { name: 'MongoDB', icon: mongodbIcon },
    { name: 'REST APIs', icon: restApiIcon },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-4">{t.skills.title}</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: t.skills.description }}></p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {/* Skills in a single line with floating animation */}
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              title={tool.name}
              className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-white/70 backdrop-blur-sm border border-stone-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center animate-float"
              style={{
                animationDelay: `${index * 0.5}s`
              }}
            >
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 object-contain"
              />
            </div>
          ))}
        </div>

        <style>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
          }
          .animate-float { 
            animation: float 4s ease-in-out infinite; 
          }
        `}</style>
      </div>
    </section>
  )
}
