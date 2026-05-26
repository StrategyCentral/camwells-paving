import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Brick Paving Melbourne',
  description: 'Brick Paving Melbourne. Best prices, Highest quality concrete and workmanship guaranteed. Melbourne, Bayside and Mornington Peninsula CALL 0407 334 139',
  alternates: { canonical: 'https://camwellspaving.com.au/brick-paving-melbourne/' },
  openGraph: {
    title: 'Brick Paving Melbourne',
    description: 'Brick Paving Melbourne. Best prices, Highest quality concrete and workmanship guaranteed. Melbourne, Bayside and Mornington Peninsula CALL 0407 334 139',
    url: 'https://camwellspaving.com.au/brick-paving-melbourne/',
    type: 'article',
  },
}

export default function BrickPavingPage() {
  return (
    <>
      <PageHero
        title="Brick Paving Melbourne"
        subtitle="Solutions For Your Driveway Or Patio — Melbourne, Bayside & Mornington Peninsula"
        bgClass="bg-gray-800"
      />
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg max-w-none">
          <h2 className="text-3xl font-black text-gray-900 mb-6">Brick Paving Melbourne</h2>
          <p>Welcome to Cam Wells Paving, the premier provider of brick paving solutions in Bayside Melbourne and the stunning Mornington Peninsula. At Cam Wells Paving, we transform ordinary spaces into extraordinary outdoor living areas, bringing charm and elegance to driveways, patios, and landscaping. With our extensive experience and dedication to quality, we stand out as the top choice for brick paving in Melbourne.</p>

          <h2 className="text-2xl font-black mt-10 mb-4">Who We Are</h2>
          <p>Cam Wells Paving is a family-owned business operated by Cam Wells and his son. Our award-winning company has built a solid reputation for delivering exceptional brick paving services. Our commitment to excellence and attention to detail have earned us the title of Victoria's number one paving business.</p>
          <p>Brick is an ideal material for your driveway because it is incredibly strong and durable while also being attractive to look at. You can choose from a variety of brick colors and there are many unique patterns that can be created with brick paving stones.</p>

          <h2 className="text-2xl font-black mt-10 mb-4">Our Specialties</h2>
          <h3 className="text-xl font-bold mt-6 mb-3">Driveways</h3>
          <p>Your driveway is the first impression of your home, and at Cam Wells Paving, we ensure it's a lasting one. We specialise in creating stunning driveways using various materials, including travertine brick pavers, clay driveway pavers, and decorative brick pavers.</p>

          <h3 className="text-xl font-bold mt-6 mb-3">Brick Paving</h3>
          <p>Brick paving is our passion, and we bring this enthusiasm to every project. We offer a wide range of brick paving options, from clay brick pavers to keystone brick pavers and blue paving bricks. Our brick paving services are perfect for creating beautiful pathways, patios, and pool surrounds.</p>

          <h3 className="text-xl font-bold mt-6 mb-3">Driveway Paving</h3>
          <p>A well-paved driveway adds significant value to your property. Our brick paver driveway services include installation, maintenance, and repair, ensuring your driveway remains in top condition for years to come.</p>

          <h2 className="text-2xl font-black mt-10 mb-4">Maintenance Tips</h2>
          <p>Maintaining your brick driveway or patio is simple. To extend the life of your driveway or patio, wash it once or twice a year and seal it after it's fully dry. This basic maintenance helps keep your paved surfaces looking new and protects them from wear and tear.</p>
          <p>In most cases, if properly maintained, a brick driveway can last for about 25 years — about the same life span you can expect from concrete before you start to see cracking and chipping.</p>

          <h2 className="text-2xl font-black mt-10 mb-4">Why Choose Cam Wells Paving?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Experience and Expertise</strong> — Years of experience delivering top-notch paving services</li>
            <li><strong>Quality Materials</strong> — Only the best materials including clay brick pavers, travertine, and blue paving bricks</li>
            <li><strong>Competitive Pricing</strong> — Quality paving at competitive prices, detailed quotes provided</li>
            <li><strong>Customer Satisfaction</strong> — Numerous awards and positive reviews testament to our dedication</li>
          </ul>

          <h2 className="text-2xl font-black mt-10 mb-4">Our Services</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Driveway Installation and Repair</strong></li>
            <li><strong>Patios and Outdoor Spaces</strong></li>
            <li><strong>Pool Surrounds</strong> — slip-resistant materials for safety and style</li>
            <li><strong>Pathways and Walkways</strong></li>
            <li><strong>Commercial Paving</strong></li>
          </ul>

          <h2 className="text-2xl font-black mt-10 mb-4">Brick Driveway Paving Styles</h2>
          <h3 className="text-xl font-bold mt-6 mb-3">Antique and Classic Styles</h3>
          <p>For those with a love for timeless elegance, our antique and classic brick styles mimic the look of historic buildings, adding a touch of nostalgia and sophistication to your home.</p>

          <h3 className="text-xl font-bold mt-6 mb-3">Modern and Contemporary Styles</h3>
          <p>Sleek lines, bold colours, and innovative patterns define our modern brick driveways and patios. Using materials like blue paving bricks and interlocking brick pavers, we create stylish and functional spaces.</p>
        </div>
      </article>
      <CTABanner />
    </>
  )
}
