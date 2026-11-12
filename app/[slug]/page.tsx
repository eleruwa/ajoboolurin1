import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { editorialPages } from "@/lib/site";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return Object.keys(editorialPages).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = editorialPages[slug as keyof typeof editorialPages];
  return page ? { title: page.title, description: page.intro } : {};
}
export default async function EditorialPage({ params }: Props) {
  const { slug } = await params;
  const page = editorialPages[slug as keyof typeof editorialPages];
  if (!page) notFound();
  return <main id="main-content"><section className="bg-burgundy px-5 py-20 text-white sm:py-28"><div className="mx-auto max-w-7xl"><p className="text-xs font-semibold uppercase tracking-[.2em] text-gold">The Eleruwa of Eruwaland</p><h1 className="mt-5 font-serif text-4xl sm:text-5xl">{page.title}</h1><p className="mt-5 max-w-2xl text-base leading-8 text-white/75">{page.intro}</p></div></section><section className="mx-auto max-w-4xl px-5 py-20"><div className="border-l-2 border-gold pl-6"><h2 className="font-serif text-2xl text-charcoal">Official content in preparation</h2><p className="mt-4 text-base leading-8 text-charcoal/70">This section is being prepared for publication. Historical, biographical and institutional information will be reviewed and approved by the Palace before it appears here.</p></div></section></main>;
}