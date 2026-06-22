import type { SiteContent } from "../types";

const heroImage =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80";

const year = new Date().getFullYear();

export const sq: SiteContent = {
  meta: {
    title: 'P.P. "Melis" | Kompani ndërtimi',
    description:
      "P.P. Melis — kompani ndërtimi e specializuar në projektimin dhe realizimin e objekteve banimi dhe biznesi.",
  },
  nav: {
    home: "Ballina",
    services: "Shërbimet",
    about: "Rreth nesh",
    projects: "Projektet",
    ongoing: "Në vazhdim",
    contact: "Kontakt",
    openMenu: "Hap menunë",
    closeMenu: "Mbyll menunë",
  },
  hero: {
    title: "Ndërtojmë ëndrrat tuaja",
    subtitle:
      'P.P. "Melis" është një kompani ndërtimi me përvojë shumëvjeçare në projektimin dhe realizimin e objekteve banimi dhe biznesi në të gjithë Kosovën.',
    cta: "Na kontaktoni",
    ctaSecondary: "Projektet tona",
    imageAlt: "Vend pune ndërtimi",
    image: heroImage,
  },
  services: {
    title: "Shërbimet tona",
    subtitle:
      "Zgjidhje të plota ndërtimi — nga vizatimi i parë deri te realizimi i përfunduar.",
    items: [
      {
        id: "architectural-design",
        title: "Dizajn arkitektonik",
        description:
          "Projektim kreativ dhe funksional i objekteve banimi dhe biznesi të përshtatur me nevojat tuaja.",
      },
      {
        id: "construction",
        title: "Ndërtim",
        description:
          "Kryerja e punëve ndërtimore me respektim të afateve, buxhetit dhe standardeve më të larta të cilësisë.",
      },
      {
        id: "project-planning",
        title: "Planifikim projektesh",
        description:
          "Planifikim i detajuar i projekteve, dinamika e punëve, koordinimi i burimeve dhe menaxhimi i kohës.",
      },
      {
        id: "supervision",
        title: "Mbikëqyrje",
        description:
          "Mbikëqyrje profesionale në kantier për të siguruar që punët kryhen sipas projektit dhe rregulloreve.",
      },
      {
        id: "consulting",
        title: "Konsulencë",
        description:
          "Këshillim për investime, zgjidhje teknike, leje dhe optimizimin e kostove të ndërtimit.",
      },
      {
        id: "renovation",
        title: "Rinovim",
        description:
          "Rikonstruksion dhe adaptim i objekteve ekzistuese — modernizim i hapësirave duke ruajtur cilësinë.",
      },
    ],
  },
  about: {
    title: "Rreth nesh",
    description:
      'P.P. "Melis" është një kompani familjare ndërtimi e themeluar me qëllim të ofrojë ndërtim cilësor, besueshmëri dhe bashkëpunim transparent me klientët. Ekipi ynë i ekspertëve udhëheq projektet nga ideja dhe dizajni deri te dorëzimi me çelës në dorë, duke respektuar afatet dhe standardet më të larta të realizimit.',
    stats: [
      { value: "30+", label: "Vite përvojë" },
      { value: "200+", label: "Projekte të përfunduara" },
      { value: "100%", label: "Klientë të kënaqur" },
    ],
  },
  projectsCompleted: {
    title: "Vizionet tona",
    subtitle: "Projekte që kemi projektuar dhe realizuar me sukses",
    projects: [
      {
        id: 1,
        title: "Qendra e rehabilitimit",
        location: "Prizren",
        description:
          "Qendër rehabilitimi në ambient natyror, me arkitekturë shumënivelëshe dhe hapësirë të jashtme të gjelbëruar.",
        image: "/projects/qendra-rehabilitimit.png",
      },
      {
        id: 2,
        title: "Lux Dekor",
        location: "Prizren",
        description:
          "Kompleks biznesi dhe magazinimi me hapësirë moderne zyre dhe rampa funksionale ngarkimi.",
        image: "/projects/lux-dekor.png",
      },
      {
        id: 3,
        title: "Ndërtesë banimi",
        location: "Prizren",
        description:
          "Ndërtesë banimi moderne me katër nivele, ballkone dhe eksterier dhe ndriçim të kujdesshëm.",
        image: "/projects/stambena-zgrada.png",
      },
    ],
  },
  projectsOngoing: {
    title: "Projekte në vazhdim",
    subtitle: "Projekte në të cilat po punojmë aktualisht",
    projects: [
      {
        id: 1,
        title: "Tranzit Residence",
        location: "Prizren",
        description:
          "Kompleks banimi modern me arkitekturë të shkallëzuar, tarraca me gjelbërim dhe park të gjelbëruar për banim familjar.",
        image: "/projects/tranzit-residence.png",
      },
      {
        id: 2,
        title: "Adria Park",
        location: "Prizren",
        description:
          "Kompleks banimi modern me oborr të brendshëm, tarraca me gjelbërim dhe njësi të shumta banimi.",
        image: "/projects/adria-park.png",
      },
      {
        id: 3,
        title: "Objekt me njësi banimi dhe biznesi",
        location: "Prizren",
        description:
          "Objekt banimi-biznesi me fasadë moderne, ballkone dhe hapësira biznesi në katin përdhes.",
        image: "/projects/prizren-banim-afarizem.png",
      },
    ],
  },
  contact: {
    title: "Na kontaktoni",
    subtitle: "Na dërgoni një mesazh dhe do t'ju përgjigjemi sa më shpejt.",
    addressLabel: "Adresa",
    address: "Petrit Bytyçi 3, Prizren",
    phoneLabel: "Telefoni",
    phone: "+383 (49) 739 310",
    emailLabel: "Email",
    email: "privat.p.melis@gmail.com",
    hours: "Orari i punës",
    hoursValue: "Hën - Sht: 08:00 - 17:00",
    form: {
      name: "Emri dhe mbiemri",
      email: "Email",
      phone: "Telefoni",
      message: "Mesazhi",
      submit: "Dërgo mesazhin",
      submitting: "Duke dërguar...",
      success: "Faleminderit! Mesazhi juaj është pranuar. Do t'ju kontaktojmë së shpejti.",
      notConfigured:
        "Formulari nuk është konfiguruar. Na kontaktoni direkt përmes emailit.",
      submitError:
        "Gabim gjatë dërgimit. Provoni përsëri ose na kontaktoni direkt.",
      errors: {
        name: "Emri dhe mbiemri është i detyrueshëm.",
        email: "Emaili është i detyrueshëm.",
        emailInvalid: "Ju lutemi shkruani një adresë email të vlefshme.",
        phone: "Telefoni është i detyrueshëm.",
        message: "Mesazhi është i detyrueshëm.",
      },
    },
  },
  footer: {
    description: "Partneri juaj i besueshëm në ndërtim — nga ideja deri te realizimi.",
    contact: "Kontakt",
    hours: "Orari i punës",
    copyright: `© ${year} P.P. "Melis". Të gjitha të drejtat e rezervuara.`,
  },
};
