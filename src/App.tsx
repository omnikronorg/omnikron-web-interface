import { useState } from 'react'
import './App.css'
import { Camera } from 'lucide-react'
import Header from './components/Header'
import type { NavItem } from './types/navigation'
import siteLogo from './assets/omnikron.png'

function App() {
  const [count, setCount] = useState(0)

  const navigationLinks: NavItem[] = [
    {label: 'Home', href: '/' },
    {label: 'About', href: '/about'},
    {label: 'Services', href: '/services'},
    {label: 'Contact', href: '/contact'}
  ]

  return (
    <div className="App">
      <Header title='Omnikron' links={navigationLinks} logoUrl={siteLogo} />
      <div className="text-red-500">Test <Camera /> </div>
      <button onClick={() => setCount((count) => count + 1)}>Count is {count}</button>
      
    </div>
  )
}

export default App
