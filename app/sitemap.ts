import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://camwellspaving.com.au'
  const pages = [
    { url: `${base}/`, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${base}/brick-paving-melbourne/`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/concrete-driveways-melbourne/`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/driveway-paving-melbourne/`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/exposed-aggregate-concrete-driveways-melbourne/`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/exposed-aggregate-concreters/`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/cam-wells-paving-portfolio/`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/about-us/`, priority: 0.7, changeFrequency: 'yearly' as const },
    { url: `${base}/contact-us/`, priority: 0.8, changeFrequency: 'yearly' as const },
    { url: `${base}/terms-and-conditions/`, priority: 0.3, changeFrequency: 'yearly' as const },
  ]
  return pages.map(p => ({ url: p.url, priority: p.priority, changeFrequency: p.changeFrequency, lastModified: new Date() }))
}
