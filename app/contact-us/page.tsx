import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Contact Cam Wells Paving — Free Quote Melbourne',
  description: 'Contact Cam Wells Paving for a free no-obligation quote. Driveways, brick paving and exposed aggregate. Melbourne, Bayside, Mornington Peninsula. 0407 334 139',
  alternates: { canonical: 'https://camwellspaving.com.au/contact-us/' },
  openGraph: { title: 'Contact Cam Wells Paving', url: 'https://camwellspaving.com.au/contact-us/', type: 'article' },
}

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us For a Free Quote" subtitle="No obligation — we come to you. Melbourne, Bayside & Mornington Peninsula" bgClass="bg-gray-800" />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-6">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl">📞</span>
                <div>
                  <p className="font-bold text-gray-900">Phone</p>
                  <a href="tel:0407334139" className="text-purple-700 text-2xl font-black hover:text-red-800">0407 334 139</a>
                  <p className="text-sm text-gray-500 mt-1">Call for fastest response</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">📍</span>
                <div>
                  <p className="font-bold text-gray-900">Service Area</p>
                  <p className="text-gray-700">Melbourne, Bayside &amp; Mornington Peninsula</p>
                  <p className="text-sm text-gray-500 mt-1">We come to you for free quotes</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">🏆</span>
                <div>
                  <p className="font-bold text-gray-900">Award Winning</p>
                  <p className="text-gray-700">Victoria's #1 Paving Business</p>
                  <p className="text-sm text-gray-500 mt-1">Member of the Concrete Institute of Australia</p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-black text-gray-900 mb-6">Send Us a Message</h2>
            <form className="space-y-4" action="mailto:sompav@optusnet.com.au" method="post">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Your Name</label>
                <input type="text" name="name" required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                <input type="tel" name="phone"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                <input type="email" name="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                <textarea name="message" rows={5}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none" />
              </div>
              <p className="text-xs text-gray-500">I consent to Cam Wells Paving collecting my details through this form.</p>
              <button type="submit"
                className="w-full bg-purple-700 hover:bg-purple-800 text-white font-black py-4 rounded-lg transition-colors text-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
