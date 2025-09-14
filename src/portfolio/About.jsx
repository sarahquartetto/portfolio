import React from 'react'
import { Code, Users } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import workImg from '../assets/Work.jpg'

export default function About() {
  const { t } = useLanguage()

  const highlightsList = [
    { icon: Code, title: t.about.highlights.cleanCode, description: 'Writing maintainable, efficient code that stands the test of time' },
    { icon: Users, title: t.about.highlights.collaboration, description: 'Working effectively with teams in a positive atmosphere' },
  ]

  return (
    <section id="about" className="py-24 bg-stone-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-amber-200 to-stone-300 shadow-2xl">
              <img src={workImg} alt="Sarah working" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-stone-400/20 rounded-full blur-xl"></div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-stone-800">{t.about.title}</h2>
              <div className="space-y-4 text-lg text-stone-600 leading-relaxed">
                <p>
                  {t.about.paragraph1}
                </p>
                <p>
                  {t.about.paragraph2}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {highlightsList.map((item, index) => (
                <div key={index} className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-stone-200/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 rounded-lg bg-amber-100">
                      <item.icon className="w-5 h-5 text-amber-700" />
                    </div>
                    <h3 className="font-semibold text-stone-800">{item.title}</h3>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
