import type { SiteContent } from "../types";

const heroImage =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80";

const year = new Date().getFullYear();

export const en: SiteContent = {
  meta: {
    title: 'P.P. "Melis" | Construction Company',
    description:
      "P.P. Melis — construction company specialized in designing and building residential and commercial projects.",
  },
  nav: {
    home: "Home",
    services: "Services",
    about: "About Us",
    projects: "Projects",
    ongoing: "Ongoing",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    title: "We Build Your Dreams",
    subtitle:
      'P.P. "Melis" is a construction company with years of experience in designing and delivering residential and commercial buildings across Kosovo.',
    cta: "Contact Us",
    ctaSecondary: "Our Projects",
    imageAlt: "Construction site",
    image: heroImage,
  },
  services: {
    title: "Our Services",
    subtitle:
      "Complete construction solutions — from the first sketch to finished delivery.",
    items: [
      {
        id: "architectural-design",
        title: "Architectural Design",
        description:
          "Creative and functional design of residential and commercial buildings tailored to your needs.",
      },
      {
        id: "construction",
        title: "Construction",
        description:
          "Construction works delivered on time, within budget, and to the highest quality standards.",
      },
      {
        id: "project-planning",
        title: "Project Planning",
        description:
          "Detailed project planning, work schedules, resource coordination, and time management.",
      },
      {
        id: "supervision",
        title: "Supervision",
        description:
          "Professional site supervision to ensure works are carried out according to plans and regulations.",
      },
      {
        id: "consulting",
        title: "Consulting",
        description:
          "Advice on investments, technical solutions, permits, and construction cost optimization.",
      },
      {
        id: "renovation",
        title: "Renovation",
        description:
          "Reconstruction and adaptation of existing buildings — modernizing spaces while preserving quality.",
      },
    ],
  },
  about: {
    title: "About Us",
    description:
      'P.P. "Melis" is a family construction company founded to provide quality building, reliability, and transparent cooperation with clients. Our team of experts leads projects from idea and design to turnkey delivery, respecting deadlines and the highest execution standards.',
    stats: [
      { value: "30+", label: "Years of experience" },
      { value: "200+", label: "Completed projects" },
      { value: "100%", label: "Satisfied clients" },
    ],
  },
  projectsCompleted: {
    title: "Our Visions",
    subtitle: "Projects we designed and successfully delivered",
    projects: [
      {
        id: 1,
        title: "Rehabilitation Center",
        location: "Prizren",
        description:
          "A rehabilitation center in a natural setting, with multi-level architecture and landscaped outdoor areas.",
        image: "/projects/qendra-rehabilitimit.png",
      },
      {
        id: 2,
        title: "Lux Dekor",
        location: "Prizren",
        description:
          "Business and warehouse complex with modern office space and functional loading ramps.",
        image: "/projects/lux-dekor.png",
      },
      {
        id: 3,
        title: "Residential Building",
        location: "Prizren",
        description:
          "A contemporary four-storey residential building with balconies and carefully designed exterior and lighting.",
        image: "/projects/stambena-zgrada.png",
      },
    ],
  },
  projectsOngoing: {
    title: "Ongoing Projects",
    subtitle: "Projects we are currently working on",
    projects: [
      {
        id: 1,
        title: "Tranzit Residence",
        location: "Prizren",
        description:
          "A modern residential complex with stepped architecture, green terraces, and a landscaped park for family living.",
        image: "/projects/tranzit-residence.png",
      },
      {
        id: 2,
        title: "Adria Park",
        location: "Prizren",
        description:
          "A modern residential complex with an inner courtyard, green terraces, and multiple housing units.",
        image: "/projects/adria-park.png",
      },
      {
        id: 3,
        title: "Residential and Commercial Building",
        location: "Prizren",
        description:
          "A mixed-use building with a modern facade, balconies, and commercial spaces on the ground floor.",
        image: "/projects/prizren-banim-afarizem.png",
      },
    ],
  },
  contact: {
    title: "Contact Us",
    subtitle: "Send us a message and we will get back to you as soon as possible.",
    addressLabel: "Address",
    address: "Petrit Bytyçi 3, Prizren",
    phoneLabel: "Phone",
    phone: "+383 (49) 739 310",
    emailLabel: "Email",
    email: "privat.p.melis@gmail.com",
    hours: "Working hours",
    hoursValue: "Mon - Sat: 08:00 - 17:00",
    form: {
      name: "Full name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      submit: "Send message",
      submitting: "Sending...",
      success: "Thank you! Your message has been received. We will contact you soon.",
      notConfigured:
        "The form is not configured. Please contact us directly by email.",
      submitError:
        "Error sending message. Please try again or contact us directly.",
      errors: {
        name: "Full name is required.",
        email: "Email is required.",
        emailInvalid: "Please enter a valid email address.",
        phone: "Phone is required.",
        message: "Message is required.",
      },
    },
  },
  footer: {
    description: "Your trusted partner in construction — from idea to delivery.",
    contact: "Contact",
    hours: "Working hours",
    copyright: `© ${year} P.P. "Melis". All rights reserved.`,
  },
};
