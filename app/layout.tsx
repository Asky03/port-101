import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import PageTransition from '@/components/PageTransition';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '600', '800'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ashutoshshekhar.vercel.app'),
  title: {
    default: 'Ashutosh Shekhar • Portfolio',
    template: '%s | Ashutosh Shekhar',
  },
  description:
    'Portfolio of Ashutosh Shekhar — projects in Generative AI, Cloud Computing, Blockchain, and Web Development. Exploring system design and architecture.',
  keywords: [
    'Ashutosh Shekhar',
    'Portfolio',
    'Generative AI',
    'Cloud Computing',
    'Blockchain',
    'Web Development',
    'System Design',
    'Full Stack Developer',
  ],
  authors: [{ name: 'Ashutosh Shekhar' }],
  creator: 'Ashutosh Shekhar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ashutoshshekhar.vercel.app',
    title: 'Ashutosh Shekhar • Portfolio',
    description:
      'Portfolio of Ashutosh Shekhar — projects in Generative AI, Cloud Computing, Blockchain, and Web Development.',
    siteName: 'Ashutosh Shekhar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashutosh Shekhar • Portfolio',
    description:
      'Portfolio of Ashutosh Shekhar — projects in Generative AI, Cloud Computing, Blockchain, and Web Development.',
    creator: '@ashutoshshekhar',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className={manrope.className}>
        <Preloader />
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
