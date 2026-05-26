import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Cam Wells Paving Portfolio — Driveways Melbourne',
  description: 'View our portfolio of stunning driveways, brick paving, and exposed aggregate projects across Melbourne, Bayside and the Mornington Peninsula.',
  alternates: { canonical: 'https://camwellspaving.com.au/cam-wells-paving-portfolio/' },
  openGraph: {
    title: 'Cam Wells Paving Portfolio',
    url: 'https://camwellspaving.com.au/cam-wells-paving-portfolio/',
    type: 'article',
  },
}

const gallery = [
  { src: 'https://camwellspaving.com.au/wp-content/uploads/2014/12/exposed-aggregate-driveways-melbourne.jpg', alt: 'Exposed Aggregate Driveways Melbourne', category: 'Exposed Aggregate' },
  { src: 'https://camwellspaving.com.au/wp-content/uploads/2014/12/Melbourne-paving-1.jpg', alt: 'Melbourne Paving', category: 'Brick Paving' },
  { src: 'https://camwellspaving.com.au/wp-content/uploads/2014/12/Circular-paved-brick-driveway-5.jpg', alt: 'Circular Paved Brick Driveway', category: 'Brick Paving' },
  { src: 'https://camwellspaving.com.au/wp-content/uploads/2014/12/Grey-aggregate-driveway-3.jpg', alt: 'Grey Aggregate Driveway', category: 'Exposed Aggregate' },
  { src: 'https://camwellspaving.com.au/wp-content/uploads/2014/12/Exposed-aggregate-concrete.jpg', alt: 'Exposed Aggregate Concrete', category: 'Exposed Aggregate' },
  { src: 'https://camwellspaving.com.au/wp-content/uploads/2014/12/Melbourne-paving-contractors-10.jpg', alt: 'Melbourne Paving Contractors', category: 'Brick Paving' },
  { src: 'https://camwellspaving.com.au/wp-content/uploads/2014/12/Paved-and-concrete-aggregate-5-e1418268399765.jpg', alt: 'Paved and Concrete Aggregate', category: 'Exposed Aggregate' },
  { src: 'https://camwellspaving.com.au/wp-content/uploads/2014/12/Circular-paved-brick-driveway-4.jpg', alt: 'Circular Paved Brick Driveway', category: 'Brick Paving' },
  { src: 'https://camwellspaving.com.au/wp-content/uploads/2014/12/Grey-aggregate-driveway.jpg', alt: 'Grey Aggregate Driveway', category: 'Exposed Aggregate' },
]

export default function PortfolioPage() {
  return (
    <>
      <PageHero title="Our Portfolio" subtitle="Spectacular driveways Melbourne is now showcasing — take a look at our work" />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our workmanship and quality is second to none. Browse through some of our completed projects below.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, i) => (
              <div key={i} className="group overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.src} alt={item.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-4 bg-white border border-gray-100">
                  <span className="inline-block text-xs font-bold text-purple-700 uppercase tracking-widest mb-1">{item.category}</span>
                  <p className="text-sm text-gray-700 font-medium">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner subtitle="Love what you see? Get your free quote today!" />
    </>
  )
}
