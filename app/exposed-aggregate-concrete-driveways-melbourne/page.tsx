import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Exposed Aggregate Concrete Driveways Melbourne',
  description: 'Exposed Aggregate Concrete Driveways Melbourne. Best prices, Highest quality concrete and workmanship guaranteed. Melbourne, Bayside, Mornington Peninsula 0407 334 139',
  alternates: { canonical: 'https://camwellspaving.com.au/exposed-aggregate-concrete-driveways-melbourne/' },
  openGraph: {
    title: 'Exposed Aggregate Concrete Driveways Melbourne',
    description: 'Exposed Aggregate Concrete Driveways Melbourne. Best prices, Highest quality concrete and workmanship guaranteed. Melbourne, Bayside, Mornington Peninsula 0407 334 139',
    url: 'https://camwellspaving.com.au/exposed-aggregate-concrete-driveways-melbourne/',
    type: 'article',
  },
}

const benefits = [
  'Value adding to your property',
  'Visually appealing natural stone look',
  'Wide range of colour mixes',
  'Easy to clean — just hose it down',
  'Non-slip grip surface',
  'Low maintenance',
]

export default function ExposedAggregatePage() {
  return (
    <>
      <PageHero
        title="Exposed Aggregate Concrete Driveways Melbourne"
        subtitle="Prestigious, durable, and beautiful — Melbourne, Bayside & Mornington Peninsula"
        bgClass="bg-gray-800"
      />
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-gray-900 mb-6">Exposed Aggregate Concrete Driveways Melbourne</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A visually stunning driveway is a must-have if you want to add curb appeal to your home. Exposed aggregate concrete driveways Melbourne are becoming widely popular because of the many benefits they have to offer.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            One of the primary benefits of exposed aggregate in the Mornington Peninsula is the natural beauty. There are various mixes that we offer, allowing you to pick and choose the colour and overall look. When installed properly, the exposed aggregate looks more like stone than concrete — and this is why it has become so popular.
          </p>

          <div className="bg-gray-50 rounded-xl p-8 my-10">
            <h3 className="text-xl font-black mb-6 text-gray-900">Exposed Aggregate Benefits</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">✓</span>
                  <span className="text-gray-700">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-black mt-10 mb-4">Create a Great Looking Design</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Not sure of how you want to design your driveway? Have some ideas but want expert advice? Allow us to schedule a consultation at your home where we can discuss all of the options. We can provide samples of the various aggregate mixes so you can see your colour and style options.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            It doesn't matter whether you have a pre-existing driveway or not. We are able to start from nothing or something. We have a friendly team of workers who can show you cost-effective solutions that can be installed quickly and effectively.
          </p>

          <h2 className="text-2xl font-black mt-10 mb-4">The Non-Slip Advantage</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            There's also a non-slip grip to be had with exposed aggregate. A standard concrete or asphalt driveway can become slick with rain. The aggregate is raised up from the surface enough to provide tread — regardless of what shoes you wear, there will be traction so you don't have to worry about slipping.
          </p>

          <h2 className="text-2xl font-black mt-10 mb-4">Why Exposed Aggregate Is the Driveway of Choice</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Prestigious and durable exposed aggregate driveways have become a part of Melbourne's property boom. With better re-sale values and low maintenance, exposed aggregate is becoming the driveway of choice for savvy Melburnians.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With various mixes of aggregate, you can add personality to the front of your home. There are various colours available that coordinate with the colours of your home — establishing flow and giving the driveway a look as though it has always been there.
          </p>
        </div>
      </article>
      <CTABanner />
    </>
  )
}
