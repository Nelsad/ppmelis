import type { ReactNode } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { servicesContent, type Service } from "@/lib/content";

const icons: Record<Service["id"], ReactNode> = {
  "architectural-design": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <path d="M3 21h18M5 21V9l7-6 7 6v12M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 9h6M12 9v4" strokeLinecap="round" />
    </svg>
  ),
  construction: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <path d="M2 20h20M6 20v-6l6-5 6 5v6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 14h4M12 12v2" strokeLinecap="round" />
    </svg>
  ),
  "project-planning": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 4v4M16 4v4M4 10h16M8 14h2M8 17h4" strokeLinecap="round" />
    </svg>
  ),
  supervision: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <path d="M12 5c-5 0-8 3-8 5s3 5 8 5 8-3 8-5-3-5-8-5z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  consulting: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <path d="M8 10a4 4 0 118 0c0 2-2 3-2 5H10c0-2-2-3-2-5z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 19h4M12 17v2" strokeLinecap="round" />
    </svg>
  ),
  renovation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <path d="M14 4l6 6-9 9H5v-6l9-9z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 5l6 6M8 20l-3 1 1-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section
      id="usluge"
      aria-labelledby="services-title"
      className="bg-gray-50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <AnimateOnScroll className="mx-auto max-w-3xl text-center">
          <h2
            id="services-title"
            className="font-serif text-3xl font-bold text-melis-navy md:text-4xl"
          >
            {servicesContent.title}
          </h2>
          <p className="mt-4 text-lg text-melis-gray">
            {servicesContent.subtitle}
          </p>
        </AnimateOnScroll>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesContent.services.map((service, index) => (
            <AnimateOnScroll
              key={service.id}
              variant="fade-up"
              delay={index * 100}
              className="group rounded-xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-melis-cyan/40 hover:shadow-lg"
            >
              <div className="mb-5 inline-flex rounded-lg bg-melis-cyan/10 p-3 text-melis-navy transition-colors duration-300 group-hover:bg-melis-cyan group-hover:text-white">
                {icons[service.id]}
              </div>
              <h3 className="font-serif text-xl font-bold text-melis-navy transition-colors duration-300 group-hover:text-melis-cyan">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-melis-gray">
                {service.description}
              </p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
