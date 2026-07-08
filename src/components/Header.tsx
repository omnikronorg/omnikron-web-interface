import { useState } from "react"
import type { HeaderProps } from "../types/navigation"
import "./Header.css"

function Header({title = "Omnikron", logoUrl, links}: HeaderProps)
{
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toogleMenu = ():void =>{
        setIsOpen(!isOpen)
    }

    return (
        <header>
            <div className="header-container">
                <div className="header-logo">
                    <a href="/">
                        {logoUrl ? <span><img src={logoUrl} alt={`${title} logo`} /> {title}</span> : <span>{title}</span>}
                    </a>
                </div>

                <button className={`menu-toggle ${isOpen ? 'is-active' : ''}`} onClick={toogleMenu} aria-expanded={isOpen} aria-label="Toggle navigation menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <nav className={`nav-menu ${isOpen ? 'is-open' : ''}`}>
                    <ul className="nav-list">
                        {links.map((link, index) => (
                            <li key={index} className="nav-item">
                                <a href={link.href} className="nav-link" onClick={()=>{ setIsOpen(false) }}>
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