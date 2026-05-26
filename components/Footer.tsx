import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-8 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm tracking-widest uppercase mb-2">
          Cam Wells Paving &copy; {new Date().getFullYear()} — All Rights Reserved
        </p>
        <p className="text-xs text-gray-600">
          Melbourne&rsquo;s Award-Winning Paving Specialists | Driveways · Brick Paving · Exposed Aggregate · Concrete
        </p>
        <div className="mt-4 flex justify-center gap-6 text-xs">
          <Link href="/terms-and-conditions/" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
          <Link href="/contact-us/" className="hover:text-white transition-colors">Contact</Link>
          <Link href="/about-us/" className="hover:text-white transition-colors">About</Link>
        </div>
      </div>
    </footer>
  );
}
