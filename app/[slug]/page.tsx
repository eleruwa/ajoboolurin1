import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { editorialPages, navigation } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(editorialPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = editorialPages[slug as keyof typeof editorialPages];
  return page ? { title: page.title, description: page.intro } : {};
}

export default async function EditorialPage({ params }: Props) {
  const { slug } = await params;
  const page = editorialPages[slug as keyof typeof editorialPages];
  if (!page) notFound();
  const current = navigation.find((item) => item.href === `/${slug}`);

  return (
    <main id="main-content">
      <section className="relative overflow-hidden bg-burgundy px-5 py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute -right-20 -top-32 size-[28rem] rounded-full border border-gold/20" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-[10px] font-bold uppercase tracking-[.24em] text-gold">The Eleruwa of Eruwaland</p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl">{page.title}</h1>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-white/75 sm:text-base">{page.intro}</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_18rem] lg:px-8">
        <div className="max-w-3xl">
          <div className="border-l-2 border-gold bg-white px-6 py-7 shadow-sm sm:px-8">
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-burgundy">Palace content review</p>
            <h2 className="mt-4 font-serif text-2xl text-charcoal">Official content in preparation</h2>
            <p className="mt-4 text-sm leading-8 text-charcoal/70 sm:text-base">
              This section is being prepared for publication. Historical, biographical and institutional information will be reviewed and approved by the Palace before it appears here.
            </p>
          </div>
          <Link href="/" className="mt-8 inline-flex min-h-11 items-center text-xs font-bold uppercase tracking-wider text-burgundy underline decoration-gold underline-offset-4 hover:text-forest">
            ← Return to homepage
          </Link>
        </div>
        <aside className="h-fit border border-black/10 bg-white p-6">
          <p className="text-[10px] font-bold uppercase tracking-[.2em] text-burgundy">Explore the portal</p>
          <nav className="mt-4 grid" aria-label="Explore other sections">
            {navigation.filter((item) => item.href !== "/" && item.href !== `/${slug}`).map((item) => (
              <Link key={item.href} href={item.href} className="flex min-h-11 items-center justify-between border-t border-black/5 py-3 text-xs text-charcoal/75 transition hover:text-burgundy">
                {item.label}<span className="text-gold" aria-hidden="true">›</span>
              </Link>
            ))}
          </nav>
        </aside>
      </section>
    </main>
  );
}
