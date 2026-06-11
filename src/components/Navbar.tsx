'use client'

import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50
                    bg-card border-b border-border
                    backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4
                      flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/*<img src="/logo.png" alt="Moowish Logo" className="w-8 h-8"/></Link>*/}
            <span className="text-3xl" >🐮</span>
          <div>
            <h1 className="font-playfair text-xl 
                           font-bold text-primary
                           leading-none">
              Moowish
            </h1>
            <p className="text-xs text-muted leading-none">
              Find your mooovie
            </p>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-muted hover:text-primary 
                       transition-colors text-sm"
          >
            Home
          </Link>
          <Link
            href="/results?mood=happy&type=movie"
            className="text-muted hover:text-primary 
                       transition-colors text-sm"
          >
            Browse
          </Link>
          <Link
            href="/"
            className="bg-primary text-bg px-4 py-2 
                       rounded-full text-sm font-semibold
                       hover:bg-accent transition-colors"
          >
            Pick My Mood 🎬
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-mocha text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card border-t 
                        border-border px-6 py-4
                        flex flex-col gap-4">
          <Link
            href="/"
            className="text-muted hover:text-primary 
                       transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/results?mood=happy&type=movie"
            className="text-muted hover:text-primary 
                       transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Browse
          </Link>
          <Link
            href="/"
            className="bg-primary text-bg px-4 py-2 
                       rounded-full text-sm font-semibold
                       text-center hover:bg-accent 
                       transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Pick My Mood 🎬
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar