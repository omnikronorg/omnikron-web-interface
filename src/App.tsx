import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import type { NavItem } from './types/navigation'
// import siteLogo from './assets/omnikron.svg'
import siteLogo from './assets/omnikron-small.png'
import Products from './pages/Products/Products'
import Solutions from './pages/Solutions/Solutions'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'

function App() {
  const navigationLinks: NavItem[] = [
    {label: 'Home', href: '/', pageId: 'home'},
    {label: 'Products', href: '/products', pageId: 'products'},
    {label: 'Solutions', href: '/solutions', pageId: 'solutions'},
    {label: 'Contact', href: '/contact', pageId: 'contact'}
  ]

  const [currentPage, setCurrentPage] = useState('home')

  function renderPage()
  {
    switch(currentPage)
    {
      case 'home':
        return <Home />
      case 'products':
        return <Products />
      case 'solutions':
        return <Solutions />
      case 'contact':
        return <Contact />
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
