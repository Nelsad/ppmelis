"use client";

import { FormEvent, useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";
import { contactInfo } from "@/lib/content";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = (): FormErrors => {
    const next: FormErrors = {};

    if (!form.name.trim()) {
      next.name = "Ime i prezime je obavezno.";
    }

    if (!form.email.trim()) {
      next.email = "Email je obavezan.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Unesite ispravnu email adresu.";
    }

    if (!form.phone.trim()) {
      next.phone = "Telefon je obavezan.";
    }

    if (!form.message.trim()) {
      next.message = "Poruka je obavezna.";
    }

    return next;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    setSubmitError("");

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const formspreeId =
      process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "mgojeokb";
    if (!formspreeId) {
      setSubmitError("Forma nije podešena. Kontaktirajte nas direktno putem emaila.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Submit failed");
      }

      setSubmitted(true);
      setForm(initialForm);
    } catch {
      setSubmitError("Greška pri slanju poruke. Pokušajte ponovo ili nas kontaktirajte direktno.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (submitted) {
      setSubmitted(false);
    }
    if (submitError) {
      setSubmitError("");
    }
  };

  return (
    <section
      id="kontakt"
      aria-labelledby="contact-title"
      className="bg-white py-14 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="contact-title"
          title="Kontaktirajte nas"
          subtitle="Pošaljite nam poruku i javićemo vam se u najkraćem roku."
          className="mb-8 sm:mb-12"
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <AnimateOnScroll variant="fade-up" className="space-y-5 sm:space-y-6">
            <div className="contact-item">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-melis-cyan">
                Adresa
              </h3>
              <p className="mt-1 break-words text-base text-melis-navy">{contactInfo.address}</p>
            </div>
            <div className="contact-item">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-melis-cyan">
                Telefon
              </h3>
              <p className="mt-1 text-base text-melis-navy">
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="hover:text-melis-cyan">
                  {contactInfo.phone}
                </a>
              </p>
            </div>
            <div className="contact-item">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-melis-cyan">
                Email
              </h3>
              <p className="mt-1 break-all text-base text-melis-navy">
                <a href={`mailto:${contactInfo.email}`} className="hover:text-melis-cyan">
                  {contactInfo.email}
                </a>
              </p>
            </div>
            <div className="contact-item">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-melis-cyan">
                Radno vreme
              </h3>
              <p className="mt-1 text-base text-melis-navy">{contactInfo.hours}</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={100}>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-melis-navy">
                Ime i prezime
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="input-field w-full rounded-md border border-gray-200 px-4 py-3 text-base text-melis-dark outline-none focus:border-melis-cyan focus:ring-2 focus:ring-melis-cyan/20"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-melis-navy">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="input-field w-full rounded-md border border-gray-200 px-4 py-3 text-base text-melis-dark outline-none focus:border-melis-cyan focus:ring-2 focus:ring-melis-cyan/20"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-melis-navy">
                Telefon
              </label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="input-field w-full rounded-md border border-gray-200 px-4 py-3 text-base text-melis-dark outline-none focus:border-melis-cyan focus:ring-2 focus:ring-melis-cyan/20"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-melis-navy">
                Poruka
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="input-field w-full resize-none rounded-md border border-gray-200 px-4 py-3 text-base text-melis-dark outline-none focus:border-melis-cyan focus:ring-2 focus:ring-melis-cyan/20"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            {submitError && (
              <p className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
                {submitError}
              </p>
            )}

            {submitted && (
              <p className="animate-success rounded-md bg-green-50 px-4 py-3 text-sm text-green-800">
                Hvala! Vaša poruka je primljena. Kontaktiraćemo vas uskoro.
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-melis-navy px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-melis-cyan hover:text-melis-navy hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {isSubmitting ? "Slanje..." : "Pošalji poruku"}
            </button>
          </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
