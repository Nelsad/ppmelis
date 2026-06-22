"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";
import CountUp from "@/components/CountUp";
import SectionHeading from "@/components/SectionHeading";
import { useLocale } from "@/components/LocaleProvider";

export default function About() {
  const { content } = useLocale();
  const about = content.about;

  return (
    <section
      id="o-nama"
      aria-labelledby="about-title"
      className="bg-white py-14 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading id="about-title" title={about.title}>
          <p className="mt-4 text-base leading-relaxed text-melis-gray sm:mt-5 sm:text-lg">
            {about.description}
          </p>
        </SectionHeading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-6">
          {about.stats.map((stat, index) => (
            <AnimateOnScroll
              key={stat.label}
              variant="scale"
              delay={index * 120}
              className="stat-card rounded-lg border border-gray-100 bg-gray-50 p-5 text-center hover:border-melis-cyan/30 sm:p-6"
            >
              <p className="font-serif text-3xl font-bold text-melis-cyan md:text-4xl">
                <CountUp value={stat.value} />
              </p>
              <p className="mt-2 text-sm font-medium text-melis-navy md:text-base">
                {stat.label}
              </p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
