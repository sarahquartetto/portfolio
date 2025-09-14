import { LanguageProvider } from './contexts/LanguageContext'
import { BrowserRouter } from 'react-router-dom'
import Portfolio from './portfolio/Portfolio.jsx'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Portfolio />
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
