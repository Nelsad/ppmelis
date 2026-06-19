import AnimateOnScroll from "@/components/AnimateOnScroll";
import CountUp from "@/components/CountUp";
import { aboutContent } from "@/lib/content";

export default function About() {
  return (
    <section
      id="o-nama"
      aria-labelledby="about-title"
      className="bg-white py-14 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <AnimateOnScroll className="mx-auto max-w-3xl text-center">
          <h2
            id="about-title"
            className="font-serif text-2xl font-bold text-melis-navy sm:text-3xl md:text-4xl"
          >
            {aboutContent.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-melis-gray sm:mt-6 sm:text-lg">
            {aboutContent.description}
          </p>
        </AnimateOnScroll>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-6">
          {aboutContent.stats.map((stat, index) => (
            <AnimateOnScroll
              key={stat.label}
              variant="scale"
              delay={index * 120}
              className="rounded-lg border border-gray-100 bg-gray-50 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-melis-cyan/30 hover:shadow-md sm:p-6"
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
