import Link from "next/link";
import { site } from "@/lib/site";
export function SiteFooter() {
  return <footer className="bg-charcoal text-white">
    <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-2 lg:px-8">
      <div><p className="font-serif text-lg">{site.name}</p><p className="mt-3 max-w-md text-sm leading-7 text-white/65">The official digital platform of the Royal Palace of the Eleruwa of Eruwaland.</p></div>
      <div className="sm:text-right"><p className="text-xs font-semibold uppercase tracking-[.18em] text-gold">Official location</p><p className="mt-3 text-sm leading-6 text-white/75">{site.location}</p><Link href="/contact" className="mt-4 inline-block text-sm text-gold underline underline-offset-4">Contact the Palace</Link></div>
    </div>
    <div className="border-t border-white/15 px-5 py-5 text-center text-xs text-white/50">© {new Date().getFullYear()} {site.name}. Published by the {site.publisher}.</div>
  </footer>;
}