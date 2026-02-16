'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const slides = [
  {
    eyebrow: 'Export-ready kernels',
    title: 'Premium cashews, processed with discipline.',
    description:
      'From raw selection to graded packing, every batch is handled with strict process control for consistency buyers can trust.',
    cta: 'View Product Grades',
    href: '/products',
    image: '/images/cashew-premium.jpg',
  },
  {
    eyebrow: 'Operational precision',
    title: 'Built for scale, quality, and repeatability.',
    description:
      'Our production flow is designed for bulk orders, documented checks, and stable output quality throughout the year.',
    cta: 'How We Work',
    href: '/about',
    image: '/images/cashew-raw.jpg',
  },
  {
    eyebrow: 'Trade support',
    title: 'Reliable partner for domestic and global buyers.',
    description:
      'Clear communication, flexible packaging formats, and committed dispatch timelines help your teams plan with confidence.',
    cta: 'Contact Sales',
    href: '/contact',
    image: '/images/cashew-salted.jpg',
  },
];

export default function ImageSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="shell">
      <div className="relative overflow-hidden rounded-[30px] border border-[#dbc8af] shadow-[0_28px_60px_rgba(36,24,14,0.18)]">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-700 ${index === active ? 'opacity-100' : 'opacity-0'}`}
            style={{ zIndex: index === active ? 1 : 0 }}
          >
            <div
              className="h-[74vh] min-h-[520px] w-full bg-cover bg-center md:h-[78vh]"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="hero-sheen absolute inset-0" />
          </div>
        ))}

        <div className="relative z-10 flex min-h-[520px] h-[74vh] items-end md:h-[78vh]">
          <div className="w-full p-8 md:p-14">
            <p className="text-xs uppercase tracking-[0.24em] text-[#f2d8b3] md:text-sm">{slides[active].eyebrow}</p>
            <h2 className="mt-3 max-w-3xl text-5xl leading-[0.95] text-[#fff4e4] md:text-7xl">{slides[active].title}</h2>
            <p className="mt-5 max-w-2xl text-sm text-[#efe3d3] md:text-lg">{slides[active].description}</p>
            <div className="mt-8 flex items-center gap-4">
              <Link
                href={slides[active].href}
                className="rounded-full border border-[#e5c79f] bg-[#fff4e4] px-6 py-3 text-sm font-semibold tracking-wide text-[#4f2f15] transition-colors duration-200 hover:border-[#7a4b20] hover:bg-[#7a4b20] hover:text-[#fff6ea] md:text-base"
              >
                {slides[active].cta}
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-8 z-20 flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all ${index === active ? 'w-9 bg-[#f4e6d2]' : 'w-2.5 bg-[#f4e6d2]/55'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
