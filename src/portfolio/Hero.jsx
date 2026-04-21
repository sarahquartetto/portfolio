import React from 'react'
import { ArrowDown, MapPin } from 'lucide-react'
import sarahImg from '../assets/Sarah2.jpg'
import { useLanguage } from '../contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-stone-50">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-stone-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10 relative">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-stone-600">
                <MapPin className="w-4 h-4" />
                <span>{t.hero?.available || 'Available for freelance'}</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-stone-800 leading-tight">
                {t.hero?.greeting || 'Hi, I\'m'}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-stone-700">{t.hero?.name || 'Sarah'}</span>
              </h1>
              <p className="text-xl lg:text-2xl text-stone-600 max-w-2xl leading-relaxed">
                {t.hero?.description || 'A Swiss web developer crafting beautiful, functional digital experiences with modern technologies.'}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                {t.hero?.viewWork || 'View My Work'}
                <ArrowDown className="ml-2 w-4 h-4" />
              </button>
              <button
                className="border-2 border-stone-300 hover:border-amber-600 text-stone-700 hover:text-amber-700 px-8 py-3 rounded-full transition-all duration-300"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.hero?.getInTouch || 'Get In Touch'}
              </button>
            </div>

          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-amber-200 to-stone-300 flex items-center justify-center shadow-2xl">
                <img
                  src={sarahImg}
                  alt="Sarah Quartetto"
                  className="w-72 h-72 lg:w-88 lg:h-88 rounded-full object-cover shadow-xl border-4 border-white grayscale"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-stone-400 rounded-full animate-bounce delay-500"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
