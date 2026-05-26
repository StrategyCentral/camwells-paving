'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

// Service icons — using real WP PNGs
const services = [
  { icon: '/images/icons/house-driveways.png', name: 'DRIVEWAYS', href: '/driveway-paving-melbourne/' },
  { icon: '/images/icons/driveways.png', name: 'BRICK PAVING', href: '/brick-paving-melbourne/' },
  { icon: '/images/icons/house-aggregate.png', name: 'EXPOSED AGGREGATE', href: '/exposed-aggregate-concrete-driveways-melbourne/' },
  { icon: '/images/icons/agregates.png', name: 'CONCRETE', href: '/concrete-driveways-melbourne/' },
  { icon: '/images/icons/house-aggregate.png', name: 'PATIO & POOL', href: '/driveway-paving-melbourne/' },
];

const works = [
  { src: '/images/works/circular-brick.jpg', alt: 'Circular Brick Driveway Melbourne' },
  { src: '/images/works/exposed-aggregate.jpg', alt: 'Exposed Aggregate Driveway' },
  { src: '/images/works/grey-aggregate.jpg', alt: 'Grey Aggregate Driveway' },
  { src: '/images/works/melbourne-paving.jpg', alt: 'Melbourne Paving' },
  { src: '/images/works/paving-contractors.jpg', alt: 'Melbourne Paving Contractors' },
  { src: '/images/works/exposed-aggregate-2.jpg', alt: 'Exposed Aggregate Driveways Melbourne' },
];

function StatCard({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(target);
  return (
    <div ref={ref} className="text-center px-6 py-4">
      <div className="text-5xl font-black text-white mb-2">{count}{suffix}</div>
      <div className="text-purple-200 uppercase tracking-widest text-xs font-semibold">{label}</div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay muted loop playsInline
          poster="/images/hero-bg.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/driveways-melbourne.webm" type="video/webm" />
          <source src="/video/driveways-melbourne.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-10 md:px-16 max-w-3xl mx-auto text-center w-full">
          <h1 className="font-black italic leading-none mb-4"
            style={{ fontSize: 'clamp(4rem, 12vw, 9rem)', color: '#7c3aed' }}>
            Hello
          </h1>
          <div className="diamond-sep mb-6" />
          <p className="text-white text-lg md:text-xl mb-2">
            Welcome to Cam Wells Paving. Melbourne&rsquo;s leading driveway expert.
          </p>
          <p className="text-gray-300 text-base mb-6 max-w-md mx-auto">
            Specialists in paving and exposed aggregate finishes. Call now for a 100% obligation free quote.
          </p>
          <p className="text-white text-3xl font-bold tracking-widest mb-8">
            <a href="tel:0407334139" className="hover:text-purple-300 transition-colors">0407 334 139</a>
          </p>
          <Link href="/contact-us/" className="btn-ghost">CLICK HERE</Link>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 px-6" style={{ background: '#e8e8e8' }}>
        <h2 className="section-heading mb-2">SERVICES</h2>
        <div className="diamond-sep mb-4" />
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-sm leading-relaxed">
          At Cam Wells Paving we pride ourselves in quality workmanship. Our driveways and paving projects
          are recognised as some of the best in Victoria.
        </p>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
          {services.map((s) => (
            <Link key={s.name} href={s.href}
              className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.icon} alt={s.name} className="w-16 h-16 object-contain mb-4 opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="text-xs font-bold tracking-widest uppercase text-gray-700 group-hover:text-purple-700 transition-colors">
                {s.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="py-16 px-6 text-center" style={{ background: '#7c3aed' }}>
        <h2 className="text-3xl md:text-4xl font-black tracking-widest uppercase text-white mb-8">WHAT WE DO</h2>
      </section>

      {/* ── WHAT WE DO IMAGE ── */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <Image src="/images/works/grey-aggregate.jpg" alt="Outstanding Design — Cam Wells Paving"
          fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/30 flex items-end justify-end">
          <div className="p-8 text-right">
            <p className="text-white font-black text-2xl uppercase tracking-widest">OUTSTANDING DESIGN</p>
            <p className="text-gray-200 text-sm max-w-md">Award-winning paving and aggregate work across Melbourne, Bayside & Mornington Peninsula</p>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-20 px-6" style={{ background: '#e8e8e8' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center">
            {/* Real best service badge */}
            <Image src="/images/best-service.png" alt="100% Best Service — Cam Wells Paving"
              width={200} height={200} className="object-contain" />
          </div>
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cam Wells Paving is an award winning paving and aggregate business specialising in driveways
              Melbourne. Our family business is owned and operated by Cam Wells and son. We take pride in our
              workmanship and business relationships which is why we are voted Victoria&rsquo;s number one paving business.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We specialise in all form of paving and paved surfaces, from Driveways to stunning backyard
              entertainment areas and pool surrounds. Materials from brick to natural stone and all pavers in
              between — we have mastered them all.
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
          <StatCard target={500} suffix="+" label="Happy Clients" />
        </div>
      </section>

      {/* ── OUR WORKS ── */}
      <section className="py-20 px-6" style={{ background: '#e8e8e8' }}>
        <h2 className="section-heading mb-2">OUR WORKS</h2>
        <div className="diamond-sep mb-6" />
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-sm">
          Take a look at some of the spectacular driveways Melbourne is now showcasing thanks to the team at Cam Wells Paving.
          Our workmanship and quality is second to none.
        </p>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {works.map((w, i) => (
            <div key={i} className="aspect-square overflow-hidden relative bg-gray-300">
              <Image src={w.src} alt={w.alt} fill
                className="object-cover hover:scale-105 transition-transform duration-500" />
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
        <h2 className="text-3xl md:text-4xl font-black tracking-widest uppercase text-white mb-4">GET A FREE QUOTE</h2>
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
