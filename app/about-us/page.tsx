import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'About Cam Wells Paving — Melbourne Driveway Experts',
  description: 'About Cam Wells Paving. Award-winning family driveway business. 40+ years experience. Melbourne, Bayside & Mornington Peninsula. Call 0407 334 139',
  alternates: { canonical: 'https://camwellspaving.com.au/about-us/' },
  openGraph: { title: 'About Cam Wells Paving', url: 'https://camwellspaving.com.au/about-us/', type: 'article' },
}

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Cam Wells Paving" subtitle="40+ years of award-winning driveways and paving across Melbourne" bgClass="bg-gray-800" />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-gray-900 mb-6">Victoria's Number One Paving Business</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Cam Wells Paving is an award-winning paving and aggregate business specialising in driveways Melbourne. Our family business is owned and operated by Cam Wells and son. We take pride in our workmanship and business relationships which is why we are voted Victoria's number one paving business.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We specialise in all forms of paving and paved surfaces — from driveways to stunning backyard entertainment areas and pool surrounds. Materials from brick to natural stone and all pavers in between, we have mastered them all.
          </p>
          <p className="text-gray-700 leading-relaxed mb-10">
            Our extensive experience in design and construction puts us far ahead of our competitors. If you're looking for outstanding quality and attention to detail at a competitive price, contact us now for a free quote.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { stat: '40+', label: 'Years Experience', desc: 'Over 40 years of paving expertise you can trust.' },
              { stat: '100s+', label: 'Jobs Completed', desc: 'Hundreds of successful projects across Melbourne.' },
              { stat: '1000s', label: 'Happy Clients', desc: 'Clients impressed with quality, service and design.' },
            ].map(item => (
              <div key={item.stat} className="text-center bg-gray-50 rounded-xl p-8">
                <div className="text-4xl font-black text-purple-700 mb-2">{item.stat}</div>
                <div className="font-black text-gray-900 mb-1">{item.label}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-black mt-10 mb-4">Our Commitment</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Camwells paving appreciates the fact that when you are looking for a new driveway, you need it to be visually appealing and you want it built to last.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Let us help you design and construct a driveway — from modern/contemporary to a traditional heritage look — we can help you create a driveway to suit your home and surroundings.
          </p>
        </div>
      </section>
      <CTABanner />
    </>
  )
}
