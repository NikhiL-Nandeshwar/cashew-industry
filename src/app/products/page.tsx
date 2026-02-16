import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';

const productGroups = [
  {
    title: 'Whole White Kernels',
    intro: 'Premium whole grades for retail, gifting, export packs, and value-focused trade channels.',
    items: [
      { grade: 'W180', profile: 'Jumbo whole kernels', fit: 'Premium retail and gift assortments' },
      { grade: 'W240', profile: 'Large whole kernels', fit: 'Balanced premium packs and wholesale' },
      { grade: 'W320', profile: 'Popular whole kernels', fit: 'Mainstream distribution and food service' },
      { grade: 'W450', profile: 'Small whole kernels', fit: 'Cost-sensitive premium applications' },
    ],
  },
  {
    title: 'Split and Piece Grades',
    intro: 'Efficient grades for ingredient use, blending, baking, and industrial processing lines.',
    items: [
      { grade: 'SW', profile: 'Scorched wholes/splits', fit: 'Processed foods and ingredient mixes' },
      { grade: 'LWP', profile: 'Large white pieces', fit: 'Confectionery and bakery integration' },
      { grade: 'BB', profile: 'Baby bits', fit: 'Snack mixes and low-cost ingredient blends' },
      { grade: 'Powder', profile: 'Ground cashew powder', fit: 'Sauces, gravies, and base formulations' },
    ],
  },
];

const packaging = [
  'Vacuum-packed export cartons',
  'Bulk food-service packs',
  'Private-label retail packs',
  'Custom pack format by order volume',
];

const visualCategories = [
  {
    title: 'Premium Whole Kernels',
    subtitle: 'W180 / W240 / W320',
    image: '/images/cashew-premium.jpg',
  },
  {
    title: 'Natural Processed Cashews',
    subtitle: 'Bulk and trade supply',
    image: '/images/cashew-raw.jpg',
  },
  {
    title: 'Ready Product Finishes',
    subtitle: 'Retail and food-service fit',
    image: '/images/cashew-salted.jpg',
  },
];

export const metadata: Metadata = {
  title: 'Cashew Grades and Product Range | RR Cashew Industries',
  description:
    'Explore RR Cashew Industries product range including W180, W240, W320, split grades, pieces, and commercial packaging formats.',
  keywords: [
    'cashew grades W180 W240 W320',
    'bulk cashew kernels supplier',
    'split cashew pieces supplier',
    'cashew packaging exporter India',
  ],
};

export default function Products() {
  return (
    <div className="space-y-16 pb-20 pt-8 md:space-y-24">
      <section className="shell">
        <div className="rounded-[30px] border border-[#d9c5ab] bg-[linear-gradient(130deg,#fff9ef,#f4e8d5)] p-8 md:p-14">
          <p className="text-xs uppercase tracking-[0.24em] text-[#8a6b49]">Product Catalog</p>
          <h1 className="mt-4 max-w-4xl text-4xl leading-[1] text-[#4f2f15] md:text-6xl">Commercial-grade cashew portfolio for serious supply needs.</h1>
          <p className="mt-6 max-w-3xl text-[15px] text-[#685845] md:text-lg">
            Our range covers whole kernels, split grades, and value-oriented pieces for retail, food service, and industrial processing buyers.
          </p>
        </div>
      </section>

      <section className="shell space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          {visualCategories.map((item) => (
            <article key={item.title} className="premium-card overflow-hidden rounded-[24px] p-0">
              <div className="relative h-64 w-full md:h-72">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h2 className="text-xl text-[#4f2f15] md:text-2xl">{item.title}</h2>
                <p className="mt-1 text-[15px] text-[#6a5a46]">{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>

        {productGroups.map((group) => (
          <article key={group.title} className="premium-card rounded-[28px] p-8 md:p-10">
            <h2 className="text-3xl text-[#4f2f15] md:text-4xl">{group.title}</h2>
            <p className="mt-2 text-[15px] text-[#665846] md:text-base">{group.intro}</p>
            <div className="mt-6 overflow-x-auto rounded-xl border border-[#e2d3be]">
              <table className="w-full min-w-[580px] border-collapse text-left">
                <thead className="bg-[#f4e7d4] text-sm text-[#5c3c20]">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Grade</th>
                    <th className="px-4 py-3 font-semibold">Profile</th>
                    <th className="px-4 py-3 font-semibold">Best Fit</th>
                  </tr>
                </thead>
                <tbody className="text-[15px] text-[#5f5343] md:text-base">
                  {group.items.map((item) => (
                    <tr key={item.grade} className="border-t border-[#efe2d0] bg-[#fffaf2]">
                      <td className="px-4 py-3 font-semibold text-[#5b3719]">{item.grade}</td>
                      <td className="px-4 py-3">{item.profile}</td>
                      <td className="px-4 py-3">{item.fit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        ))}
      </section>

      <section className="shell">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="premium-card rounded-[28px] p-8">
            <h2 className="text-3xl text-[#4f2f15] md:text-4xl">Packaging & Dispatch</h2>
            <ul className="mt-5 space-y-3 text-[15px] text-[#665846] md:text-base">
              {packaging.map((item) => (
                <li key={item}>1. {item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-[28px] border border-[#d5bf9f] bg-[#6b421f] p-8 text-[#f6ead7]">
            <h2 className="text-3xl text-[#fff4e4] md:text-4xl">Need exact specs and pricing?</h2>
            <p className="mt-4 text-[15px] md:text-base">
              Share your required grades, monthly volume, destination, and packaging preference. We will send a business quote suited to your demand
              profile.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full border border-[#f4dfc2] bg-[#fff4e4] px-6 py-3 text-sm font-semibold text-[#5d391a] transition-colors duration-200 hover:border-[#f1d2a8] hover:bg-[#f1d2a8]"
              >
                Request Quotation
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-[#f0d7b4] px-6 py-3 text-sm font-semibold text-[#fff1dd] transition-colors duration-200 hover:border-[#fff4e4] hover:bg-[#fff4e4] hover:text-[#5d391a]"
              >
                Review Quality Process
              </Link>
              <a
                href="tel:+919876543210"
                className="rounded-full border border-[#f0d7b4] px-6 py-3 text-sm font-semibold text-[#fff1dd] transition-colors duration-200 hover:border-[#fff4e4] hover:bg-[#fff4e4] hover:text-[#5d391a]"
              >
                Call Sales
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
