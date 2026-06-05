import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
// Chrome hidden while the site is in "Coming Soon" mode — restore these
// (and the JSX below) to bring back the full marketing site:
// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'
// import PageTransition from '@/components/PageTransition'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Beaute Bungalow | Coming Soon — Grapevine, TX',
  description:
    'The Beaute Bungalow is coming soon to Grapevine, Texas — luxury non-invasive face & body contouring. Contact us in the meantime.',
  openGraph: {
    title: 'The Beaute Bungalow | Coming Soon',
    description: 'The future home of The Beaute Bungalow — Grapevine, TX.',
    siteName: 'The Beaute Bungalow',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
