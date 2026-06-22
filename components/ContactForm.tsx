"use client";

import { FormEvent, useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";
import { useLocale } from "@/components/LocaleProvider";

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
  const { content } = useLocale();
  const { contact } = content;
  const { form } = contact;

  const [formData, setFormData] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = (): FormErrors => {
    const next: FormErrors = {};

    if (!formData.name.trim()) {
      next.name = form.errors.name;
    }

    if (!formData.email.trim()) {
      next.email = form.errors.email;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = form.errors.emailInvalid;
    }

    if (!formData.phone.trim()) {
      next.phone = form.errors.phone;
    }

    if (!formData.message.trim()) {
      next.message = form.errors.message;
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
      setSubmitError(form.notConfigured);
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
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Submit failed");
      }

      setSubmitted(true);
      setFormData(initialForm);
    } catch {
      setSubmitError(form.submitError);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
          title={contact.title}
          subtitle={contact.subtitle}
          className="mb-8 sm:mb-12"
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <AnimateOnScroll variant="fade-up" className="space-y-5 sm:space-y-6">
            <div className="contact-item">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-melis-cyan">
                {contact.addressLabel}
              </h3>
              <p className="mt-1 break-words text-base text-melis-navy">{contact.address}</p>
            </div>
            <div className="contact-item">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-melis-cyan">
                {contact.phoneLabel}
              </h3>
              <p className="mt-1 text-base text-melis-navy">
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-melis-cyan">
                  {contact.phone}
                </a>
              </p>
            </div>
            <div className="contact-item">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-melis-cyan">
                {contact.emailLabel}
              </h3>
              <p className="mt-1 break-all text-base text-melis-navy">
                <a href={`mailto:${contact.email}`} className="hover:text-melis-cyan">
                  {contact.email}
                </a>
              </p>
            </div>
            <div className="contact-item">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-melis-cyan">
                {contact.hours}
              </h3>
              <p className="mt-1 text-base text-melis-navy">{contact.hoursValue}</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={100}>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-melis-navy">
                {form.name}
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="input-field w-full rounded-md border border-gray-200 px-4 py-3 text-base text-melis-dark outline-none focus:border-melis-cyan focus:ring-2 focus:ring-melis-cyan/20"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-melis-navy">
                {form.email}
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="input-field w-full rounded-md border border-gray-200 px-4 py-3 text-base text-melis-dark outline-none focus:border-melis-cyan focus:ring-2 focus:ring-melis-cyan/20"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-melis-navy">
                {form.phone}
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="input-field w-full rounded-md border border-gray-200 px-4 py-3 text-base text-melis-dark outline-none focus:border-melis-cyan focus:ring-2 focus:ring-melis-cyan/20"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-melis-navy">
                {form.message}
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
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
                {form.success}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-melis-navy px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-melis-cyan hover:text-melis-navy hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {isSubmitting ? form.submitting : form.submit}
            </button>
          </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
