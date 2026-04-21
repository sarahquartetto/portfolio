import React from 'react'
import projects from '../projectData.js'
import { ExternalLink, Github, Tag } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Projects() {
  const { t, language } = useLanguage()

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-4">{t.projects.title}</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-8">{t.projects.subtitle}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            (() => {
              const title = project?.title?.[language] ?? project?.title?.en ?? project?.title
              const description = project?.description?.[language] ?? project?.description?.en ?? project?.description

              return (
            <div
              key={project.slug}
              className={`group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-stone-200/50 ${project.demo ? 'cursor-pointer' : ''}`}
              role={project.demo ? 'link' : undefined}
              tabIndex={project.demo ? 0 : undefined}
              onClick={() => {
                if (!project.demo) return
                window.open(project.demo, '_blank', 'noopener,noreferrer')
              }}
              onKeyDown={(e) => {
                if (!project.demo) return
                if (e.key !== 'Enter' && e.key !== ' ') return
                e.preventDefault()
                window.open(project.demo, '_blank', 'noopener,noreferrer')
              }}
              aria-label={project.demo ? `${title} — live demo` : undefined}
            >
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-stone-200 to-amber-100 relative">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl text-stone-400">🚀</div>
                  </div>
                )}
                {/* Removed dark hover overlay */}
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3 flex-1">
                    <h3 className="text-2xl font-bold text-stone-800 group-hover:text-amber-700 transition-colors">{title}</h3>
                    <p className="text-stone-600 leading-relaxed">{description}</p>
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex items-center gap-2 flex-wrap">
                        <Tag className="w-4 h-4 text-stone-500" />
                        {project.tags.map((tech, idx) => (
                          <span key={idx} className="inline-flex items-center rounded-full bg-stone-100 text-stone-700 px-2.5 py-1 text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-full bg-stone-100 hover:bg-amber-100 text-stone-600 hover:text-amber-700 transition-all duration-300 hover:scale-110"
                        aria-label="Live demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-full bg-stone-100 hover:bg-amber-100 text-stone-600 hover:text-amber-700 transition-all duration-300 hover:scale-110"
                        aria-label="GitHub repo"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
              )
            })()
          ))}
        </div>
      </div>
    </section>
  )
}
