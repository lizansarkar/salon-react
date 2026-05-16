import { useState } from 'react'

export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">RANGPURI<span>.</span></a>
      
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#hero" onClick={closeMenu}>Home</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#pricing" onClick={closeMenu}>Pricing</a>
        <a href="#gallery" onClick={closeMenu}>Gallery</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a href="#contact" className="nav-cta" onClick={closeMenu}>Book Now</a>
      </div>

      <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </div>
    </nav>
  )
}