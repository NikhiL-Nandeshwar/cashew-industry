'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#d8c4aa] bg-[#23170d] text-[#ecdcc7]">
      <div className="shell py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[#f6ead8] shadow-[0_6px_16px_rgba(0,0,0,0.35)] ring-1 ring-[#c9a97d]/70">
                <Image src="/images/logo.png" alt="RR Cashew Industries logo" width={44} height={44} className="h-[44px] w-[44px] object-contain" />
              </div>
              <h3 className="text-3xl font-semibold text-[#fff4e4]">RR Cashew Industries</h3>
            </div>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#d9c6ad] md:text-base">
              Premium cashew processing company based in Kolhapur, serving domestic and export buyers with consistent grading, secure packaging,
              and timely dispatch.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-[#fff4e4]">Quick Links</h4>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
              <Link href="/products" className="hover:text-white">
                Products
              </Link>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-[#fff4e4]">Reach Us</h4>
            <div className="mt-4 space-y-2 text-sm">
              <p>Mangnoor, Tal. Kagal, Kolhapur, Maharashtra 416236</p>
              <a href="tel:+919876543210" className="block hover:text-white">
                +91 98765 43210
              </a>
              <a href="mailto:sales@rrcashew.com" className="block hover:text-white">
                sales@rrcashew.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-[#4c3828] pt-6 text-xs text-[#c9b59c] md:text-sm">
          <p>&copy; {currentYear} RR Cashew Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
