export type PalacePage = {
  title: string;
  intro: string;
  eyebrow: string;
  sections: {
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
    timeline?: { date: string; detail: string }[];
    quote?: string[];
  }[];
  notice?: string;
};

export const palacePages: Record<string, PalacePage> = {
  monarch: {
    title: "The Monarch",
    eyebrow: "The Eleruwa of Eruwaland",
    intro: "The life, royal heritage, public service and historic reigns of His Royal Majesty, Oba Samuel Adebayo Adegbola, Ajobo Olurin I.",
    sections: [
      {
        heading: "Royal heritage and ancestry",
        paragraphs: [
          "His Royal Majesty, Oba Samuel Adebayo Adegbola Akanbi Agan, Ajobo Olurin I, was born on 15 January 1952 at Olurin Compound, Oke Oba Quarters, Eruwa, in present-day Ibarapa East Local Government Area of Oyo State.",
          "He was born to Pa Bello Ayinla Adegbola and Mama Olalonpe Abeni Adegbola. His paternal ancestry traces to Oba Olurin Iyanda Agan through Prince Kitoyi Ajobo Ajasa Agan and Prince Oyebade Alao Agan.",
          "His maternal grandmother, Mama Olalonpe Abeni Adegbola, was a princess of the Ajao Royal Family within the Olaribikusi Ruling House."
        ]
      },
      {
        heading: "Education and early career",
        bullets: [
          "Primary education: Islamic Primary School, Sango, Eruwa (1961–1966).",
          "Secondary education: Oke Ogun Baptist Secondary Commercial Modern School and Obaseku High School (1967–1974). The biography records that he achieved the best WASC result in his graduating year.",
          "After a brief teaching career, he joined the Nigeria Customs and Excise Department in 1976 and served in several strategic formations until retiring in 1998 as a Superintendent of Customs."
        ]
      },
      {
        heading: "First reign and institutional leadership",
        paragraphs: [
          "On 16 July 1998, he ascended the throne of his forefathers as the Eleruwa of Eruwa through the Olaribikusi Ruling House. His 21-year reign is described in the Palace biography as a period of social harmony, economic growth and institutional development.",
          "He also served as Deputy Chairman of the Oyo State Council of Obas and Chiefs."
        ]
      },
      {
        heading: "A historic return to the throne",
        timeline: [
          { date: "2024", detail: "A new selection process was commenced with the approval of the Oyo State Government. Oba Adegbola presented himself for service from the Olurin Ruling Family of Akalako Ruling House." },
          { date: "2025", detail: "Among eighteen candidates, he was unanimously selected by the Eruwa Kingmakers. The Oyo State Government approved his appointment on 6 March 2025." },
          { date: "5 September 2026", detail: "The newly renovated and extended Permanent Eleruwa Palace was commissioned during the grand finale of the First Coronation Anniversary." }
        ]
      },
      {
        heading: "Family",
        paragraphs: [
          "His Royal Majesty is married to Olori Carline Olajire Adegbola and Olori Oyefunke Adegbola. The biography records that the unions are blessed with children and grandchildren."
        ]
      },
      {
        heading: "Royal benediction (Oríkì)",
        quote: [
          "Kà àdé pẹ́ lórí, kí bàtà pẹ́ lẹ́sẹ̀, kí ìrù kéré ó kìnnì, kí ẹṣin ó bàkò jẹ́ oko pẹ̀pẹ̀.",
          "Kabiyesi Oba Samuel Adebayo Adegbola Ajobo Olurin I, Eleruwa of Eruwaland. Àmín."
        ]
      }
    ]
  },
  palace: {
    title: "The Royal Palace",
    eyebrow: "The seat of authority in Eruwaland",
    intro: "The Royal Palace in Oke Oba Quarters, Eruwa, is the official seat of traditional authority, cultural administration and ceremonial governance.",
    sections: [
      {
        heading: "Palace modernisation",
        paragraphs: [
          "Under the present reign, the Permanent Eleruwa Palace has undergone extensive reconstruction, renovation and modernisation. The investment is intended to restore the dignity, functionality and institutional significance of the Palace and provide a befitting setting for traditional governance, community consultations and official engagements.",
          "The newly renovated and extended Palace was officially commissioned by the Executive Governor of Oyo State, His Excellency Engr. Seyi Abiodun Makinde, FNSE, on 5 September 2026, during the grand finale of the First Coronation Anniversary."
        ]
      },
      {
        heading: "Council administration and chieftaincy structure",
        paragraphs: ["The governance structure of Eruwaland is rooted in consultative traditional administration and works alongside:"],
        bullets: [
          "The Eleruwa-in-Council",
          "High Chiefs, Traditional Chiefs and Baales",
          "The Eruwa Elders Council",
          "Community Development Associations and Youth Coalitions"
        ]
      },
      {
        heading: "Protocol and access",
        paragraphs: [
          "In-person engagements, cultural consultations, courtesy visits and community matters are received according to established Palace procedures. Access to the throne follows protocol, order and traditional respect."
        ]
      }
    ]
  },
  eruwaland: {
    title: "Eruwaland",
    eyebrow: "Heritage, culture and community",
    intro: "An ancient Yoruba kingdom in Ibarapa East, set among the hills and valleys of Ibarapaland in Oyo State.",
    sections: [
      {
        heading: "History, migration and foundation",
        paragraphs: [
          "Historical traditions trace the ancestry of Eruwa's founders to the Old Oyo Empire. Early settlers established communities around strategically positioned hills that offered security and visibility. These settlements developed into quarters including Anko, Oke Oba, Isaba and Aborerin.",
          "Obaseeku, also celebrated as Ododo Baba Ewu, is remembered as the legendary founder and progenitor of the royal dynasty.",
          "Oba Olurin Iyanda Agan is renowned for bringing neighbouring settlements—Aborerin, Anko and Isaba—together in the central valley that constitutes present-day Eruwaland. He is hailed as the architect of modern Eruwa's configuration."
        ]
      },
      {
        heading: "The hills of Eruwa",
        paragraphs: ["The hills are part of the historic topography that shaped the town's defence and culture."],
        bullets: [
          "Akolu Hill", "Obaseeku Hill", "Ilewu Hill", "Adoko Hill", "Andoro Hill",
          "Apanpa Hill", "Eetaka Hill", "Ofere Hill", "Ogodo Hill", "Ojoko Hill",
          "Okele Hill", "Oluweri Hill", "Wee-Wee-Onigba-Poro Hill"
        ]
      },
      {
        heading: "Eruwa anthem",
        quote: ["Ilu Eruwa Ojoko,", "Ng ko ni gbagbe re,", "Ng o gbe o leke okan mi,", "Ni ile Yoruba..."]
      }
    ]
  },
  news: {
    title: "Royal News and Press Releases",
    eyebrow: "Official updates from the Eleruwa Palace",
    intro: "Palace statements and community announcements issued by the Directorate of Media and Public Communications to the Eleruwa of Eruwaland.",
    sections: [
      {
        heading: "Governor commissions renovated Eleruwa Palace",
        paragraphs: [
          "5 September 2026 — The First Coronation Anniversary reached its grand finale with the official commissioning of the newly renovated and extended Eleruwa Palace by Governor Seyi Makinde. The Governor was honoured with the title Aare Asoludero of Ibarapaland, while First Lady Engr. Tamunominini Makinde was installed as Yeye Aare Asoludero."
        ]
      },
      {
        heading: "Chieftaincy titles mark anniversary activities",
        paragraphs: [
          "27 August 2026 — Dr. Olusola Ayandele and Chief Adewale Atanda were installed as Bobagunwa of Eruwaland and Otunba of Ibarapaland respectively, alongside their spouses, marking the commencement of the First Coronation Anniversary celebrations."
        ]
      },
      {
        heading: "Palace congratulates Oyo State Head of Service",
        paragraphs: [
          "29 May 2026 — The Royal Palace extended congratulations to Mrs. Adenike Ayobami Fasina on her appointment as Head of Civil and Public Service of Oyo State, commending Governor Seyi Makinde for rewarding merit, professionalism and administrative excellence."
        ]
      }
    ]
  },
  perspectives: {
    title: "Royal Perspectives",
    eyebrow: "Speeches, commentaries and institutional reviews",
    intro: "Reflections on the developmental philosophy and institutional trajectory of the Eleruwa Palace.",
    sections: [
      {
        heading: "One year of the Eleruwa: from Palace restoration to a new development agenda",
        paragraphs: [
          "In its first year under Oba Samuel Adebayo Adegbola Ajobo Olurin I, the Eleruwa Palace has helped restore peace in a longstanding religious leadership dispute, strengthened youth participation, intensified infrastructure advocacy and positioned Eruwa's agricultural economy for a wider industrial conversation."
        ],
        bullets: [
          "Peace-building and conflict resolution: the source records the resolution of the decades-long Chief Imamship crisis through consultations with the Eruwa Elders Council and religious leaders.",
          "Restoration of traditional authority: re-establishing the Palace as an active institution of mediation and development coordination after a six-year leadership vacuum (2019–2025).",
          "Strategic infrastructure advocacy: backing the 38.9-kilometre Ido-Akufo Junction–Eruwa road reconstruction at ₦50.34 billion and the Eleyele–Ido–Eruwa road commitment.",
          "Agricultural transformation and industrialisation: promoting the Eruwa Farm Estate/Agricultural Transformation Centre to support local processing of cassava, cashew and palm kernel.",
          "Youth inclusion and community security: developing partnerships with the Eruwa Youth Movement and supporting community-driven security frameworks."
        ]
      }
    ]
  },
  gallery: {
    title: "Media Gallery",
    eyebrow: "Royal archives and official photography",
    intro: "A place for Palace-approved photographs and official media from Eruwaland.",
    sections: [
      {
        heading: "Official media archive",
        paragraphs: [
          "The supplied Palace materials identify a Media Gallery for official photography, royal archives and digital media assets. No image files or publication permissions were included with the current content package."
        ]
      }
    ],
    notice: "Gallery publication is pending receipt and approval of official photographs, captions and usage permissions."
  },
  visit: {
    title: "Visit Eruwa",
    eyebrow: "Visitor information and royal hospitality",
    intro: "Discover Eruwa's heritage, historic hills and cultural landmarks.",
    sections: [
      {
        heading: "Discover the town",
        paragraphs: [
          "Eruwa is the headquarters of Ibarapa East Local Government Area in Oyo State. The Palace materials highlight the town's historic quarters, hills and cultural heritage."
        ],
        bullets: ["Oke Oba Quarters", "Anko", "Isaba", "Aborerin", "The historic hills of Eruwa"]
      },
      {
        heading: "Palace visits and protocol",
        paragraphs: [
          "Courtesy visits, cultural consultations and in-person engagements are received according to established Palace procedures. Visitors should make arrangements through the official Palace Secretariat before planning an audience."
        ]
      }
    ],
    notice: "A detailed visitor guide, opening arrangements and Secretariat contact details have not yet been supplied for publication."
  },
  contact: {
    title: "Contact the Palace",
    eyebrow: "Palace Secretariat and public communications",
    intro: "Official correspondence and enquiries for the Eleruwa of Eruwaland.",
    sections: [
      {
        heading: "Directorate of Media and Public Communications",
        paragraphs: [
          "The supplied Palace materials identify the Directorate of Media and Public Communications and the Palace Secretariat as the official channels for Palace information and correspondence."
        ]
      },
      {
        heading: "Protocol for engagements",
        paragraphs: [
          "Courtesy visits, cultural consultations and community matters are received according to established Palace procedures. Requests for an audience should follow Palace protocol."
        ]
      }
    ],
    notice: "Verified telephone numbers, email addresses, postal details and contact-form delivery instructions have not yet been supplied. Contact details will not be published until confirmed by the Palace."
  }
};
