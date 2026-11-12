import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.eleruwa.com.ng"),
  title: { default: "The Eleruwa of Eruwaland | Official Royal Portal", template: "%s | The Eleruwa of Eruwaland" },
  description: "The official digital portal of the Eleruwa of Eruwaland, Eruwa, Oyo State, Nigeria.",
  applicationName: "The Eleruwa of Eruwaland",
  openGraph: { type: "website", locale: "en_NG", siteName: "The Eleruwa of Eruwaland", title: "The Eleruwa of Eruwaland | Official Royal Portal", description: "The official digital portal of the Eleruwa of Eruwaland, Eruwa, Oyo State, Nigeria." },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to main content</a><SiteHeader />{children}<SiteFooter /></body></html>;
}