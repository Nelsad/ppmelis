"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type AnimationVariant = "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale";

type AnimateOnScrollProps = {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  className?: string;
};

const hiddenClasses: Record<AnimationVariant, string> = {
  "fade-up": "translate-y-8 opacity-0",
  "fade-in": "opacity-0",
  "fade-left": "-translate-x-8 opacity-0 md:-translate-x-10",
  "fade-right": "translate-x-8 opacity-0 md:translate-x-10",
  scale: "scale-95 opacity-0",
};

const visibleClasses: Record<AnimationVariant, string> = {
  "fade-up": "translate-y-0 opacity-100",
  "fade-in": "opacity-100",
  "fade-left": "translate-x-0 opacity-100",
  "fade-right": "translate-x-0 opacity-100",
  scale: "scale-100 opacity-100",
};

export default function AnimateOnScroll({
  children,
  variant = "fade-up",
  delay = 0,
  className = "",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -24px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none max-md:translate-x-0 ${
        visible ? visibleClasses[variant] : hiddenClasses[variant]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
