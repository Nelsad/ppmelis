import Image from "next/image";
import Link from "next/link";
import { heroContent } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="pocetna"
      aria-labelledby="hero-title"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 hero-ken-burns">
        <Image
          src={heroContent.image}
          alt="Gradilište"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-melis-navy/70" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-36 bg-gradient-to-b from-melis-navy/80 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 pb-20 pt-28 text-center md:pt-32">
        <h1
          id="hero-title"
          className="hero-animate-title font-serif text-4xl font-bold leading-tight text-white md:text-6xl"
        >
          {heroContent.title}
        </h1>
        <p className="hero-animate-subtitle mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
          {heroContent.subtitle}
        </p>
        <Link
          href="#kontakt"
          className="hero-animate-cta mt-10 inline-block rounded-md bg-melis-cyan px-8 py-3 text-base font-semibold text-melis-navy transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-lg"
        >
          {heroContent.cta}
        </Link>
      </div>
    </section>
  );
}
