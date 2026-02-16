'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#dccbb5]/80 bg-[#f8f2e7]/90 backdrop-blur-xl">
      <div className="shell">
        <div className="flex h-24 items-center justify-between">
          <Link href="/" className="group flex items-center gap-4">
            <div className="rounded-full border border-[#c9ad88] bg-[#7a4b20] p-3 text-white shadow-lg shadow-[#7a4b20]/25 transition duration-300 group-hover:-translate-y-0.5">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M6 8a6 6 0 0112 0c0 5-3 9-6 9s-6-4-6-9z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 7v5" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#8b7a63]">Managanur, Maharashtra</p>
              <h1 className="text-[24px] font-semibold leading-none text-[#4f2f15] md:text-[30px]">RR Cashew Industries</h1>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 text-[15px] font-semibold tracking-wide transition duration-300 ${
                  isActive(link.href) ? 'text-[#7a4b20]' : 'text-[#5f4c37] hover:text-[#7a4b20]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] w-full rounded-full bg-[#7a4b20] transition-opacity ${
                    isActive(link.href) ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </Link>
            ))}
          </nav>

          <a
            href="tel:+919876543210"
            className="hidden rounded-full border border-[#7a4b20] bg-[#7a4b20] px-6 py-2.5 text-sm font-semibold tracking-wide text-[#fff9f0] transition duration-300 hover:bg-[#633a18] md:inline-flex"
          >
            Call Sales
          </a>

          <button
            className="rounded-md p-2 text-[#6f5434] md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="space-y-2 border-t border-[#dccbb5] pb-4 pt-4 md:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-lg px-3 py-2 text-[15px] font-semibold ${
                  isActive(link.href)
                    ? 'bg-[#e9d9c3] text-[#6b431f]'
                    : 'text-[#5f4c37] hover:bg-[#eee2d0]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:+919876543210" className="block rounded-lg bg-[#7a4b20] px-3 py-2 text-center text-sm font-semibold text-white">
              Call Sales
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
