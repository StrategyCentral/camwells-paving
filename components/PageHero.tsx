interface PageHeroProps {
  title: string
  subtitle?: string
  bgClass?: string
}
export default function PageHero({ title, subtitle, bgClass = 'bg-gray-800' }: PageHeroProps) {
  return (
    <section className={`${bgClass} py-20 text-center text-white relative overflow-hidden`}>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">{title}</h1>
        {subtitle && <p className="text-xl text-gray-200 mb-8">{subtitle}</p>}
        <a href="tel:0407334139" className="btn-primary text-lg">
          📞 Free Quote — 0407 334 139
        </a>
      </div>
    </section>
  )
}
