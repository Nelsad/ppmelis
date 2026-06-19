import AnimateOnScroll from "@/components/AnimateOnScroll";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
};

export default function SectionHeading({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <AnimateOnScroll className={`mx-auto max-w-3xl text-center ${className}`}>
      <h2
        id={id}
        className="font-serif text-2xl font-bold text-melis-navy sm:text-3xl md:text-4xl"
      >
        {title}
      </h2>
      <div className="section-line" aria-hidden="true" />
      {subtitle && (
        <p className="mt-4 text-base text-melis-gray sm:mt-5 sm:text-lg">
          {subtitle}
        </p>
      )}
      {children}
    </AnimateOnScroll>
  );
}
