import type { Metadata } from 'next';
import Link from 'next/link';

const channels = [
  {
    title: 'Call Sales',
    detail: '+91 98765 43210',
    link: 'tel:+919876543210',
  },
  {
    title: 'WhatsApp Orders',
    detail: '+91 98765 43210',
    link: 'https://wa.me/919876543210?text=Hello%20RR%20Cashew%20Industries%2C%20I%20need%20pricing%20for%20bulk%20cashew%20grades.',
  },
  {
    title: 'Email',
    detail: 'sales@rrcashew.com',
    link: 'mailto:sales@rrcashew.com',
  },
  {
    title: 'Factory Location',
    detail: 'Manganur, Tal. Kagal, Kolhapur, Maharashtra 416236',
    link: 'https://maps.google.com/?q=Manganur+Kagal+Kolhapur',
  },
];

export const metadata: Metadata = {
  title: 'Contact Cashew Supplier in Kolhapur | RR Cashew Sales Enquiry',
  description:
    'Contact RR Cashew Industries for cashew grade enquiries, bulk pricing, dispatch timelines, and commercial partnerships.',
};

export default function Contact() {
  return (
    <div className="space-y-16 pb-20 pt-8 md:space-y-24">
      <section className="shell">
        <div className="rounded-[30px] border border-[#d9c5ab] bg-[linear-gradient(130deg,#fff9ef,#f4e8d5)] p-8 md:p-14">
          <p className="text-xs uppercase tracking-[0.24em] text-[#8a6b49]">Contact RR Cashew Industries</p>
          <h1 className="mt-4 max-w-4xl text-4xl leading-[1] text-[#4f2f15] md:text-6xl">Contact our cashew sales team for bulk pricing and grade availability.</h1>
          <p className="mt-6 max-w-3xl text-sm text-[#685845] md:text-lg">
            For business enquiries, share your preferred grades, order volume, packaging type, and destination. Our team replies quickly with practical
            commercial details.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="rounded-full border border-[#b08956] px-5 py-2.5 text-sm font-semibold text-[#6a421f] transition-colors duration-200 hover:border-[#7a4b20] hover:bg-[#7a4b20] hover:text-[#fff6ea]"
            >
              View Cashew Grades
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-[#b08956] px-5 py-2.5 text-sm font-semibold text-[#6a421f] transition-colors duration-200 hover:border-[#7a4b20] hover:bg-[#7a4b20] hover:text-[#fff6ea]"
            >
              Learn About Our Process
            </Link>
          </div>
        </div>
      </section>

      <section className="shell">
        <div className="grid gap-6 lg:grid-cols-3">
          {channels.map((channel) => (
            <article key={channel.title} className="premium-card rounded-2xl p-7">
              <h2 className="text-3xl text-[#4f2f15]">{channel.title}</h2>
              <a
                href={channel.link}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block rounded-lg px-2 py-1 text-sm text-[#6a5a46] transition-colors duration-200 hover:bg-[#f1e4d1] hover:text-[#5a3517] md:text-base"
              >
                {channel.detail}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="shell">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="premium-card rounded-[28px] p-8">
            <h2 className="text-3xl text-[#4f2f15] md:text-4xl">Fast Order Flow</h2>
            <p className="mt-3 text-sm text-[#665846] md:text-base">
              Most vendors close faster on call or WhatsApp. Share your requirement in 4 points and get a practical quote quickly.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-[#665846] md:text-base">
              <li>1. Grade mix: W180/W240/W320 or pieces.</li>
              <li>2. Monthly quantity required.</li>
              <li>3. Delivery location.</li>
              <li>4. Packaging format needed.</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+919876543210"
                className="rounded-full border border-[#7a4b20] bg-[#7a4b20] px-6 py-3 text-sm font-semibold text-[#fff6ea] transition-colors duration-200 hover:border-[#643a18] hover:bg-[#643a18]"
              >
                Call Sales Now
              </a>
              <a
                href="https://wa.me/919876543210?text=Hello%20RR%20Cashew%20Industries%2C%20I%20need%20pricing%20for%20bulk%20cashew%20grades."
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#b08956] px-6 py-3 text-sm font-semibold text-[#6a421f] transition-colors duration-200 hover:border-[#7a4b20] hover:bg-[#7a4b20] hover:text-[#fff6ea]"
              >
                WhatsApp Order Enquiry
              </a>
              <a
                href="mailto:sales@rrcashew.com"
                className="rounded-full border border-[#b08956] px-6 py-3 text-sm font-semibold text-[#6a421f] transition-colors duration-200 hover:border-[#7a4b20] hover:bg-[#7a4b20] hover:text-[#fff6ea]"
              >
                Email Sales Team
              </a>
            </div>
          </article>
          <article className="premium-card rounded-[28px] p-8">
            <h2 className="text-3xl text-[#4f2f15] md:text-4xl">Bulk Order Support</h2>
            <ul className="mt-5 space-y-3 text-sm text-[#665846] md:text-base">
              <li>1. Grade guidance for your use-case and price range.</li>
              <li>2. Volume-based commercial quotes.</li>
              <li>3. Dispatch planning with timeline clarity.</li>
              <li>4. Packaging alignment for wholesale or resale.</li>
            </ul>
          </article>
          <article className="rounded-[28px] border border-[#d5bf9f] bg-[#6b421f] p-8 text-[#f6ead7] lg:col-start-2">
            <h2 className="text-3xl text-[#fff4e4] md:text-4xl">Business Hours</h2>
            <div className="mt-5 space-y-3 text-sm md:text-base">
              <p>Monday to Friday: 9:00 AM to 6:00 PM</p>
              <p>Saturday: 9:00 AM to 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
            <a
              href="mailto:sales@rrcashew.com"
              className="mt-7 inline-flex rounded-full border border-[#f4dfc2] bg-[#fff4e4] px-6 py-3 text-sm font-semibold text-[#5d391a] transition-colors duration-200 hover:border-[#f1d2a8] hover:bg-[#f1d2a8]"
            >
              Send Enquiry by Email
            </a>
          </article>
        </div>
      </section>

      <section className="shell">
        <article className="premium-card rounded-[28px] p-6 md:p-8">
          <h2 className="text-3xl text-[#4f2f15] md:text-4xl">Factory Location</h2>
          <p className="mt-2 text-sm text-[#665846] md:text-base">Manganur, Tal. Kagal, Kolhapur, Maharashtra 416236</p>
          <div className="mt-5 overflow-hidden rounded-2xl border border-[#dccbb4]">
            <iframe
              title="RR Cashew Industries Location Map"
              src="https://maps.google.com/maps?q=Manganur%2C%20Tal.%20Kagal%2C%20Kolhapur%2C%20Maharashtra%20416236&z=15&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </article>
      </section>
    </div>
  );
}
