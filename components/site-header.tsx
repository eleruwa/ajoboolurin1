"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="relative z-20 border-b border-black/10 bg-ivory">
      <div className="bg-forest px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[.2em] text-white sm:text-xs">
        Official Royal Portal <span aria-hidden="true">·</span> Eruwa, Oyo State, Nigeria
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label={site.name + " home"} onClick={() => setOpen(false)}>
          <span className="flex size-12 shrink-0 items-center justify-center border border-gold bg-white/50 font-serif text-2xl text-burgundy transition group-hover:bg-white" aria-hidden="true">♛</span>
          <span className="min-w-0">
            <span className="block font-serif text-sm font-bold uppercase tracking-[.07em] text-burgundy sm:text-base">The Eleruwa of Eruwaland</span>
            <span className="mt-1 block truncate text-[10px] tracking-wide text-charcoal/70 sm:text-xs">The Royal Palace <span aria-hidden="true">·</span> Eruwa, Nigeria</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-4 2xl:flex" aria-label="Main navigation">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined}
                className={`border-b py-2 text-[11px] font-semibold tracking-wide transition ${active ? "border-burgundy text-burgundy" : "border-transparent text-charcoal/75 hover:border-gold hover:text-burgundy"}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-sm border border-burgundy px-3 text-xs font-bold uppercase tracking-wider text-burgundy transition hover:bg-burgundy hover:text-white 2xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="text-base leading-none" aria-hidden="true">{open ? "×" : "☰"}</span>
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-navigation" className="absolute inset-x-0 top-full border-b border-black/10 bg-ivory px-5 py-3 shadow-xl 2xl:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl gap-1 sm:grid-cols-2">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex min-h-11 items-center justify-between border-b border-black/5 px-3 py-3 text-sm transition hover:bg-white ${active ? "font-bold text-burgundy" : "text-charcoal"}`}>
                  {item.label}
                  <span className="text-gold" aria-hidden="true">›</span>
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
