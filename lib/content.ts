export type Project = {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
};

export const navLinks = [
  { href: "#pocetna", label: "Početna" },
  { href: "#usluge", label: "Usluge" },
  { href: "#o-nama", label: "O nama" },
  { href: "#projekti", label: "Projekti" },
  { href: "#u-toku", label: "U toku" },
  { href: "#kontakt", label: "Kontakt" },
];

export const heroContent = {
  title: "Gradimo vaše snove",
  subtitle:
    "P.P. \"Melis\" je građevinska firma sa višegodišnjim iskustvom u projektovanju i izvođenju stambenih i poslovnih objekata širom Kosova.",
  cta: "Kontaktirajte nas",
  image:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80",
};

export type Service = {
  id: string;
  title: string;
  description: string;
};

export const servicesContent = {
  title: "Naše usluge",
  subtitle:
    "Kompletna građevinska rešenja — od prvog crteža do završene realizacije.",
  services: [
    {
      id: "architectural-design",
      title: "Architectural Design",
      description:
        "Kreativno i funkcionalno projektovanje stambenih i poslovnih objekata prilagođeno vašim potrebama.",
    },
    {
      id: "construction",
      title: "Construction",
      description:
        "Izvođenje građevinskih radova uz poštovanje rokova, budžeta i najviših standarda kvaliteta.",
    },
    {
      id: "project-planning",
      title: "Project Planning",
      description:
        "Detaljno planiranje projekata, dinamika radova, koordinacija resursa i upravljanje vremenom.",
    },
    {
      id: "supervision",
      title: "Supervision",
      description:
        "Stručni nadzor na gradilištu kako bismo osigurali da se radovi izvode po projektu i propisima.",
    },
    {
      id: "consulting",
      title: "Consulting",
      description:
        "Savetovanje u vezi investicija, tehničkih rešenja, dozvola i optimizacije troškova gradnje.",
    },
    {
      id: "renovation",
      title: "Renovation",
      description:
        "Rekonstrukcija i adaptacija postojećih objekata — modernizacija prostora uz očuvanje kvaliteta.",
    },
  ] satisfies Service[],
};

export const aboutContent = {
  title: "O nama",
  description:
    "P.P. \"Melis\" je porodična građevinska firma osnovana sa ciljem da pruži kvalitetnu gradnju, pouzdanost i transparentnu saradnju sa klijentima. Naš tim stručnjaka vodi projekte od ideje i dizajna do ključa u ruke, uz poštovanje rokova i najviših standarda izvođenja.",
  stats: [
    { value: "30+", label: "Godina iskustva" },
    { value: "200+", label: "Završenih projekata" },
    { value: "100%", label: "Zadovoljnih klijenata" },
  ],
};

export const completedProjects: Project[] = [
  {
    id: 1,
    title: "Rehabilitacioni centar",
    location: "Prizren",
    description:
      "Rehabilitacioni centar u prirodnom okruženju, sa višenivojskom arhitekturom i uređenim spoljnim prostorom.",
    image: "/projects/qendra-rehabilitimit.png",
  },
  {
    id: 2,
    title: "Lux Dekor",
    location: "Prizren",
    description:
      "Poslovno-skladisni kompleks sa modernim kancelarijskim delom i funkcionalnim utovarnim rampama.",
    image: "/projects/lux-dekor.png",
  },
  {
    id: 3,
    title: "Stambena zgrada",
    location: "Prizren",
    description:
      "Savremena stambena zgrada sa četiri nivoa, balkonima i pažljivo osmišljenim eksterijerom i osvetljenjem.",
    image: "/projects/stambena-zgrada.png",
  },
];

export const ongoingProjects: Project[] = [
  {
    id: 1,
    title: "Tranzit Residence",
    location: "Prizren",
    description:
      "Stambeni kompleks sa zelenim krovovima, terasama i uređenim dvorištem za porodično stanovanje.",
    image: "/projects/tranzit-residence.png",
  },
  {
    id: 2,
    title: "Adria Park",
    location: "Prizren",
    description:
      "Savremeni stambeni kompleks sa zelenim krovovima, unutrašnjim dvorištem i višestambenim jedinicama.",
    image: "/projects/adria-park.png",
  },
  {
    id: 3,
    title: "Objekat sa stambenim i poslovnim jedinicama",
    location: "Prizren",
    description:
      "Stambeno-poslovni objekat sa modernom fasadom, balkonima i poslovnim prostorima u prizemlju.",
    image: "/projects/prizren-banim-afarizem.png",
  },
];

export const contactInfo = {
  address: "Petrit Bytyçi 3, Prizren",
  phone: "+383 (49) 739 310",
  email: "privat.p.melis@gmail.com",
  hours: "Pon - Sub: 08:00 - 17:00",
};

export const footerContent = {
  description:
    "Vaš pouzdan partner u građevinarstvu — od ideje do realizacije.",
  copyright: `© ${new Date().getFullYear()} P.P. "Melis". Sva prava zadržana.`,
};
