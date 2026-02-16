import type { Metadata } from 'next';
import Link from 'next/link';

const pillars = [
  {
    title: 'Manufacturing Discipline',
    copy: 'We maintain operating controls that help preserve consistency through sourcing, processing, and packaging stages.',
  },
  {
    title: 'Commercial Accountability',
    copy: 'Our team communicates lead times, order status, and shipment planning clearly to reduce uncertainty for buyers.',
  },
  {
    title: 'Quality Intent',
    copy: 'Every lot is evaluated against practical quality checks so dispatched product meets agreed grade expectations.',
  },
];

const stats = [
  { value: '2020', label: 'Operations started' },
  { value: '15+', label: 'Export destinations served' },
  { value: '100%', label: 'Lot-level process checks' },
  { value: '24-48h', label: 'Typical sales response window' },
];

export const metadata: Metadata = {
  title: 'About RR Cashew Industries | Quality Cashew Processing Company',
  description:
    'Learn about RR Cashew Industries, our processing philosophy, quality controls, and operational approach for domestic and export buyers.',
  keywords: [
    'about RR Cashew Industries',
    'cashew processing company Kolhapur',
    'cashew quality control India',
  ],
};

export default function About() {
  return (
    <div className="space-y-16 pb-20 pt-8 md:space-y-24">
      <section className="shell">
        <div className="rounded-[30px] border border-[#d9c5ab] bg-[linear-gradient(130deg,#fff9ef,#f4e8d5)] p-8 md:p-14">
          <p className="text-xs uppercase tracking-[0.24em] text-[#8a6b49]">About RR Cashew Industries</p>
          <h1 className="mt-4 max-w-4xl text-4xl leading-[1] text-[#4f2f15] md:text-6xl">
            Built to deliver premium cashew quality with operational reliability.
          </h1>
          <p className="mt-6 max-w-3xl text-[15px] text-[#685845] md:text-lg">
            Based in Manganur, Tal. Kagal, Kolhapur, we are a focused cashew processor serving domestic and international buyers who need consistent
            quality, practical communication, and dependable order execution.
          </p>
        </div>
      </section>

      <section className="shell">
        <div className="grid gap-7 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="premium-card rounded-2xl p-7">
              <h2 className="text-3xl text-[#4f2f15]">{pillar.title}</h2>
              <p className="mt-3 text-[15px] text-[#665846] md:text-base">{pillar.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell">
        <div className="premium-card rounded-[30px] p-8 md:p-12">
          <h2 className="section-title">Our Operating Snapshot</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-xl border border-[#e2d3be] bg-[#fffaf1] p-5">
                <p className="text-3xl text-[#6a421f] md:text-4xl">{item.value}</p>
                <p className="mt-1 text-[15px] text-[#6d5f4d]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shell">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="premium-card rounded-[28px] p-8">
            <h2 className="text-3xl text-[#4f2f15] md:text-4xl">Our Story</h2>
            <p className="mt-4 text-[15px] text-[#665846] md:text-base">
              RR Cashew Industries was established to bridge a clear gap in the market: buyers needed a processing partner that could combine quality
              intent with execution consistency. Since 2020, we have focused on building process rigor instead of shortcuts.
            </p>
            <p className="mt-4 text-[15px] text-[#665846] md:text-base">
              We continue to strengthen our systems, team capability, and customer support to ensure long-term trust with every buyer relationship we
              build.
            </p>
          </article>
          <article className="premium-card rounded-[28px] p-8">
            <h2 className="text-3xl text-[#4f2f15] md:text-4xl">How We Measure Success</h2>
            <ul className="mt-5 space-y-3 text-[15px] text-[#665846] md:text-base">
              <li>1. Repeat order confidence from existing customers.</li>
              <li>2. Grade and quality consistency across recurring lots.</li>
              <li>3. Predictable delivery performance with clear planning.</li>
              <li>4. Fast issue resolution and accountable communication.</li>
            </ul>
          </article>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/products"
            className="rounded-full border border-[#b08956] px-5 py-2.5 text-sm font-semibold text-[#6a421f] transition-colors duration-200 hover:border-[#7a4b20] hover:bg-[#7a4b20] hover:text-[#fff6ea]"
          >
            Explore Cashew Grades
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-[#b08956] px-5 py-2.5 text-sm font-semibold text-[#6a421f] transition-colors duration-200 hover:border-[#7a4b20] hover:bg-[#7a4b20] hover:text-[#fff6ea]"
          >
            Request Bulk Supply Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
