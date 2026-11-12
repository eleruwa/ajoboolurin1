import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "The Eleruwa of Eruwaland | Official Royal Portal",
    template: "%s | The Eleruwa of Eruwaland",
  },
  description: "The official digital portal of the Eleruwa of Eruwaland, Eruwa, Oyo State, Nigeria.",
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: site.name,
    title: "The Eleruwa of Eruwaland | Official Royal Portal",
    description: "The official digital portal of the Eleruwa of Eruwaland, Eruwa, Oyo State, Nigeria.",
  },
  twitter: {
    card: "summary",
    title: "The Eleruwa of Eruwaland | Official Royal Portal",
    description: "The official digital portal of the Eleruwa of Eruwaland, Eruwa, Oyo State, Nigeria.",
  },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.domain,
  description: "The official digital platform of the Royal Palace of the Eleruwa of Eruwaland.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Eruwa",
    addressRegion: "Oyo State",
    addressCountry: "NG",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
