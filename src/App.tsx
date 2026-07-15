import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import type { NavItem } from './types/navigation'
// import siteLogo from './assets/omnikron.svg'
import siteLogo from './assets/omnikron-small.png'
import Products from './pages/Products/Products'
import Solutions from './pages/Solutions/Solutions'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'

import AiMedicalDiagnoses from './pages/Products/AiAndDataScience/AiMedicalDiagnoses'
import TokenCreator from './pages/Products/Blockchain/TokenCreator'

function App() {
  const navigationLinks: NavItem[] = [
    {label: 'Home', href: '/', pageId: 'home'},
    {label: 'Products', href: '/products', pageId: 'products'},
    {label: 'Solutions', href: '/solutions', pageId: 'solutions'},
    {label: 'Contact', href: '/contact', pageId: 'contact'}
  ]

  const pageMap: Record<string, string> = {
    '/': 'home',
    '/products': 'products',
    '/solutions': 'solutions',
    '/contact': 'contact',
    '/products/ai-medical-diagnoses': 'ai-medical-diagnoses',
    '/products/token-creator': 'token-creator',
  }

  const [currentPage, setCurrentPage] = useState(() => {
    const path = window.location.pathname
    return pageMap[path] || 'home'
  })

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname
      setCurrentPage(pageMap[path] || 'home')
    }
    
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])


  function renderPage()
  {
    switch(currentPage)
    {
      case 'home':
        return <Home />
      case 'products':
        return <Products setCurrentPage={setCurrentPage} />
      case 'solutions':
        return <Solutions />
      case 'contact':
        return <Contact />

      case 'ai-medical-diagnoses':
        return <AiMedicalDiagnoses setCurrentPage={setCurrentPage} />
      case 'token-creator':
        return <TokenCreator setCurrentPage={setCurrentPage} />
        
      default:
        return <Home />
    }
  }

  return (
    <div className="w-screen h-screen bg-white">
      <Header title='Omnikron' links={navigationLinks} logoUrl={siteLogo} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div>
        {renderPage()}
      </div>
    </div>
  )
}

export default App
