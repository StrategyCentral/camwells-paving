import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Cam Wells Paving',
  description: 'Terms and conditions for Cam Wells Paving services.',
  alternates: { canonical: 'https://camwellspaving.com.au/terms-and-conditions/' },
}

export default function TermsPage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-black text-gray-900 mb-8">Terms &amp; Conditions</h1>
        <div className="prose prose-lg text-gray-700 space-y-6">
          <p>These terms and conditions govern your use of the Cam Wells Paving website and any services provided by Cam Wells Paving.</p>
          <h2 className="text-xl font-black text-gray-900">Services</h2>
          <p>Cam Wells Paving provides driveway, brick paving, exposed aggregate, and concrete paving services throughout Melbourne, Bayside, and the Mornington Peninsula.</p>
          <h2 className="text-xl font-black text-gray-900">Quotes</h2>
          <p>All quotes are free and provided without obligation. Prices may vary based on site conditions, materials selected, and scope of work. A formal written quote will be provided before any work commences.</p>
          <h2 className="text-xl font-black text-gray-900">Workmanship Warranty</h2>
          <p>Cam Wells Paving stands behind all workmanship. Please contact us if you have any concerns regarding completed work.</p>
          <h2 className="text-xl font-black text-gray-900">Privacy</h2>
          <p>Personal information collected through our contact form is used solely to respond to your enquiry and will not be sold or shared with third parties.</p>
          <h2 className="text-xl font-black text-gray-900">Contact</h2>
          <p>For any questions regarding these terms, please contact us at <a href="tel:0407334139" className="text-red-700 hover:underline">0407 334 139</a>.</p>
        </div>
      </div>
    </section>
  )
}
