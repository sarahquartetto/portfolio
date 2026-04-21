import React from 'react'
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../contexts/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // EmailJS configuration
      const serviceId = 'service_o2agbrt'
      const templateId = 'template_fhccxqj'
      const publicKey = '2mm7OhtfSAG2NfBqO'
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email
      }
      
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setIsSuccess(true)
      setFormData({ name: '', email: '', message: '' })
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
      
    } catch (error) {
      console.error('Error sending email:', error)
      console.error('Error details:', error.text || error.message)
      alert(`${t.contact.error}: ${error.text || error.message}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-stone-100 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-4">{t.contact.title}</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">{t.contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-stone-800">{t.contact.getInTouch}</h3>
              <p className="text-stone-600 leading-relaxed">
                {t.contact.description}
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-amber-100 text-amber-700"><Mail className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-semibold text-stone-800">{t.contact.emailLabel}</h4>
                  <p className="text-stone-600">contact@sarah-tech-lab.ch</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-amber-100 text-amber-700"><MapPin className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-semibold text-stone-800">{t.contact.locationLabel}</h4>
                  <p className="text-stone-600">{t.contact.locationValue}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-amber-100 text-amber-700"><Phone className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-semibold text-stone-800">{t.contact.responseTime}</h4>
                  <p className="text-stone-600">{t.contact.responseTimeValue}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-stone-200/50">
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="w-16 h-16 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">{t.contact.success}</h3>
                <p className="text-stone-600">{t.contact.thankYou}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">{t.contact.yourName}</label>
                    <input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange} className="w-full rounded-xl border border-stone-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder={t.contact.namePlaceholder} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">{t.contact.emailAddress}</label>
                    <input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className="w-full rounded-xl border border-stone-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder={t.contact.emailPlaceholder} />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">{t.contact.projectDetails}</label>
                    <textarea id="message" name="message" rows="6" required value={formData.message} onChange={handleInputChange} className="w-full rounded-xl border border-stone-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none" placeholder={t.contact.messagePlaceholder}></textarea>
                  </div>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 disabled:from-amber-400 disabled:to-amber-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 px-4 py-3 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      {t.contact.sending}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      {t.contact.send}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
