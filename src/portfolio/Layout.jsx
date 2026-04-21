import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Home, User, Briefcase, Mail, Code } from 'lucide-react'
import LanguageSwitcher from '../contexts/LanguageSwitcher'
import { useLanguage } from '../contexts/LanguageContext'

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { t } = useLanguage()

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { name: t.nav.home, path: '#top', icon: Home },
    { name: t.nav.about, path: '#about', icon: User },
    { name: t.nav.projects, path: '#projects', icon: Briefcase },
    { name: t.nav.contact, path: '#contact', icon: Mail },
  ]

  const handleNavClick = (path) => {
    if (path.startsWith('#')) {
      const element = document.querySelector(path === '#top' ? 'body' : path)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-stone-50/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-3 text-2xl font-bold text-stone-800 hover:text-stone-600 transition-colors">
                <img
                  src="/logo.png"
                  alt=""
                  className="h-8 w-8 rounded-md"
                  loading="eager"
                  decoding="async"
                />
                Sarah Tech Lab
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  className="text-stone-700 hover:text-amber-700 transition-colors duration-200 flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-amber-100/50"
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </button>
              ))}
              <LanguageSwitcher />
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-stone-700 hover:text-amber-700 transition-colors p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-stone-50/95 backdrop-blur-md border-t border-stone-200">
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  className="w-full text-left text-stone-700 hover:text-amber-700 transition-colors duration-200 flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-amber-100/50"
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </button>
              ))}
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </nav>

      <main id="top" className="relative pt-16">
        {children}
      </main>
    </div>
  )
}

