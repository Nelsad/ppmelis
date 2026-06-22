import type { SiteContent } from "../types";

const heroImage =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80";

const year = new Date().getFullYear();

export const bs: SiteContent = {
  meta: {
    title: 'P.P. "Melis" | Građevinska firma',
    description:
      "P.P. Melis — građevinska firma specijalizovana za projektovanje i izvođenje stambenih i poslovnih objekata.",
  },
  nav: {
    home: "Početna",
    services: "Usluge",
    about: "O nama",
    projects: "Projekti",
    ongoing: "U toku",
    contact: "Kontakt",
    openMenu: "Otvori meni",
    closeMenu: "Zatvori meni",
  },
  hero: {
    title: "Gradimo vaše snove",
    subtitle:
      'P.P. "Melis" je građevinska firma sa višegodišnjim iskustvom u projektovanju i izvođenju stambenih i poslovnih objekata širom Kosova.',
    cta: "Kontaktirajte nas",
    ctaSecondary: "Naši projekti",
    imageAlt: "Gradilište",
    image: heroImage,
  },
  services: {
    title: "Naše usluge",
    subtitle:
      "Kompletna građevinska rešenja — od prvog crteža do završene realizacije.",
    items: [
      {
        id: "architectural-design",
        title: "Arhitektonski dizajn",
        description:
          "Kreativno i funkcionalno projektovanje stambenih i poslovnih objekata prilagođeno vašim potrebama.",
      },
      {
        id: "construction",
        title: "Građevinarstvo",
        description:
          "Izvođenje građevinskih radova uz poštovanje rokova, budžeta i najviših standarda kvaliteta.",
      },
      {
        id: "project-planning",
        title: "Planiranje projekata",
        description:
          "Detaljno planiranje projekata, dinamika radova, koordinacija resursa i upravljanje vremenom.",
      },
      {
        id: "supervision",
        title: "Nadzor",
        description:
          "Stručni nadzor na gradilištu kako bismo osigurali da se radovi izvode po projektu i propisima.",
      },
      {
        id: "consulting",
        title: "Savjetovanje",
        description:
          "Savjetovanje u vezi investicija, tehničkih rješenja, dozvola i optimizacije troškova gradnje.",
      },
      {
        id: "renovation",
        title: "Renovacija",
        description:
          "Rekonstrukcija i adaptacija postojećih objekata — modernizacija prostora uz očuvanje kvaliteta.",
      },
    ],
  },
  about: {
    title: "O nama",
    description:
      'P.P. "Melis" je porodična građevinska firma osnovana sa ciljem da pruži kvalitetnu gradnju, pouzdanost i transparentnu saradnju sa klijentima. Naš tim stručnjaka vodi projekte od ideje i dizajna do ključa u ruke, uz poštovanje rokova i najviših standarda izvođenja.',
    stats: [
      { value: "30+", label: "Godina iskustva" },
      { value: "200+", label: "Završenih projekata" },
      { value: "100%", label: "Zadovoljnih klijenata" },
    ],
  },
  projectsCompleted: {
    title: "Naše vizije",
    subtitle: "Projekti koje smo dizajnirali i uspješno realizovali",
    projects: [
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
          "Poslovno-skladišni kompleks sa modernim kancelarijskim dijelom i funkcionalnim utovarnim rampama.",
        image: "/projects/lux-dekor.png",
      },
      {
        id: 3,
        title: "Stambena zgrada",
        location: "Prizren",
        description:
          "Savremena stambena zgrada sa četiri nivoa, balkonima i pažljivo osmišljenim eksterijerom i osvjetljenjem.",
        image: "/projects/stambena-zgrada.png",
      },
    ],
  },
  projectsOngoing: {
    title: "Projekti u toku",
    subtitle: "Trenutno radimo na sljedećim projektima",
    projects: [
      {
        id: 1,
        title: "Tranzit Residence",
        location: "Prizren",
        description:
          "Savremeni stambeni kompleks sa stepenastom arhitekturom, terasama sa zelenilom i uređenim parkom za porodično stanovanje.",
        image: "/projects/tranzit-residence.png",
      },
      {
        id: 2,
        title: "Adria Park",
        location: "Prizren",
        description:
          "Savremeni stambeni kompleks sa unutrašnjim dvorištem, terasama sa zelenilom i višestambenim jedinicama.",
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
    ],
  },
  contact: {
    title: "Kontaktirajte nas",
    subtitle: "Pošaljite nam poruku i javićemo vam se u najkraćem roku.",
    addressLabel: "Adresa",
    address: "Petrit Bytyçi 3, Prizren",
    phoneLabel: "Telefon",
    phone: "+383 (49) 739 310",
    emailLabel: "Email",
    email: "privat.p.melis@gmail.com",
    hours: "Radno vrijeme",
    hoursValue: "Pon - Sub: 08:00 - 17:00",
    form: {
      name: "Ime i prezime",
      email: "Email",
      phone: "Telefon",
      message: "Poruka",
      submit: "Pošalji poruku",
      submitting: "Slanje...",
      success: "Hvala! Vaša poruka je primljena. Kontaktiraćemo vas uskoro.",
      notConfigured:
        "Forma nije podešena. Kontaktirajte nas direktno putem emaila.",
      submitError:
        "Greška pri slanju poruke. Pokušajte ponovo ili nas kontaktirajte direktno.",
      errors: {
        name: "Ime i prezime je obavezno.",
        email: "Email je obavezan.",
        emailInvalid: "Unesite ispravnu email adresu.",
        phone: "Telefon je obavezan.",
        message: "Poruka je obavezna.",
      },
    },
  },
  footer: {
    description: "Vaš pouzdan partner u građevinarstvu — od ideje do realizacije.",
    contact: "Kontakt",
    hours: "Radno vrijeme",
    copyright: `© ${year} P.P. "Melis". Sva prava zadržana.`,
  },
};
