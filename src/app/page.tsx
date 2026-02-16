import Link from 'next/link';
import type { Metadata } from 'next';
import ImageSlider from '@/components/ImageSlider';

const strengths = [
  {
    title: 'Grade Consistency',
    copy: 'Structured grading process for uniform kernel count, size profile, and appearance across dispatches.',
  },
  {
    title: 'Process Hygiene',
    copy: 'Controlled handling at every production stage to preserve freshness, taste, and food safety quality.',
  },
  {
    title: 'Bulk Reliability',
    copy: 'Operational planning for recurring high-volume requirements with transparent lead-time communication.',
  },
];

const highlights = [
  { grade: 'W180', use: 'Large premium kernels for gifting, retail packs, and top-tier snack lines.' },
  { grade: 'W240', use: 'Balanced size and value for private label and mass market premium mixes.' },
  { grade: 'W320', use: 'High-demand trade grade for broad distribution and food service channels.' },
];

export const metadata: Metadata = {
  title: 'Premium Cashew Manufacturer in Kolhapur | RR Cashew Industries',
  description:
    'Premium cashew manufacturer and bulk supplier from Kolhapur offering consistent grading, quality-focused processing, and reliable dispatch.',
  keywords: [
    'premium cashew manufacturer Kolhapur',
    'bulk cashew supplier India',
    'W180 W240 W320 cashew kernels',
    'cashew export supplier',
  ],
};

export default function Home() {
  return (
    <div className="space-y-20 pb-20 pt-8 md:space-y-24">
      <ImageSlider />

      <section className="shell">
        <div className="rounded-[28px] border border-[#dac7af] bg-[#fffdf8] p-8 shadow-[0_16px_34px_rgba(41,27,16,0.08)] md:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#9c7d59]">Who We Are</p>
              <h2 className="section-title mt-3">A focused cashew processing company for serious buyers.</h2>
            </div>
            <p className="body-copy">
              RR Cashew Industries supports wholesalers, exporters, and food brands with premium cashew kernels from Kolhapur. We combine practical
              factory discipline with responsive commercial support, so quality and execution stay stable from inquiry to delivery.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {strengths.map((item) => (
              <article key={item.title} className="premium-card rounded-2xl p-6">
                <h2 className="text-2xl text-[#4f2f15]">{item.title}</h2>
                <p className="mt-3 text-[15px] text-[#635746] md:text-base">{item.copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="rounded-full border border-[#b08956] px-5 py-2.5 text-sm font-semibold text-[#6a421f] transition-colors duration-200 hover:border-[#7a4b20] hover:bg-[#7a4b20] hover:text-[#fff6ea]"
            >
              Browse Cashew Product Grades
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-[#b08956] px-5 py-2.5 text-sm font-semibold text-[#6a421f] transition-colors duration-200 hover:border-[#7a4b20] hover:bg-[#7a4b20] hover:text-[#fff6ea]"
            >
              See Cashew Processing Standards
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-[#b08956] px-5 py-2.5 text-sm font-semibold text-[#6a421f] transition-colors duration-200 hover:border-[#7a4b20] hover:bg-[#7a4b20] hover:text-[#fff6ea]"
            >
              Contact Bulk Cashew Supplier
            </Link>
          </div>
        </div>
      </section>

      <section className="shell">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="premium-card rounded-[28px] p-7 lg:col-span-3 md:p-10">
            <p className="text-xs uppercase tracking-[0.24em] text-[#9c7d59]">Core Grades</p>
            <h2 className="section-title mt-3">Cashew kernels engineered for quality-focused trade.</h2>
            <div className="mt-7 space-y-4">
              {highlights.map((item) => (
                <div key={item.grade} className="rounded-xl border border-[#e5d7c3] bg-[#fffaf0] p-4">
                  <p className="text-2xl text-[#5b3719]">{item.grade}</p>
                  <p className="mt-1 text-[15px] text-[#6a5a46] md:text-base">{item.use}</p>
                </div>
              ))}
            </div>
            <Link
              href="/products"
              className="mt-7 inline-flex rounded-full border border-[#7a4b20] bg-[#7a4b20] px-6 py-3 text-sm font-semibold tracking-wide text-[#fff6ea] transition hover:bg-[#643a18]"
            >
              Explore Full Product Range
            </Link>
          </div>
          <div className="premium-card relative overflow-hidden rounded-[28px] p-0 lg:col-span-2">
            <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(122,75,32,0.16),rgba(255,248,236,0.05))]" />
            <div className="relative p-7 md:p-10">
              <p className="text-xs uppercase tracking-[0.24em] text-[#866846]">Process View</p>
              <h3 className="mt-3 text-3xl text-[#4f2f15]">From source to sealed pack</h3>
              <ol className="mt-6 space-y-3 text-[15px] text-[#665846] md:text-base">
                <li>1. Raw lot screening and procurement approval.</li>
                <li>2. Controlled drying, shelling, peeling, and grading.</li>
                <li>3. Batch-level quality checks and moisture validation.</li>
                <li>4. Export-oriented packaging and dispatch readiness.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="shell">
        <div className="rounded-[30px] border border-[#d9c4a7] bg-[linear-gradient(135deg,#fff8ed,#f5ead9)] p-9 md:p-14">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#8f6f4d]">Work With Us</p>
              <h2 className="mt-3 text-4xl leading-[1] text-[#4f2f15] md:text-6xl">Need a dependable cashew supply partner?</h2>
            </div>
            <div>
              <p className="body-copy">
                Share your grade mix, monthly volume, and packaging format. Our commercial team will return a practical proposal with lead-time
                clarity and supply support suited to your market.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full border border-[#7a4b20] bg-[#7a4b20] px-6 py-3 text-sm font-semibold text-[#fff6ea] transition hover:bg-[#643a18]"
                >
                  Request Business Quote
                </Link>
                <a
                  href="tel:+919876543210"
                  className="rounded-full border border-[#b08956] px-6 py-3 text-sm font-semibold text-[#6a421f] transition hover:bg-[#f4e7d4]"
                >
                  Call +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
