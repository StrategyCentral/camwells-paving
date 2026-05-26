export default function CTABanner({ text = "Contact our friendly staff for a free quote?" }: { text?: string }) {
  return (
    <section className="bg-red-700 py-12 text-center text-white">
      <p className="text-xl font-semibold mb-4">{text}</p>
      <a href="tel:0407334139" className="inline-block bg-white text-red-700 font-black text-2xl py-4 px-10 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
        0407 334 139
      </a>
      <p className="mt-4 text-red-100">Free Quote — No Obligation</p>
    </section>
  )
}
