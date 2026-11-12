import Link from "next/link";
import { navigation, site } from "@/lib/site";

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
              <span className="h-px w-9 bg-gold" /> The Official Royal Portal
            </p>
            <h1 className="mt-7 max-w-3xl font-serif text-4xl leading-[1.13] tracking-tight sm:text-6xl lg:text-7xl">
              The Eleruwa of <span className="text-gold">Eruwaland</span>
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-8 text-white/80 sm:text-base sm:leading-9">
              The digital home of the Royal Palace, its institution, the heritage of Eruwaland and official public communications.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/monarch" className="inline-flex min-h-12 items-center justify-center bg-gold px-6 text-xs font-bold uppercase tracking-wider text-charcoal transition hover:bg-white">
                The Monarch <span className="ml-3 text-base" aria-hidden="true">›</span>
              </Link>
              <Link href="/eruwaland" className="inline-flex min-h-12 items-center justify-center border border-white/50 px-6 text-xs font-bold uppercase tracking-wider text-white transition hover:border-gold hover:bg-white/10">
                Discover Eruwaland
              </Link>
            </div>
          </div>

          <div className="relative mx-auto flex min-h-[19rem] w-full max-w-md items-center justify-center border border-gold/50 bg-black/10 p-8 text-center sm:min-h-[23rem]">
            <div className="absolute inset-3 border border-gold/20" aria-hidden="true" />
            <div className="relative">
              <div className="mx-auto flex size-24 items-center justify-center rounded-full border border-gold/70 bg-burgundy/70 font-serif text-5xl text-gold shadow-[0_0_0_9px_rgba(197,160,74,.08)]" aria-hidden="true">♛</div>
              <p className="mt-8 font-serif text-2xl text-white">The Royal Palace</p>
              <p className="mx-auto mt-3 max-w-xs text-xs leading-6 text-white/65">
                Official royal portrait and Palace-approved imagery will appear here after media verification.
              </p>
              <span className="mt-6 inline-block h-px w-16 bg-gold/70" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.24em] text-burgundy">A Royal Institution</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-charcoal sm:text-4xl">Heritage, dignity and service</h2>
          </div>
          <p className="max-w-2xl text-sm leading-8 text-charcoal/70 sm:text-base">
            This portal will provide verified information about the Eleruwa institution, the Royal Palace and Eruwaland, alongside official news, perspectives and visitor information.
          </p>
        </div>

        <div className="mt-12 grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {navigation.filter((item) => item.href !== "/").map((item, index) => (
            <Link key={item.href} href={item.href} className="group flex min-h-44 flex-col justify-between bg-white p-6 transition duration-200 hover:bg-ivory sm:p-7">
              <span className="text-[10px] font-semibold tracking-[.2em] text-gold">0{index + 1}</span>
              <div className="mt-8 flex items-end justify-between gap-3">
                <h3 className="font-serif text-xl text-burgundy transition group-hover:text-forest">{item.label}</h3>
                <span className="text-xl text-gold transition group-hover:translate-x-1" aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest px-5 py-16 text-center text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden="true">
          <div className="mx-auto mt-[-10rem] size-[28rem] rounded-full border border-gold" />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[.24em] text-gold">The Eleruwa of Eruwaland</p>
          <p className="mx-auto mt-5 max-w-2xl font-serif text-2xl leading-relaxed sm:text-3xl">An official platform for the Palace and the people of Eruwaland.</p>
          <p className="mt-5 text-xs leading-6 text-white/70 sm:text-sm">{site.location}</p>
        </div>
      </section>
    </main>
  );
}
