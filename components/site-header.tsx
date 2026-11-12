"use client";
import Link from "next/link";
import { useState } from "react";
import { navigation, site } from "@/lib/site";
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="border-b border-black/10 bg-ivory">
    <div className="bg-forest px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[.2em] text-white sm:text-xs">Official Royal Portal · Eruwa, Oyo State, Nigeria</div>
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 lg:px-8">
      <Link href="/" className="flex min-w-0 items-center gap-3" aria-label={site.name + " home"}>
        <span className="flex size-12 shrink-0 items-center justify-center border border-gold text-2xl text-burgundy" aria-hidden="true">♛</span>
        <span className="min-w-0"><span className="block font-serif text-sm font-bold uppercase tracking-[.08em] text-burgundy sm:text-base">The Eleruwa of Eruwaland</span><span className="mt-1 block truncate text-[10px] text-charcoal/70 sm:text-xs">The Royal Palace · Eruwa, Nigeria</span></span>
      </Link>
      <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">{navigation.map((item) => <Link key={item.href} href={item.href} className="text-xs font-medium text-charcoal/80 transition hover:text-burgundy">{item.label}</Link>)}</nav>
      <button type="button" className="rounded border border-burgundy px-4 py-2 text-sm font-semibold text-burgundy xl:hidden" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>{open ? "Close" : "Menu"}</button>
    </div>
    {open && <nav id="mobile-navigation" className="grid gap-1 border-t border-black/10 bg-white px-5 py-4 xl:hidden" aria-label="Mobile navigation">{navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="min-h-11 py-3 text-sm text-charcoal">{item.label}</Link>)}</nav>}
  </header>;
}