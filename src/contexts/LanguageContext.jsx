import React, { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Initialize language from localStorage or default to 'en'
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'en'
    }
    return 'en'
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language)
    }
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en')
  }

  // Temporary fallback translations
  const t = {
    nav: {
      home: language === 'en' ? 'Home' : 'Accueil',
      about: language === 'en' ? 'About' : 'À propos',
      projects: language === 'en' ? 'Projects' : 'Projets',
      contact: language === 'en' ? 'Contact' : 'Contact'
    },
    hero: {
      available: language === 'en' ? 'Available for freelance' : 'Disponible en freelance',
      greeting: language === 'en' ? "Hi, I'm" : 'Moi, c\'est',
      name: 'Sarah',
      description: language === 'en' ? 'A Swiss web developer crafting beautiful, functional digital experiences with modern technologies.' : 'Je suis développeuse web Suisse. Je crée des expériences numériques performantes en utilisant des technologies modernes.',
      viewWork: language === 'en' ? 'View My Work' : 'Voir mes projets',
      getInTouch: language === 'en' ? 'Get In Touch' : 'Me contacter'
    },
    about: {
      title: language === 'en' ? 'About Me' : 'À propos de moi',
      paragraph1: language === 'en' ? 'I\'m a passionate web developer with a love for creating beautiful, functional digital experiences. With expertise in modern web technologies, I bring ideas to life through clean code and innovative solutions.' : 'Je suis une développeuse web passionnée qui aime créer des expériences numériques belles et fonctionnelles. Avec une expertise dans les technologies web modernes, je donne vie aux idées grâce à un code propre et des solutions innovantes.',
      paragraph2: language === 'en' ? 'When I\'m not coding, you can find me exploring the Swiss Alps, experimenting with new recipes, or diving into the latest tech trends. I believe in continuous learning and staying curious about the ever-evolving world of web development.' : 'Quand je ne code pas, vous pouvez me trouver en train d\'explorer les Alpes suisses, d\'expérimenter de nouvelles recettes ou de plonger dans les dernières tendances technologiques. Je crois en l\'apprentissage continu et en rester curieuse du monde en constante évolution du développement web.',
      highlights: {
        cleanCode: language === 'en' ? 'Clean Code' : 'Code Propre',
        collaboration: 'Collaboration'
      }
    },
    skills: {
      title: language === 'en' ? 'Skills & Technologies' : 'Compétences & Technologies',
      description: language === 'en' ? 'I work with modern technologies to build <span class="font-bold">Full Stack</span> applications that are both beautiful and functional.' : 'Je travaille avec des technologies modernes pour construire des applications <span class="font-bold">Full Stack</span> à la fois belles et fonctionnelles.'
    },
    projects: {
      title: language === 'en' ? 'Featured Projects' : 'Projets en vedette',
      subtitle: language === 'en' ? 'A showcase of my recent work and personal projects' : 'Un aperçu de mes travaux récents et projets personnels'
    },
    contact: {
      title: language === 'en' ? 'Let\'s Work Together' : 'Travaillons ensemble',
      subtitle: language === 'en' ? 'Ready to bring your ideas to life? Let\'s discuss your project.' : 'Prêt à donner vie à vos idées ? Discutons de votre projet.',
      description: language === 'en' ? 'I\'m always excited to take on new challenges and collaborate with amazing people. Whether you need a complete web application or want to discuss a creative project, feel free to reach out.' : 'Je suis toujours enthousiaste à l\'idée de relever de nouveaux défis et de collaborer avec des personnes formidables. Que vous ayez besoin d\'une application web complète ou que vous souhaitiez discuter d\'un projet créatif, n\'hésitez pas à me contacter.',
      getInTouch: language === 'en' ? 'Get In Touch' : 'Me contacter',
      emailLabel: 'Email',
      locationLabel: language === 'en' ? 'Location' : 'Localisation',
      locationValue: language === 'en' ? 'Switzerland' : 'Suisse',
      responseTime: language === 'en' ? 'Response Time' : 'Temps de réponse',
      responseTimeValue: language === 'en' ? 'Within 24 hours' : 'Sous 24 heures',
      yourName: language === 'en' ? 'Your Name' : 'Votre nom',
      namePlaceholder: language === 'en' ? 'Enter your name' : 'Entrez votre nom',
      emailAddress: language === 'en' ? 'Email Address' : 'Adresse email',
      emailPlaceholder: language === 'en' ? 'Enter your email' : 'Entrez votre email',
      projectDetails: language === 'en' ? 'Project Details' : 'Détails du projet',
      messagePlaceholder: language === 'en' ? 'Tell me about your project...' : 'Parlez-moi de votre projet...',
      send: language === 'en' ? 'Send Message' : 'Envoyer le message',
      sending: language === 'en' ? 'Sending...' : 'Envoi en cours...',
      success: language === 'en' ? 'Message Sent!' : 'Message envoyé !',
      thankYou: language === 'en' ? 'Thank you for reaching out. I\'ll get back to you within 24 hours.' : 'Merci de m\'avoir contactée. Je vous répondrai dans les 24 heures.',
      error: language === 'en' ? 'Sorry, there was an error sending your message' : 'Désolée, il y a eu une erreur lors de l\'envoi de votre message'
    },
    footer: {
      copyright: language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.',
      swissMade: language === 'en' ? 'Swiss Made' : 'Fabriqué en Suisse'
    }
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
