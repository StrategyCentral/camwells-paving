'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Animated counter hook
function useCounter(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
}

// SVG Icons
const DrivewaySVG = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4">
    <rect x="10" y="60" width="60" height="6" rx="2" stroke="#7c3aed" strokeWidth="2"/>
    <path d="M20 60L30 20H50L60 60" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/>
    <path d="M35 20V60" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="3 3"/>
    <path d="M45 20V60" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="3 3"/>
    <rect x="25" y="10" width="30" height="12" rx="2" stroke="#7c3aed" strokeWidth="2"/>
  </svg>
);

const BrickSVG = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4">
    <rect x="8" y="14" width="26" height="12" rx="1" stroke="#7c3aed" strokeWidth="2"/>
    <rect x="38" y="14" width="34" height="12" rx="1" stroke="#7c3aed" strokeWidth="2"/>
    <rect x="8" y="30" width="34" height="12" rx="1" stroke="#7c3aed" strokeWidth="2"/>
    <rect x="46" y="30" width="26" height="12" rx="1" stroke="#7c3aed" strokeWidth="2"/>
    <rect x="8" y="46" width="26" height="12" rx="1" stroke="#7c3aed" strokeWidth="2"/>
    <rect x="38" y="46" width="34" height="12" rx="1" stroke="#7c3aed" strokeWidth="2"/>
    <rect x="8" y="62" width="34" height="8" rx="1" stroke="#7c3aed" strokeWidth="2"/>
    <rect x="46" y="62" width="26" height="8" rx="1" stroke="#7c3aed" strokeWidth="2"/>
  </svg>
);

const AggregateSVG = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4">
    <circle cx="20" cy="25" r="7" stroke="#7c3aed" strokeWidth="2"/>
    <circle cx="40" cy="20" r="5" stroke="#7c3aed" strokeWidth="2"/>
    <circle cx="58" cy="28" r="8" stroke="#7c3aed" strokeWidth="2"/>
    <circle cx="15" cy="45" r="6" stroke="#7c3aed" strokeWidth="2"/>
    <circle cx="35" cy="50" r="9" stroke="#7c3aed" strokeWidth="2"/>
    <circle cx="60" cy="48" r="6" stroke="#7c3aed" strokeWidth="2"/>
    <rect x="6" y="62" width="68" height="6" rx="2" stroke="#7c3aed" strokeWidth="2"/>
  </svg>
);

const ConcreteSVG = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4">
    <rect x="8" y="55" width="64" height="8" rx="2" stroke="#7c3aed" strokeWidth="2"/>
    <path d="M15 55V25" stroke="#7c3aed" strokeWidth="2"/>
    <path d="M65 55V25" stroke="#7c3aed" strokeWidth="2"/>
    <path d="M8 25h64" stroke="#7c3aed" strokeWidth="2"/>
    <path d="M25 55V32" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="3 3"/>
    <path d="M40 55V25" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="3 3"/>
    <path d="M55 55V32" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="3 3"/>
    <path d="M8 38h64" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4 4"/>
  </svg>
);

const PatioSVG = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4">
    <rect x="8" y="50" width="64" height="6" rx="1" stroke="#7c3aed" strokeWidth="2"/>
    <rect x="8" y="42" width="64" height="6" rx="1" stroke="#7c3aed" strokeWidth="2"/>
    <path d="M16 42V20" stroke="#7c3aed" strokeWidth="2"/>
    <path d="M64 42V20" stroke="#7c3aed" strokeWidth="2"/>
    <path d="M8 20h64" stroke="#7c3aed" strokeWidth="2"/>
    <path d="M8 20L40 8L72 20" stroke="#7c3aed" strokeWidth="2" strokeLinejoin="round"/>
    <rect x="32" y="42" width="16" height="14" rx="1" stroke="#7c3aed" strokeWidth="2"/>
    <path d="M20 32h40" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4 3"/>
  </svg>
);

const services = [
  { icon: <DrivewaySVG />, name: 'DRIVEWAYS', href: '/driveway-paving-melbourne/' },
  { icon: <BrickSVG />, name: 'BRICK PAVING', href: '/brick-paving-melbourne/' },
  { icon: <AggregateSVG />, name: 'EXPOSED AGGREGATE', href: '/exposed-aggregate-concrete-driveways-melbourne/' },
  { icon: <ConcreteSVG />, name: 'CONCRETE', href: '/concrete-driveways-melbourne/' },
  { icon: <PatioSVG />, name: 'PATIO & POOL', href: '/driveway-paving-melbourne/' },
];

const works = [
  '/images/works/brick-circular.jpg',
  '/images/works/exposed-aggregate-1.jpg',
  '/images/works/grey-aggregate.jpg',
  '/images/works/brick-driveway.jpg',
  '/images/works/concrete-driveway.jpg',
  '/images/works/patio-pool.jpg',
];

function StatCard({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(target);
  return (
    <div ref={ref} className="text-center px-6 py-4">
      <div className="text-5xl font-black text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-purple-200 uppercase tracking-widest text-xs font-semibold">{label}</div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        {/* Video background */}
        <video
          autoPlay muted loop playsInline
          poster="/video/driveways-melbourne-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/driveways-melbourne.webm" type="video/webm" />
          <source src="/video/driveways-melbourne.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Hero content */}
        <div className="relative z-10 px-10 md:px-16 max-w-3xl">
          <h1 className="font-black italic text-white leading-none mb-4"
            style={{ fontSize: 'clamp(4rem, 12vw, 9rem)' }}>
            Hello
          </h1>
          <div className="diamond-sep mb-6" />
          <p className="text-white text-xl md:text-2xl font-light tracking-wide mb-2">
            Welcome to Cam Wells Paving
          </p>
          <p className="text-gray-300 text-base mb-8 max-w-md">
            Melbourne&rsquo;s most trusted paving specialists. Award-winning quality since 1984.
          </p>
          <p className="text-white text-3xl font-bold tracking-widest mb-8">
            <a href="tel:0407334139" className="hover:text-purple-300 transition-colors">0407 334 139</a>
          </p>
          <Link href="/contact-us/" className="btn-ghost">CLICK HERE FOR A FREE QUOTE</Link>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 px-6" style={{ background: '#e8e8e8' }}>
        <h2 className="section-heading mb-2">SERVICES</h2>
        <div className="diamond-sep mb-12" />
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
          {services.map((s) => (
            <Link key={s.name} href={s.href}
              className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-200">
              {s.icon}
              <span className="text-xs font-bold tracking-widest uppercase text-gray-700 group-hover:text-purple-700 transition-colors">
                {s.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="py-16 px-6 text-center" style={{ background: '#7c3aed' }}>
        <h2 className="text-3xl md:text-4xl font-black tracking-widest uppercase text-white mb-6">WHAT WE DO</h2>
        <div className="max-w-3xl mx-auto text-white text-lg leading-relaxed font-light">
          <p>
            We specialise in all forms of paving — from stunning brick driveways and exposed aggregate 
            concrete to classic concrete slabs and beautiful pool surrounds. Our team of experienced 
            tradesmen deliver award-winning results across Melbourne, Bayside and the Mornington Peninsula.
          </p>
        </div>
        <div className="mt-8">
          <Link href="/driveway-paving-melbourne/" className="btn-ghost">EXPLORE OUR SERVICES</Link>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-20 px-6" style={{ background: '#e8e8e8' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center">
            <div className="border-4 border-purple-700 p-6 text-center max-w-xs">
              <div className="text-xs tracking-widest uppercase text-purple-700 font-bold mb-2">VOTED</div>
              <div className="text-4xl font-black text-gray-900 leading-tight mb-1">#1</div>
              <div className="text-sm font-bold tracking-widest uppercase text-gray-700">VICTORIA&rsquo;S BEST</div>
              <div className="text-xs tracking-widest uppercase text-gray-500 mt-1">PAVING BUSINESS</div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black tracking-widest uppercase text-gray-800 mb-2">ABOUT US</h2>
            <div className="w-12 h-1 bg-purple-700 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-4">
              Cam Wells Paving has been Melbourne&rsquo;s trusted paving specialists for over 40 years. 
              As a family-owned business, we take pride in delivering exceptional quality on every project — 
              from standard concrete driveways to high-end exposed aggregate and intricate brick paving.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We are registered with the Concrete Institute of Australia and have been awarded Victoria&rsquo;s 
              #1 paving business. Our workmanship comes with a quality guarantee, backed by decades of 
              satisfied customers across Bayside, the Mornington Peninsula and all of Melbourne.
            </p>
            <Link href="/about-us/" className="btn-ghost-dark">READ MORE</Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16 px-6" style={{ background: '#7c3aed' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-purple-400">
          <StatCard target={40} suffix="+" label="Years Experience" />
          <StatCard target={500} suffix="+" label="Jobs Completed" />
          <StatCard target={1000} suffix="s" label="Happy Clients" />
        </div>
      </section>

      {/* ── OUR WORKS ── */}
      <section className="py-20 px-6" style={{ background: '#e8e8e8' }}>
        <h2 className="section-heading mb-2">OUR WORKS</h2>
        <div className="diamond-sep mb-12" />
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {works.map((src, i) => (
            <div key={i} className="aspect-square bg-gray-300 overflow-hidden relative">
              <Image
                src={src}
                alt={`Cam Wells Paving work ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/cam-wells-paving-portfolio/" className="btn-ghost-dark">SEE PORTFOLIO</Link>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 px-6 bg-white">
        <h2 className="section-heading mb-2">TESTIMONIALS</h2>
        <div className="diamond-sep mb-12" />
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            { name: 'Vivian Price', text: 'Absolutely stunning work on our exposed aggregate driveway. The design and finish exceeded all our expectations. Professional, clean and on time.' },
            { name: 'Stephen & Karen White — Beaumaris', text: 'Cam Wells transformed our pool surrounds with beautiful brick paving. The attention to detail was incredible. Highly recommended.' },
          ].map((t) => (
            <div key={t.name} className="border border-gray-200 p-8">
              <div className="text-purple-700 text-3xl mb-4 font-serif leading-none">&ldquo;</div>
              <p className="text-gray-600 leading-relaxed mb-6 italic">{t.text}</p>
              <div className="text-xs font-bold tracking-widest uppercase text-gray-800">{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="py-20 px-6 text-center" style={{ background: '#7c3aed' }}>
        <h2 className="text-3xl md:text-4xl font-black tracking-widest uppercase text-white mb-4">
          GET A FREE QUOTE
        </h2>
        <div className="diamond-sep mb-6" />
        <p className="text-purple-200 text-lg mb-8 max-w-xl mx-auto">
          Contact Melbourne&rsquo;s paving experts today. We service all areas across Melbourne, 
          Bayside and Mornington Peninsula.
        </p>
        <p className="text-white text-3xl font-bold tracking-widest mb-8">
          <a href="tel:0407334139" className="hover:text-purple-300 transition-colors">0407 334 139</a>
        </p>
        <Link href="/contact-us/" className="btn-ghost">CONTACT US NOW</Link>
      </section>
    </>
  );
}
