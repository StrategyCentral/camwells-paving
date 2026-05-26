import Link from 'next/link';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  text?: string; // alias for subtitle — legacy prop
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABanner({
  title = 'GET A FREE QUOTE TODAY',
  subtitle,
  text,
  buttonText = 'CONTACT US',
  buttonHref = '/contact-us/',
}: CTABannerProps) {
  const body = subtitle || text || "Call Melbourne's #1 paving specialists. Servicing Melbourne, Bayside & Mornington Peninsula.";
  return (
    <section className="py-16 px-6 text-center" style={{ background: '#7c3aed' }}>
      <h2 className="text-3xl font-black tracking-widest uppercase text-white mb-4">{title}</h2>
      <p className="text-purple-200 text-lg mb-8 max-w-2xl mx-auto">{body}</p>
      <p className="text-white text-2xl font-bold tracking-widest mb-8">
        <a href="tel:0407334139" className="hover:text-purple-300 transition-colors">0407 334 139</a>
      </p>
      <Link href={buttonHref} className="btn-ghost">{buttonText}</Link>
    </section>
  );
}
