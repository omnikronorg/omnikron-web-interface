import { useState } from "react"
import type { HeaderProps } from "../types/navigation"
import "./Header.css"
import { MenuIcon } from "lucide-react"

function Header({title = "Omnikron", logoUrl, links, currentPage, setCurrentPage}: HeaderProps)
{
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toogleMenu = ():void =>{
        setIsOpen(!isOpen)
    }

    return (
        <header className="bg-white shadow z-1000">
            <div className="m-[0_auto] p-[1rem_2rem] flex justify-between items-center">
                <div className="header-logo text-[1.5rem] font-bold no-underline text-black">
                    <a href="/" onClick={(e) =>{
                        e.preventDefault()
                        setCurrentPage('home')
                    }}>
                        {logoUrl ? <div className="flex items-center gap-2"><img className="max-w-16 h-auto" src={logoUrl} alt={`${title} logo`} /> {title}</div> : <span>{title}</span>}
                    </a>
                </div>

                <button className={`menu-toggle ${isOpen ? 'is-active' : ''}`} onClick={toogleMenu} aria-expanded={isOpen} aria-label="Toggle navigation menu">
                    <MenuIcon />
                </button>

                <div className={`nav-overlay ${isOpen ? 'is-open' : ''}`} onClick={() => setIsOpen(false)} />

                <nav className={`nav-menu ${isOpen ? 'is-open' : ''}`}>
                    <ul className="nav-list">
                        {links.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className={`no-underline ${currentPage == link.pageId ? "text-blue-500" : "text-black"} font-medium hover:text-blue-500`}
                                    onClick={(e)=>{ 
                                        e.preventDefault()
                                        setIsOpen(false) 
                                        setCurrentPage(link.pageId)
                                    }
                                }>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header