export type Locale = "en" | "bs" | "sq";

export type Project = {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
};

export type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    services: string;
    about: string;
    projects: string;
    ongoing: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    imageAlt: string;
    image: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: Service[];
  };
  about: {
    title: string;
    description: string;
    stats: { value: string; label: string }[];
  };
  projectsCompleted: {
    title: string;
    subtitle: string;
    projects: Project[];
  };
  projectsOngoing: {
    title: string;
    subtitle: string;
    projects: Project[];
  };
  contact: {
    title: string;
    subtitle: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    phone: string;
    emailLabel: string;
    email: string;
    hours: string;
    hoursValue: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
      submitting: string;
      success: string;
      notConfigured: string;
      submitError: string;
      errors: {
        name: string;
        email: string;
        emailInvalid: string;
        phone: string;
        message: string;
      };
    };
  };
  footer: {
    description: string;
    contact: string;
    hours: string;
    copyright: string;
  };
};
