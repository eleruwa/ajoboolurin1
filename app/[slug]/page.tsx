import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { navigation, site } from "@/lib/site";
import { palacePages } from "@/lib/palace-content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(palacePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = palacePages[slug];
  return page
    ? {
        title: page.title,
        description: page.intro,
        openGraph: { title: page.title, description: page.intro, type: "article" },
      }
    : {};
}

export default async function EditorialPage({ params }: Props) {
  const { slug } = await params;
  const page = palacePages[slug];
  if (!page) notFound();

  const relatedLinks = navigation.filter(
    (item) => item.href !== "/" && item.href !== `/${slug}`,
  );

  return (
    <main id="main-content">
      <section className="relative isolate overflow-hidden bg-burgundy px-5 py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute -right-24 -top-36 -z-10 size-[34rem] rounded-full border border-gold/20" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-12 -top-24 -z-10 size-[28rem] rounded-full border border-gold/15" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.26em] text-gold sm:text-xs">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            {page.eyebrow}
          </p>
          <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-8 text-white/75 sm:text-base sm:leading-9">
            {page.intro}
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_17rem] lg:px-8">
        <article className="min-w-0">
          <div className="max-w-4xl">
            {page.sections.map((section, index) => (
              <section key={section.heading} className={index === 0 ? "" : "mt-12 border-t border-black/10 pt-10"}>
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 font-serif text-2xl leading-tight text-burgundy sm:text-3xl">
                  {section.heading}
                </h2>

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-5 text-sm leading-8 text-charcoal/80 sm:text-base sm:leading-9">
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="mt-6 grid gap-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 border-b border-black/5 pb-3 text-sm leading-7 text-charcoal/80 sm:text-base">
                        <span className="mt-[.85rem] size-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.timeline && (
                  <ol className="mt-7 space-y-6 border-l border-gold/60 pl-5 sm:pl-7">
                    {section.timeline.map((item) => (
                      <li key={item.date + item.detail} className="relative">
                        <span className="absolute -left-[1.62rem] top-1.5 size-2.5 rounded-full border-2 border-ivory bg-gold sm:-left-[2.12rem]" aria-hidden="true" />
                        <p className="text-xs font-bold uppercase tracking-[.16em] text-burgundy">{item.date}</p>
                        <p className="mt-2 text-sm leading-8 text-charcoal/80 sm:text-base">{item.detail}</p>
                      </li>
                    ))}
                  </ol>
                )}

                {section.quote && (
                  <blockquote className="mt-6 border-l-2 border-gold bg-white px-6 py-6 font-serif text-lg leading-9 text-burgundy shadow-sm sm:px-8 sm:text-xl">
                    {section.quote.map((line) => <p key={line}>{line}</p>)}
                  </blockquote>
                )}
              </section>
            ))}
          </div>

          {page.notice && (
            <aside className="mt-12 border border-gold/50 bg-white p-6 sm:p-8" aria-label="Publication note">
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-burgundy">Publication note</p>
              <p className="mt-3 text-sm leading-8 text-charcoal/75">{page.notice}</p>
            </aside>
          )}

          <div className="mt-12 border-t border-black/10 pt-7">
            <p className="text-xs leading-6 text-charcoal/55">
              Published by the {site.publisher}.
            </p>
            <Link href="/" className="mt-5 inline-flex min-h-11 items-center text-xs font-bold uppercase tracking-wider text-burgundy underline decoration-gold underline-offset-4 transition hover:text-forest">
              ← Return to homepage
            </Link>
          </div>
        </article>

        <aside className="h-fit border border-black/10 bg-white p-6 lg:sticky lg:top-8">
          <p className="text-[10px] font-bold uppercase tracking-[.2em] text-burgundy">Explore the portal</p>
          <nav className="mt-4 grid" aria-label="Explore other sections">
            {relatedLinks.map((item) => (
              <Link key={item.href} href={item.href} className="flex min-h-11 items-center justify-between gap-3 border-t border-black/5 py-3 text-xs text-charcoal/75 transition hover:text-burgundy">
                {item.label}
                <span className="text-gold" aria-hidden="true">›</span>
              </Link>
            ))}
          </nav>
        </aside>
      </div>
    </main>
  );
}
