"use client";

import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import { useLocale } from "@/components/LocaleProvider";

export default function HomePage() {
  const { content } = useLocale();

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Services />
        <About />
        <Projects
          id="projekti"
          title={content.projectsCompleted.title}
          subtitle={content.projectsCompleted.subtitle}
          projects={content.projectsCompleted.projects}
          variant="completed"
        />
        <Projects
          id="u-toku"
          title={content.projectsOngoing.title}
          subtitle={content.projectsOngoing.subtitle}
          projects={content.projectsOngoing.projects}
          variant="ongoing"
        />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
