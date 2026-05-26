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
        <Link href="/">
          <Image src="/images/logo.png" alt="Cam Wells Paving" width={140} height={50} className="h-10 w-auto object-contain" />
        </Link>
        <button onClick={() => setOpen(!open)} className="p-2" aria-label="Menu">
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
        <div className="p-5 border-b border-gray-100">
          <Link href="/">
            <Image src="/images/logo.png" alt="Cam Wells Paving — The Paving Specialists"
              width={160} height={80} className="w-full h-auto object-contain" />
          </Link>
        </div>
        <nav className="flex-1 py-8 px-6">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href}
              className="block py-2 text-gray-600 hover:text-violet-600 transition-colors font-medium text-sm">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="p-5 border-t border-gray-100">
          <div className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase mb-1">Member</div>
          <div className="text-[11px] text-gray-600 font-bold leading-tight">CONCRETE INSTITUTE</div>
          <div className="text-[10px] text-gray-500">of Australia</div>
          <div className="mt-3 text-[10px] text-gray-400 leading-tight">COPYRIGHT CAM WELLS PAVING © {new Date().getFullYear()}</div>
        </div>
      </aside>
    </>
  )
}
