import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Exposed Aggregate Concreters Melbourne',
  description: 'Expert exposed aggregate concreters serving Melbourne, Bayside and Mornington Peninsula. Premium aggregate finishes at competitive prices. Call 0407 334 139',
  alternates: { canonical: 'https://camwellspaving.com.au/exposed-aggregate-concreters/' },
  openGraph: {
    title: 'Exposed Aggregate Concreters Melbourne',
    description: 'Expert exposed aggregate concreters serving Melbourne, Bayside and Mornington Peninsula. Premium aggregate finishes at competitive prices. Call 0407 334 139',
    url: 'https://camwellspaving.com.au/exposed-aggregate-concreters/',
    type: 'article',
  },
}

export default function ExposedAggregateConcreters() {
  return (
    <>
      <PageHero title="Exposed Aggregate Concreters" subtitle="Melbourne's specialist exposed aggregate concreters — Bayside & Mornington Peninsula" bgClass="bg-gray-800" />
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-gray-900 mb-6">Exposed Aggregate Concreters Melbourne</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Cam Wells Paving are Melbourne's specialists in exposed aggregate concrete. We bring over 40 years of expertise to every project — delivering beautiful, durable aggregate finishes for driveways, paths, pool surrounds, and patios across Melbourne, Bayside, and the Mornington Peninsula.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            As specialist exposed aggregate concreters, we understand every aspect of the process — from mix design and colour selection right through to the washing and sealing of the finished surface. We don't sub out our work. Our own experienced team does it all.
          </p>
          <h2 className="text-2xl font-black mt-10 mb-4">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Exposed aggregate driveways</li>
            <li>Aggregate pathways and walkways</li>
            <li>Pool surrounds in exposed aggregate</li>
            <li>Patio and entertaining area finishes</li>
            <li>Commercial aggregate projects</li>
          </ul>
          <p className="text-gray-700">
            Learn more about our <Link href="/exposed-aggregate-concrete-driveways-melbourne/" className="text-red-700 hover:underline font-semibold">exposed aggregate concrete driveways</Link> or <Link href="/contact-us/" className="text-red-700 hover:underline font-semibold">contact us for a free quote</Link>.
          </p>
        </div>
      </article>
      <CTABanner />
    </>
  )
}
