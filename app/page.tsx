import type { Metadata } from 'next'
import CTABanner from '@/components/CTABanner'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Driveways Melbourne',
  description: 'Cam Wells Driveways Melbourne. "The Driveway experts". Driveways that last a lifetime. Call for Melbourne\'s BEST driveway installation prices. 0407 334 139',
  alternates: { canonical: 'https://camwellspaving.com.au/' },
  openGraph: {
    title: 'Driveways Melbourne',
    description: 'Cam Wells Driveways Melbourne. "The Driveway experts". Driveways that last a lifetime. Call for Melbourne\'s BEST driveway installation prices. 0407 334 139',
    url: 'https://camwellspaving.com.au/',
    type: 'website',
  },
}

const services = [
  { title: 'Paving', href: '/brick-paving-melbourne/', img: 'https://camwellspaving.com.au/wp-content/uploads/2014/09/paving.png', desc: 'Cam Wells Paving has years of experience in paving. Our professional team has completed hundreds of jobs from small patios and landscape features to large commercial mezzanines and driveways.' },
  { title: 'Driveways', href: '/driveway-paving-melbourne/', img: 'https://camwellspaving.com.au/wp-content/uploads/2014/09/Driveways-Melbourne.png', desc: 'Cam Well Driveways Melbourne pride themselves in being the specialist driveway contractors for builders, developers, councils and home owners alike.' },
  { title: 'Exposed Aggregate', href: '/exposed-aggregate-concrete-driveways-melbourne/', img: 'https://camwellspaving.com.au/wp-content/uploads/2014/09/Driveways-Melbourne-exposed-aggregate.png', desc: 'Prestigious and durable exposed aggregate driveways have become a part of Melbourne\'s property boom. With better re-sale values and low maintenance, exposed aggregate is the driveway of choice.' },
]

const testimonials = [
  { text: 'Cameron came up with the idea of blending pavers with exposed aggregate concrete, to give us a finish that is visually appealing and unique. It has increased the value of our property immeasurably. Cameron is not only professional in his work standards, he is easy to get along with. I have no hesitation recommending him.', author: 'Vivian Price' },
  { text: 'Karen and I would just like to say a big thankyou for the amazing job you guys did paving around our new pool — it looks amazing!! Your attention to detail and quality craftsmanship has brought our garden to life! I was extremely impressed that you came to work every day on time and did everything that you said you would do.', author: 'Stephen & Karen White, Beaumaris' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-900 text-white min-h-[85vh] flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-40"
          poster="/video/driveways-melbourne-poster.jpg">
          <source src="/video/driveways-melbourne.webm" type="video/webm" />
          <source src="/video/driveways-melbourne.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Driveways <span className="text-red-500">Melbourne</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4 font-medium">"The Driveway Experts"</p>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Driveways that last a lifetime. Call for Melbourne's BEST driveway installation prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0407334139" className="btn-primary text-xl py-4 px-10">📞 0407 334 139</a>
            <a href="#services" className="btn-outline text-xl py-4 px-10">Our Services</a>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-20 bg-white text-center" id="about">
        <div className="max-w-4xl mx-auto px-4">
          <div className="section-divider" />
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Welcome to Cam Wells Paving</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Melbourne's leading driveway expert. Specialists in paving and exposed aggregate finishes.
            Why not give us a call now for a 100% no obligation Free Quote?
          </p>
          <a href="#services" className="btn-primary">See Why We're The Best</a>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="section-divider" />
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">SERVICES</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              At Cam Wells Paving we pride ourselves in quality workmanship. Our projects are recognised as some of the best in Victoria.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(s => (
              <Link key={s.href} href={s.href}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-red-700 transition-colors">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  <span className="inline-block mt-4 text-red-700 font-bold text-sm">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-red-700 text-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-black mb-2">40+</div>
            <div className="font-semibold">Years Experience</div>
            <div className="text-red-200 text-sm mt-1">You can trust that we know what we are doing</div>
          </div>
          <div>
            <div className="text-5xl font-black mb-2">100s+</div>
            <div className="font-semibold">Jobs Completed</div>
            <div className="text-red-200 text-sm mt-1">Rest assured you're in good hands</div>
          </div>
          <div>
            <div className="text-5xl font-black mb-2">1000s</div>
            <div className="font-semibold">Happy Clients</div>
            <div className="text-red-200 text-sm mt-1">Impressed with our service, quality and design</div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-6">WHAT WE DO — STYLE &amp; QUALITY</h2>
          <div className="section-divider" />
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Cam Wells Paving is an award winning paving and aggregate business specialising in driveways Melbourne.
            Our family business is owned and operated by Cam Wells and son. We take pride in our workmanship and
            business relationships which is why we are voted Victoria's number one paving business.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We specialise in all forms of paving and paved surfaces — from driveways to stunning backyard entertainment
            areas and pool surrounds. Materials from brick to natural stone and all pavers in between, we have mastered them all.
          </p>
        </div>
      </section>

      {/* Portfolio CTA */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="section-divider" />
          <h2 className="text-3xl font-black mb-6">OUR WORKS</h2>
          <p className="text-gray-300 mb-8">
            Take a look at some of the spectacular driveways Melbourne is now showcasing thanks to the team at Cam Wells Paving.
          </p>
          <Link href="/cam-wells-paving-portfolio/" className="btn-primary text-lg">See Portfolio</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50" id="testimonials">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="section-divider" />
            <h2 className="text-3xl font-black">HAPPY CLIENTS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-8 border-l-4 border-red-700">
                <p className="text-gray-700 italic leading-relaxed mb-6">"{t.text}"</p>
                <p className="font-black text-gray-900">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
