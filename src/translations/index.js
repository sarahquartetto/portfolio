import { translations as enTranslations } from './en/translations'
import { translations as frTranslations } from './fr/translations'

export const translations = {
  en: enTranslations,
  fr: frTranslations
}

export const getTranslations = (language) => {
  console.log('Loading translations for language:', language)
  console.log('Available languages:', Object.keys(translations))
  const result = translations[language] || translations.en
  console.log('Translation result:', result ? 'Success' : 'Failed')
  return result
}
