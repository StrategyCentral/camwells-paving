import type { Metadata } from 'next'
import CTABanner from '@/components/CTABanner'
import Link from 'next/link'
import AnimatedStats from '@/components/AnimatedStats'

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
  { title: 'Exposed Aggregate', href: '/exposed-aggregate-concrete-driveways-melbourne/', img: 'https://camwellspaving.com.au/wp-content/uploads/2014/09/Driveways-Melbourne-exposed-aggregate.png', desc: 'Prestigious and durable exposed aggregate driveways. With better re-sale values and low maintenance, exposed aggregate is the driveway of choice.' },
]

const testimonials = [
  { text: 'Cameron came up with the idea of blending pavers with exposed aggregate concrete, to give us a finish that is visually appealing and unique. It has increased the value of our property immeasurably. Cameron is not only professional in his work standards, he is easy to get along with. I have no hesitation recommending him.', author: 'Vivian Price' },
  { text: 'Karen and I would just like to say a big thankyou for the amazing job you guys did paving around our new pool — it looks amazing!! Your attention to detail and quality craftsmanship has brought our garden to life! I was extremely impressed that you came to work every day on time and did everything that you said you would do.', author: 'Stephen & Karen White, Beaumaris' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-30"
          poster="/video/driveways-melbourne-poster.jpg">
          <source src="/video/driveways-melbourne.webm" type="video/webm" />
          <source src="/video/driveways-melbourne.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-black mb-4 leading-tight tracking-tight">
            Driveways <span className="text-purple-400">Melbourne</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 mb-4 font-semibold">"The Driveway Experts"</p>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Driveways that last a lifetime. Call for Melbourne's BEST driveway installation prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0407334139" className="btn-primary text-xl py-4 px-10">📞 0407 334 139</a>
            <a href="#services" className="btn-outline text-xl py-4 px-10">Our Services</a>
          </div>
        </div>
      </section>

      {/* Hello / Welcome */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="section-divider" />
          <h2 className="text-5xl font-black text-gray-800 mb-6">Hello</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Welcome to Cam Wells Paving. Melbourne's leading driveway expert. Specialists in paving and exposed aggregate finishes.
            Why not give us a call now for a 100% no obligation Free Quote. Or simply click the below button to see why we're the best in Melbourne.
          </p>
          <p className="text-3xl font-black text-purple-700 mb-6">0407 334 139</p>
          <a href="#services" className="btn-primary">CLICK HERE</a>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="section-divider" />
            <h2 className="text-4xl font-black text-gray-900">SERVICES</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              At Cam Wells Paving we pride ourselves in quality workmanship. Our projects are recognised as some of the best in Victoria.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(s => (
              <Link key={s.href} href={s.href}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group border border-gray-100">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  <span className="inline-block mt-4 text-purple-700 font-bold text-sm">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="section-divider" />
          <h2 className="text-4xl font-black mb-6">WHAT WE DO</h2>
          <p className="text-xl text-gray-300 font-semibold mb-2">STYLE & QUALITY</p>
          <p className="text-gray-400 leading-relaxed mb-8 max-w-3xl mx-auto">
            Camwells paving appreciates the fact that when you are looking for a new driveway, you need it to be visually appealing and you want it built to last.
          </p>
          <p className="text-xl text-gray-300 font-semibold mb-2">OUTSTANDING DESIGN</p>
          <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Let us help you design & construct a driveway, from modern / Contemporary to a traditional heritage look, we can help you create a driveway to suit your home and surroundings.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 md:flex items-center gap-12">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://camwellspaving.com.au/wp-content/uploads/2014/09/best_service_crumple.png"
              alt="Top Quality Driveways Melbourne" className="mx-auto max-w-xs" />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 leading-relaxed mb-4">
              Cam Wells Paving is an award winning paving and aggregate business specialising in driveways Melbourne. Our family business is owned and operated by Cam Wells and son. We take pride in our workmanship and business relationships which is why we are voted Victoria's number one paving business.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We specialise in all form of paving and paved surfaces, from Driveways to stunning backyard entertainment areas and pool surrounds. Materials from brick to natural stone and all pavers in between we have mastered them all.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our extensive experience in design and construction puts us far ahead of our competitors. If you looking for outstanding quality and attention to detail at a competitive price, contact us now for a free quote.
            </p>
          </div>
        </div>
      </section>

      {/* Animated Stats */}
      <AnimatedStats />

      {/* Portfolio CTA */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="section-divider" />
          <h2 className="text-4xl font-black mb-6">OUR WORKS</h2>
          <p className="text-gray-300 mb-8">
            Take a look at some of the spectacular Driveways Melbourne is now showcasing thanks to the team at Cam Wells Paving. Our workmanship and quality is second to none. Thanks Melbourne.
          </p>
          <Link href="/cam-wells-paving-portfolio/" className="btn-primary text-lg">SEE PORTFOLIO</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="section-divider" />
            <h2 className="text-4xl font-black text-gray-900">HAPPY CLIENTS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-8 border-l-4 border-purple-700">
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
