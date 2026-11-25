import Link from "next/link";
import { navigation, site } from "@/lib/site";

const highlights = [
  {
    date: "05 September 2026",
    title: "A renewed Royal Palace",
    description: "The newly renovated and extended Permanent Eleruwa Palace was commissioned during the grand finale of the First Coronation Anniversary.",
    href: "/palace",
    action: "Explore the Palace",
  },
  {
    date: "27 August 2026",
    title: "Honouring service to Eruwaland",
    description: "Dr. Olusola Ayandele and Chief Adewale Atanda received the titles Bobagunwa of Eruwaland and Otunba of Ibarapaland.",
    href: "/news",
    action: "Read Palace news",
  },
  {
    date: "A year of renewal",
    title: "Peace, participation and development",
    description: "The Palace's first-year review highlights reconciliation, youth inclusion, infrastructure advocacy and agricultural transformation.",
    href: "/perspectives",
    action: "Read the review",
  },
];

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="relative isolate overflow-hidden bg-burgundy text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[.13]" aria-hidden="true">
          <div className="absolute -right-32 -top-40 size-[38rem] rounded-full border border-gold" />
          <div className="absolute -right-20 -top-28 size-[32rem] rounded-full border border-gold" />
          <div className="absolute -right-8 -top-16 size-[26rem] rounded-full border border-gold" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gold/40" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:py-28 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:px-8 lg:py-32">
          <div>
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.28em] text-gold sm:text-xs">
              <span className="h-px w-9 bg-gold" aria-hidden="true" /> The Official Royal Portal
            </p>
            <h1 className="mt-7 max-w-3xl font-serif text-4xl leading-[1.13] tracking-tight sm:text-6xl lg:text-7xl">
              The Eleruwa of <span className="text-gold">Eruwaland</span>
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-8 text-white/80 sm:text-base sm:leading-9">
              Enter the digital home of the Royal Palace: a place for the throne, the heritage of Eruwaland, the work of its traditional institutions and official public communications.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/monarch" className="inline-flex min-h-12 items-center justify-center bg-gold px-6 text-xs font-bold uppercase tracking-wider text-charcoal transition hover:bg-white">
                Meet the Monarch <span className="ml-3 text-base" aria-hidden="true">›</span>
              </Link>
              <Link href="/eruwaland" className="inline-flex min-h-12 items-center justify-center border border-white/50 px-6 text-xs font-bold uppercase tracking-wider text-white transition hover:border-gold hover:bg-white/10">
                Discover Eruwaland
              </Link>
            </div>
          </div>

          <div className="relative mx-auto flex min-h-[21rem] w-full max-w-md items-center justify-center border border-gold/50 bg-black/10 p-8 text-center sm:min-h-[25rem]">
            <div className="absolute inset-3 border border-gold/20" aria-hidden="true" />
            <div className="relative">
              <div className="mx-auto flex size-24 items-center justify-center rounded-full border border-gold/70 bg-burgundy/70 font-serif text-5xl text-gold shadow-[0_0_0_9px_rgba(197,160,74,.08)]" aria-hidden="true">♛</div>
              <p className="mt-8 text-[10px] font-bold uppercase tracking-[.24em] text-gold">The Royal Throne</p>
              <p className="mt-3 font-serif text-2xl leading-snug text-white">His Royal Majesty</p>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-white/80">{site.monarch}</p>
              <span className="mt-6 inline-block h-px w-16 bg-gold/70" aria-hidden="true" />
              <p className="mt-4 text-[10px] uppercase tracking-[.18em] text-white/60">Eleruwa of Eruwaland</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-8 border-b border-black/10 pb-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.24em] text-burgundy">A Royal Institution</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-charcoal sm:text-4xl">Heritage, dignity and service</h2>
          </div>
          <p className="max-w-2xl text-sm leading-8 text-charcoal/70 sm:text-base">
            This official portal brings together the story of the Eleruwa, the Royal Palace and the people of Eruwaland. It is published by the {site.publisher}.
          </p>
        </div>

        <div className="mt-12 grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {navigation.filter((item) => item.href !== "/").map((item, index) => (
            <Link key={item.href} href={item.href} className="group flex min-h-40 flex-col justify-between bg-white p-6 transition duration-200 hover:bg-ivory sm:p-7">
              <span className="text-[10px] font-semibold tracking-[.2em] text-gold">0{index + 1}</span>
              <div className="mt-8 flex items-end justify-between gap-3">
                <h3 className="font-serif text-xl text-burgundy transition group-hover:text-forest">{item.label}</h3>
                <span className="text-xl text-gold transition group-hover:translate-x-1" aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.24em] text-burgundy">From the Palace</p>
              <h2 className="mt-3 font-serif text-3xl text-charcoal sm:text-4xl">News and milestones</h2>
            </div>
            <Link href="/news" className="text-xs font-bold uppercase tracking-wider text-burgundy underline decoration-gold underline-offset-4">All Palace news</Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {highlights.map((item, index) => (
              <article key={item.title} className="flex h-full flex-col border border-black/10 bg-ivory p-6 sm:p-7">
                <p className="text-[10px] font-bold uppercase tracking-[.16em] text-gold">{item.date}</p>
                <h3 className="mt-5 font-serif text-xl leading-snug text-burgundy">{item.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-charcoal/70">{item.description}</p>
                <Link href={item.href} className="mt-7 inline-flex min-h-10 items-center text-xs font-bold uppercase tracking-wider text-burgundy underline decoration-gold underline-offset-4">
                  {item.action} <span className="ml-2" aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[.24em] text-burgundy">The Kingdom</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-charcoal sm:text-4xl">An ancient Yoruba heritage</h2>
          <p className="mt-5 max-w-xl text-sm leading-8 text-charcoal/70 sm:text-base">
            Eruwa, in Ibarapa East Local Government Area of Oyo State, is a historic community shaped by its people, traditions, quarters and surrounding hills.
          </p>
          <Link href="/eruwaland" className="mt-7 inline-flex min-h-11 items-center text-xs font-bold uppercase tracking-wider text-burgundy underline decoration-gold underline-offset-4">
            Explore Eruwaland <span className="ml-2" aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-px border border-black/10 bg-black/10 sm:grid-cols-3">
          {["Akolu", "Obaseeku", "Ilewu", "Adoko", "Andoro", "Apanpa"].map((hill) => (
            <div key={hill} className="flex min-h-24 items-center justify-center bg-white p-4 text-center">
              <span className="font-serif text-lg text-burgundy">{hill} <span className="font-sans text-[10px] text-charcoal/50">Hill</span></span>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest px-5 py-16 text-center text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden="true">
          <div className="mx-auto mt-[-10rem] size-[28rem] rounded-full border border-gold" />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[.24em] text-gold">The Eleruwa of Eruwaland</p>
          <p className="mx-auto mt-5 max-w-2xl font-serif text-2xl leading-relaxed sm:text-3xl">A living institution rooted in heritage, guided by service and committed to the people of Eruwaland.</p>
          <p className="mt-5 text-xs leading-6 text-white/70 sm:text-sm">{site.location}</p>
          <Link href="/contact" className="mt-8 inline-flex min-h-12 items-center justify-center border border-gold px-6 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-gold hover:text-charcoal">
            Contact the Palace
          </Link>
        </div>
      </section>
    </main>
  );
}
