'use client';

import { useEffect, useRef, useState } from 'react';

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

function StatCard({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(target);
  return (
    <div ref={ref} className="text-center px-6 py-4">
      <div className="text-5xl font-black text-white mb-2">{count}{suffix}</div>
      <div className="text-purple-200 uppercase tracking-widest text-xs font-semibold">{label}</div>
    </div>
  );
}

export default function AnimatedStats() {
  return (
    <section className="py-16 px-6" style={{ background: '#7c3aed' }}>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-purple-400">
        <StatCard target={40} suffix="+" label="Years Experience" />
        <StatCard target={500} suffix="+" label="Jobs Completed" />
        <StatCard target={1000} suffix="s" label="Happy Clients" />
      </div>
    </section>
  );
}
