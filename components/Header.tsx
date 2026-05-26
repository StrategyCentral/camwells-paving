'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/brick-paving-melbourne/', label: 'Brick Paving' },
  { href: '/concrete-driveways-melbourne/', label: 'Concrete Driveways' },
  { href: '/driveway-paving-melbourne/', label: 'Driveway Paving' },
  { href: '/exposed-aggregate-concrete-driveways-melbourne/', label: 'Exposed Aggregate' },
  { href: '/cam-wells-paving-portfolio/', label: 'Portfolio' },
  { href: '/about-us/', label: 'About Us' },
  { href: '/contact-us/', label: 'Contact Us' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-xl font-black text-gray-900 tracking-tight">
            CAM WELLS <span className="text-red-700">PAVING</span>
          </span>
        </Link>
        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href}
              className="text-sm font-medium text-gray-700 hover:text-red-700 px-3 py-2 rounded transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <a href="tel:0407334139"
          className="hidden lg:inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white font-bold px-5 py-2 rounded transition-colors">
          📞 0407 334 139
        </a>
        {/* Mobile hamburger */}
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="w-6 h-0.5 bg-gray-800 mb-1" />
          <div className="w-6 h-0.5 bg-gray-800 mb-1" />
          <div className="w-6 h-0.5 bg-gray-800" />
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block py-2 text-gray-700 hover:text-red-700 font-medium border-b border-gray-50">
              {l.label}
            </Link>
          ))}
          <a href="tel:0407334139" className="btn-primary mt-4 text-center w-full block">
            📞 Call 0407 334 139
          </a>
        </div>
      )}
    </header>
  )
}
