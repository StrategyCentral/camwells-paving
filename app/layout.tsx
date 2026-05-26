import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://camwellspaving.com.au'),
  verification: {
    google: 'S1jymy81MmM6oQJ-geMGZsP39v-m2-ItqVSQXSvxBk0',
    other: { 'msvalidate.01': 'A9446FCBADF8B6B2EDA768BDD585AF4B' },
  },
  openGraph: {
    siteName: 'Cam Wells Paving',
    locale: 'en_AU',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@CamWellsPaving' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={inter.variable}>
      <body className="bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
