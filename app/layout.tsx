import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://camwellspaving.com.au'),
  verification: {
    google: 'S1jymy81MmM6oQJ-geMGZsP39v-m2-ItqVSQXSvxBk0',
    other: { 'msvalidate.01': 'A9446FCBADF8B6B2EDA768BDD585AF4B' },
  },
  openGraph: { siteName: 'Cam Wells Paving', locale: 'en_AU' },
  twitter: { card: 'summary_large_image', site: '@CamWellsPaving' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <div className="flex min-h-screen">
          <Sidebar />
          {/* pt-[57px] compensates for mobile fixed top bar; md:pt-0 removes it on desktop */}
          <div className="flex-1 ml-0 md:ml-[220px] flex flex-col min-h-screen pt-[57px] md:pt-0">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
