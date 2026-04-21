import notesImg from './assets/Notes.jpg'
import teckelImg from './assets/Teckel.png'

const projects = [
  {
    slug: 'keeper-app',
    title: {
      en: 'Keeper App',
      fr: 'Keeper App'
    },
    description: {
      en: '"Google Keep" style note-taking application with tags and search functionality.',
      fr: 'Application de prise de notes type "Google Keep" avec tags et recherche.'
    },
    tags: ['React', 'Node', 'Express'],
    demo: 'https://keeper.sarah-tech-lab.ch',
    repo: 'https://github.com/sarahquartetto/keeper-app',
    image: notesImg
  },
  {
    slug: 'dachshunds-of-switzerland',
    title: {
      en: 'Dachshunds of Switzerland',
      fr: 'Teckels de Suisse'
    },
    description: {
      en: 'A website that catalogs all the Dachshunds of Switzerland.',
      fr: 'Un site qui répertorie tous les teckels de Suisse.'
    },
    tags: ['Vite', 'React', 'CSS'],
    demo: 'https://teckels.sarah-tech-lab.ch',
    repo: 'https://github.com/sarahquartetto/swiss-teckels',
    image: teckelImg
  }
]

export default projects


