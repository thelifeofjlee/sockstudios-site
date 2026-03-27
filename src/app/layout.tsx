import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Socks Studios | Creative Space Rental in DTLA Los Angeles',
  description: '1,300 sq ft multipurpose studio space in Downtown Los Angeles. Perfect for photo shoots, video productions, private events, and more. Open 24/7. No noise restrictions.',
  metadataBase: new URL('https://sockstudios.la'),
  openGraph: {
    title: 'Socks Studios | Creative Space Rental in DTLA Los Angeles',
    description: '1,300 sq ft multipurpose studio space in Downtown Los Angeles. Perfect for photo shoots, video productions, private events, and more. Open 24/7. No noise restrictions.',
    url: 'https://sockstudios.la',
    siteName: 'Socks Studios',
    images: [
      {
        url: '/images/DSCF7658.JPG',
        width: 1200,
        height: 630,
        alt: 'Socks Studios - Creative Space in DTLA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Socks Studios | Creative Space Rental in DTLA Los Angeles',
    description: '1,300 sq ft multipurpose studio space in Downtown Los Angeles.',
    images: ['/images/DSCF7658.JPG'],
  },
  alternates: {
    canonical: 'https://sockstudios.la',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Socks Studios',
              description: '1,300 sq ft multipurpose creative space in Downtown Los Angeles.',
              url: 'https://sockstudios.la',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '1598 Oak Street',
                addressLocality: 'Los Angeles',
                addressRegion: 'CA',
                postalCode: '90015',
                addressCountry: 'US',
              },
              openingHours: 'Mo-Su 00:00-24:00',
              image: 'https://sockstudios.la/images/DSCF7658.JPG',
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-[#0a0a0a] text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
