import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-black text-lg mb-3">CAM WELLS <span className="text-red-500">PAVING</span></h3>
          <p className="text-sm leading-relaxed">Melbourne's leading driveway expert. Specialists in paving and exposed aggregate finishes. Family owned and operated.</p>
          <p className="mt-4 text-sm">Member of the Concrete Institute of Australia</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3">Our Services</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/driveway-paving-melbourne/" className="hover:text-red-400 transition-colors">Driveway Paving Melbourne</Link></li>
            <li><Link href="/brick-paving-melbourne/" className="hover:text-red-400 transition-colors">Brick Paving Melbourne</Link></li>
            <li><Link href="/exposed-aggregate-concrete-driveways-melbourne/" className="hover:text-red-400 transition-colors">Exposed Aggregate Concrete Driveways</Link></li>
            <li><Link href="/concrete-driveways-melbourne/" className="hover:text-red-400 transition-colors">Concrete Driveways Melbourne</Link></li>
            <li><Link href="/exposed-aggregate-concreters/" className="hover:text-red-400 transition-colors">Exposed Aggregate Concreters</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3">Contact Us</h4>
          <p className="text-sm mb-2">Melbourne, Bayside &amp; Mornington Peninsula</p>
          <a href="tel:0407334139" className="text-red-400 font-bold text-lg hover:text-red-300">0407 334 139</a>
          <p className="mt-2 text-sm">Free quotes — no obligation</p>
          <div className="flex gap-3 mt-4">
            <a href="https://www.facebook.com/CamwellsPaving" target="_blank" rel="noopener noreferrer"
              className="text-sm hover:text-white transition-colors">Facebook</a>
            <a href="https://twitter.com/CamWellsPaving" target="_blank" rel="noopener noreferrer"
              className="text-sm hover:text-white transition-colors">Twitter</a>
          </div>
          <div className="flex gap-3 mt-3 text-xs">
            <Link href="/terms-and-conditions/" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <Link href="/contact-us/" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        Copyright Cam Wells Paving © {new Date().getFullYear()} | <a href="https://www.bullymarketing.com.au" className="hover:text-gray-300">A Bully Marketing Client</a>
      </div>
    </footer>
  )
}
