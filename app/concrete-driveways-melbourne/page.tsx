import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Concrete Driveways Melbourne',
  description: 'Concrete Driveways Melbourne. Best prices, Highest quality concrete and workmanship guaranteed. Melbourne, Bayside, Mornington Peninsula. Call 0407 334 139',
  alternates: { canonical: 'https://camwellspaving.com.au/concrete-driveways-melbourne/' },
  openGraph: {
    title: 'Concrete Driveways Melbourne',
    description: 'Concrete Driveways Melbourne. Best prices, Highest quality concrete and workmanship guaranteed. Melbourne, Bayside, Mornington Peninsula. Call 0407 334 139',
    url: 'https://camwellspaving.com.au/concrete-driveways-melbourne/',
    type: 'article',
  },
}

export default function ConcreteDriveways() {
  return (
    <>
      <PageHero title="Concrete Driveways Melbourne" subtitle="Quality concrete driveways built to last — Melbourne, Bayside & Mornington Peninsula" bgClass="bg-gray-800" />
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-gray-900 mb-6">Concrete Driveways Melbourne</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At Cam Wells Paving, we deliver premium concrete driveway solutions across Melbourne, Bayside, and the Mornington Peninsula. A quality concrete driveway is one of the most cost-effective improvements you can make to your property — boosting curb appeal and adding lasting value.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our team has over 40 years of experience installing concrete driveways for Melbourne homeowners, builders, and developers. We work with you from design to completion, ensuring every project is delivered on time and to the highest standard.
          </p>
          <h2 className="text-2xl font-black mt-10 mb-4">Why Choose Concrete for Your Driveway?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Durable — lasts 25+ years with proper maintenance</li>
            <li>Low maintenance — easy to clean and seal</li>
            <li>Versatile — can be plain, coloured, or finished with exposed aggregate</li>
            <li>Adds property value</li>
            <li>Suitable for all Melbourne weather conditions</li>
          </ul>
          <h2 className="text-2xl font-black mt-10 mb-4">Exposed Aggregate Upgrade</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Want to take your concrete driveway to the next level? Consider our <Link href="/exposed-aggregate-concrete-driveways-melbourne/" className="text-red-700 hover:underline font-semibold">exposed aggregate concrete driveways</Link> — the premium choice for Melbourne homeowners who want a driveway that looks like natural stone but performs like concrete.
          </p>
          <h2 className="text-2xl font-black mt-10 mb-4">Our Service Area</h2>
          <p className="text-gray-700 leading-relaxed">
            We service all areas of Melbourne including Bayside suburbs, the Mornington Peninsula, Glen Waverley, and surrounding regions. Contact us for a free no-obligation quote.
          </p>
        </div>
      </article>
      <CTABanner />
    </>
  )
}
