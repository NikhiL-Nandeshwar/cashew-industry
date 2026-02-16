import './globals.css';
import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const displayFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-display',
});

const bodyFont = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'RR Cashew Industries | Premium Cashew Processing & Export',
  description:
    'RR Cashew Industries in Kolhapur delivers export-grade cashew kernels with disciplined quality control, traceable sourcing, and reliable bulk supply.',
  openGraph: {
    title: 'RR Cashew Industries | Premium Cashew Processing & Export',
    description:
      'Export-grade cashew kernels with disciplined quality control, traceable sourcing, and reliable bulk supply.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'RR Cashew Industries',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RR Cashew Industries',
    description: 'Premium cashew processing and bulk supply from Kolhapur, India.',
  },
  keywords: [
    'RR Cashew Industries',
    'cashew manufacturer India',
    'cashew exporter Kolhapur',
    'W180 W240 W320 cashew',
    'bulk cashew supplier',
    'processed cashew kernels',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <Header />
        <main className="min-h-screen pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
