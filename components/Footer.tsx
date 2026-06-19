import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { contactInfo, footerContent } from "@/lib/content";

export default function Footer() {
  return (
    <footer
      className="bg-melis-navy py-10 text-white sm:py-12"
      style={{ paddingBottom: "max(2.5rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-3">
          <AnimateOnScroll variant="fade-up">
            <Image
              src="/Stari_Logo_PPMelis1.png"
              alt='P.P. "Melis" logo'
              width={140}
              height={70}
              className="h-10 w-auto brightness-0 invert sm:h-12"
            />
            <p className="mt-3 text-sm leading-relaxed text-white/80 sm:mt-4">
              {footerContent.description}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={100}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-melis-cyan">
              Kontakt
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80 sm:mt-4">
              <li className="break-words">{contactInfo.address}</li>
              <li>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="hover:text-melis-cyan">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="break-all">
                <a href={`mailto:${contactInfo.email}`} className="hover:text-melis-cyan">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={200}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-melis-cyan">
              Radno vreme
            </h3>
            <p className="mt-3 text-sm text-white/80 sm:mt-4">{contactInfo.hours}</p>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll variant="fade-in" delay={300}>
          <div className="mt-8 border-t border-white/20 pt-5 text-center text-xs text-white/60 sm:mt-10 sm:pt-6 sm:text-sm">
            {footerContent.copyright}
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  );
}
