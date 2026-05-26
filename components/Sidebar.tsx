'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/about-us/', label: 'About' },
  { href: '/cam-wells-paving-portfolio/', label: 'Works' },
  { href: '/contact-us/', label: 'Contact' },
]

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 flex items-center justify-between px-4 py-3 shadow-sm">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded">
            <span className="text-white font-black text-xs">CW</span>
          </div>
          <span className="font-black text-gray-900 text-sm">CAM WELLS <span className="text-violet-600">PAVING</span></span>
        </Link>
        <button onClick={() => setOpen(!open)} className="p-2">
          <div className="w-6 h-0.5 bg-gray-800 mb-1.5" />
          <div className="w-6 h-0.5 bg-gray-800 mb-1.5" />
          <div className="w-6 h-0.5 bg-gray-800" />
        </button>
      </div>
      {open && (
        <div className="md:hidden fixed top-[57px] left-0 right-0 z-40 bg-white shadow-lg">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block px-6 py-3 text-gray-700 hover:text-violet-600 border-b border-gray-50 font-medium">
              {l.label}
            </Link>
          ))}
          <a href="tel:0407334139" className="block px-6 py-3 text-violet-600 font-black">📞 0407 334 139</a>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden md:flex fixed top-0 left-0 h-full w-[220px] bg-white border-r border-gray-100 shadow-sm z-40 flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-100">
          <Link href="/" className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 relative flex-shrink-0">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="12" width="20" height="20" fill="#4a4a6a" />
                  <rect x="4" y="8" width="20" height="20" fill="#5a5a8a" />
                  <rect x="8" y="4" width="20" height="20" fill="#7c3aed" opacity="0.8"/>
                </svg>
              </div>
              <div>
                <div className="text-sm font-black text-gray-900 leading-tight">camwells</div>
                <div className="text-sm font-black text-violet-600 leading-tight">paving</div>
                <div className="text-[9px] text-gray-500 leading-tight tracking-wide">the paving specialists</div>
              </div>
            </div>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-8 px-6">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href}
              className="block py-2 text-gray-600 hover:text-violet-600 transition-colors font-medium text-sm">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Bottom */}
        <div className="p-6 border-t border-gray-100">
          <div className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase mb-2">Concrete Institute</div>
          <div className="text-[10px] text-gray-400">of Australia</div>
          <div className="mt-4 text-[10px] text-gray-400 leading-tight">COPYRIGHT CAM WELLS PAVING © {new Date().getFullYear()}</div>
        </div>
      </aside>
    </>
  )
}
