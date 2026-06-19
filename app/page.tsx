import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import { completedProjects, ongoingProjects } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Services />
        <About />
        <Projects
          id="projekti"
          title="Naši najbolji projekti"
          subtitle="Projekti koje smo dizajnirali i uspešno realizovali"
          projects={completedProjects}
          variant="completed"
        />
        <Projects
          id="u-toku"
          title="Projekti u toku"
          subtitle="Trenutno radimo na sledećim projektima"
          projects={ongoingProjects}
          variant="ongoing"
        />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
