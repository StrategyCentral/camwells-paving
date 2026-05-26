import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Driveway Paving Melbourne',
  description: 'Driveway Paving Melbourne. Expert driveway contractors for Melbourne, Bayside and Mornington Peninsula. Free quotes, best prices. Call 0407 334 139',
  alternates: { canonical: 'https://camwellspaving.com.au/driveway-paving-melbourne/' },
  openGraph: {
    title: 'Driveway Paving Melbourne',
    description: 'Driveway Paving Melbourne. Expert driveway contractors for Melbourne, Bayside and Mornington Peninsula. Free quotes, best prices. Call 0407 334 139',
    url: 'https://camwellspaving.com.au/driveway-paving-melbourne/',
    type: 'article',
  },
}

export default function DrivewayPavingPage() {
  return (
    <>
      <PageHero title="Driveway Paving Melbourne" subtitle="Melbourne's specialist driveway contractors — builders, developers, councils & home owners" bgClass="bg-gray-800" />
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-gray-900 mb-6">Driveway Paving Melbourne</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Cam Wells Driveways Melbourne pride themselves in being the specialist go-to driveway contractors for builders, developers, councils and home owners alike. You can count on our driveway quality and prompt, friendly service.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            With over 40 years of experience, we've completed hundreds of driveway projects across Melbourne and the Mornington Peninsula. From modern exposed aggregate to classic brick paving — we do it all.
          </p>
          <h2 className="text-2xl font-black mt-10 mb-4">Our Driveway Paving Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              { t: 'Exposed Aggregate', d: 'The premium driveway choice. Natural stone appearance, non-slip, easy to clean.' },
              { t: 'Brick Paving', d: 'Classic and durable. Hundreds of patterns and colours to suit every home.' },
              { t: 'Concrete Driveways', d: 'Cost-effective and long-lasting. Plain, coloured, or stamped options available.' },
              { t: 'Pattern Paving', d: 'Herringbone, basket weave, and more. Custom designs to match your home.' },
            ].map(item => (
              <div key={item.t} className="bg-gray-50 rounded-lg p-6 border-l-4 border-red-700">
                <h3 className="font-black text-gray-900 mb-2">{item.t}</h3>
                <p className="text-gray-600 text-sm">{item.d}</p>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-black mt-10 mb-4">The Process</h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li><strong>Free consultation</strong> at your home — we assess the site and discuss your options</li>
            <li><strong>Quote provided</strong> — detailed, transparent pricing with no hidden costs</li>
            <li><strong>Design agreement</strong> — materials, patterns, and timeline confirmed</li>
            <li><strong>Professional installation</strong> — our experienced team completes the job on time</li>
            <li><strong>Warranty provided</strong> on all our workmanship</li>
          </ol>
        </div>
      </article>
      <CTABanner />
    </>
  )
}
