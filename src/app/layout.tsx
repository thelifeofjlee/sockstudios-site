import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Socks Studios | Creative Space Rental in DTLA Los Angeles',
  description: '1,300 sq ft multipurpose creative space in Downtown Los Angeles. Photo shoots, video productions, private events, and more. Open 24/7. No noise restrictions.',
  metadataBase: new URL('https://sockstudios.la'),
  openGraph: {
    title: 'Socks Studios — Los Angeles',
    description: '1,300 sq ft creative space in DTLA. Open 24/7. No noise restrictions. Perfect for shoots, events, and more.',
    url: 'https://sockstudios.la',
    siteName: 'Socks Studios',
    images: [
      {
        url: '/images/Elim Pan_ 2026-15.jpg',
        width: 1800,
        height: 1200,
        alt: 'Socks Studios - Creative Space in DTLA Los Angeles',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Socks Studios — Los Angeles',
    description: '1,300 sq ft creative space in DTLA. Open 24/7. No noise restrictions.',
    images: ['/images/Elim Pan_ 2026-15.jpg'],
  },
  alternates: {
    canonical: 'https://sockstudios.la',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
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
              image: 'https://sockstudios.la/images/Elim Pan_ 2026-15.jpg',
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
