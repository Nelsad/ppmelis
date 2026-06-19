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
    { value: "98%", label: "Zadovoljnih klijenata" },
  ],
};

export const completedProjects: Project[] = [
  {
    id: 1,
    title: "Stambeni kompleks Sunce",
    location: "Beograd, Novi Beograd",
    description:
      "Moderni stambeni kompleks sa 48 stanova, podzemnom garažom i uređenim dvorištem.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: 2,
    title: "Poslovni centar Delta",
    location: "Novi Sad",
    description:
      "Poslovni objekat sa fleksibilnim kancelarijskim prostorima i energetski efikasnim fasadnim sistemom.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  },
  {
    id: 3,
    title: "Porodična vila Aurora",
    location: "Zlatibor",
    description:
      "Luksuzna vila sa panoramskim pogledom, bazenom i prirodnim materijalima u enterijeru.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
];

export const ongoingProjects: Project[] = [
  {
    id: 1,
    title: "Vila na Dedinju",
    location: "Beograd",
    description:
      "Ekskluzivna porodična vila sa podrumom, garažom i smart home sistemom.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: 2,
    title: "Stambena zgrada Park",
    location: "Niš",
    description:
      "Stambena zgrada sa 24 stana, liftom i zelenim krovom za održivu gradnju.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  },
  {
    id: 3,
    title: "Renoviranje hotela",
    location: "Kopaonik",
    description:
      "Kompletna rekonstrukcija hotelskog kompleksa uz proširenje kapaciteta i modernizaciju enterijera.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
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
