interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section
      className="py-20 px-10 flex flex-col justify-center"
      style={{
        background: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)',
        minHeight: '220px',
      }}
    >
      {breadcrumb && (
        <p className="text-purple-300 text-xs tracking-widest uppercase mb-3">{breadcrumb}</p>
      )}
      <h1 className="text-3xl md:text-5xl font-black tracking-widest uppercase text-white mb-3">
        {title}
      </h1>
      {subtitle && (
        <p className="text-purple-200 text-lg max-w-2xl">{subtitle}</p>
      )}
      <div className="mt-4 w-16 h-1 bg-white opacity-40" />
    </section>
  );
}
