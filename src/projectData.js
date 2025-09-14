import notesImg from './assets/Notes.jpg'
import teckelImg from './assets/Teckel.png'

const projects = [
  {
    slug: 'keeper-app',
    title: 'Keeper App',
    description: '"Google Keep" style note-taking application with tags and search functionality.',
    tags: ['React', 'Node', 'Express'],
    demo: 'https://your-demo-url.com/keeper',
    repo: 'https://github.com/your-username/keeper',
    image: notesImg
  },
  {
    slug: 'dachshunds-of-france',
    title: 'Dachshunds of France',
    description: 'A website that catalogs all the Dachshunds of France.',
    tags: ['Vite', 'React', 'CSS'],
    demo: 'https://your-portfolio-url.com',
    repo: 'https://github.com/your-username/portfolio',
    image: teckelImg
  }
]

export default projects


