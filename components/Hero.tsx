import Image from "next/image";
import Link from "next/link";
import { heroContent } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="pocetna"
      aria-labelledby="hero-title"
      className="relative isolate h-[100svh] max-h-[100svh] overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-ken-burns absolute inset-0">
          <Image
            src={heroContent.image}
            alt="Gradilište"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-melis-navy/70" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-28 bg-gradient-to-b from-melis-navy/80 to-transparent sm:h-32" />

      <div className="relative z-10 flex h-full items-center justify-center overflow-hidden px-4 sm:px-6">
        <div className="w-full max-w-4xl overflow-hidden py-4 text-center">
          <h1
            id="hero-title"
            className="hero-animate-title text-balance font-serif text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl"
          >
            {heroContent.title}
          </h1>
          <p className="hero-animate-subtitle mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-white/90 sm:mt-6 sm:text-lg md:text-xl">
            {heroContent.subtitle}
          </p>
          <Link
            href="#kontakt"
            className="hero-animate-cta mt-8 inline-block w-full max-w-xs rounded-md bg-melis-cyan px-6 py-3.5 text-base font-semibold text-melis-navy transition-colors duration-300 hover:bg-white active:scale-[0.98] sm:mt-10 sm:w-auto sm:px-8"
          >
            {heroContent.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
