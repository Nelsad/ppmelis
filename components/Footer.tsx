import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { contactInfo, footerContent } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-melis-navy py-12 text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <AnimateOnScroll variant="fade-up">
            <Image
              src="/Stari_Logo_PPMelis1.png"
              alt='P.P. "Melis" logo'
              width={140}
              height={70}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              {footerContent.description}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={100}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-melis-cyan">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>{contactInfo.address}</li>
              <li>{contactInfo.phone}</li>
              <li>{contactInfo.email}</li>
            </ul>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={200}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-melis-cyan">
              Radno vreme
            </h3>
            <p className="mt-4 text-sm text-white/80">{contactInfo.hours}</p>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll variant="fade-in" delay={300}>
          <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/60">
            {footerContent.copyright}
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  );
}
