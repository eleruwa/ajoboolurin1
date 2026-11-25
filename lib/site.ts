export const site = {
  name: "The Eleruwa of Eruwaland",
  monarch: "His Royal Majesty, Oba Samuel Adebayo Adegbola Ajobo Olurin I",
  location: "Eruwa, Ibarapa East Local Government Area, Oyo State, Nigeria",
  domain: "https://www.eleruwa.com.ng",
  publisher: "Directorate of Media and Public Communications to the Eleruwa of Eruwaland",
};
export const navigation = [
  { label: "Home", href: "/" }, { label: "The Monarch", href: "/monarch" },
  { label: "Royal Palace", href: "/palace" }, { label: "Eruwaland", href: "/eruwaland" },
  { label: "Royal News", href: "/news" }, { label: "Perspectives", href: "/perspectives" },
  { label: "Media Gallery", href: "/gallery" }, { label: "Visit Eruwa", href: "/visit" },
  { label: "Contact", href: "/contact" },
] as const;
export const editorialPages = {
  monarch: { title: "The Monarch", intro: "The royal profile and public work of the Eleruwa of Eruwaland." },
  palace: { title: "The Royal Palace", intro: "The institution, responsibilities and public communications of the Palace." },
  eruwaland: { title: "About Eruwaland", intro: "The people, heritage and contemporary life of Eruwaland." },
  news: { title: "Royal News", intro: "Official announcements, Palace news and verified public updates." },
  perspectives: { title: "Royal Perspectives", intro: "Commentary, reflections and institutional perspectives." },
  gallery: { title: "Media Gallery", intro: "Official photographs and media from the Palace." },
  visit: { title: "Visit Eruwa", intro: "Visitor information and guidance for those wishing to learn about Eruwa." },
  contact: { title: "Contact the Palace", intro: "Official channels for correspondence, media enquiries and audience requests." },
} as const;