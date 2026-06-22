import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · Kreativstudio Einfluss™" },
      { name: "description", content: "Parlons de votre projet. Nous revenons sous 48 heures." },
      { property: "og:title", content: "Contact · Kreativstudio Einfluss™" },
      { property: "og:description", content: "Parlons de votre projet. Nous revenons sous 48 heures." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { t, lang } = useI18n();
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const budgets = lang === "fr"
    ? ["< 10k €", "10–25k €", "25–60k €", "60k+ €"]
    : ["< 10k €", "10–25k €", "25–60k €", "60k+ €"];

  return (
    <>
      <section className="container-x pt-24 pb-16">
        <p className="eyebrow">{t("contact.eyebrow")}</p>
        <h1 className="font-display text-display-1 mt-6 max-w-5xl">{t("contact.title")}</h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">{t("contact.sub")}</p>
      </section>

      <section className="container-x pb-28 grid md:grid-cols-12 gap-12 hairline-t pt-16">
        <div className="md:col-span-4 space-y-10">
          <Reveal delay={0}>
            <div>
              <p className="eyebrow">· {t("contact.info.title")}</p>
              <ul className="mt-6 space-y-3 text-lg font-display">
                <li><a href="mailto:hello@kreativeinfluss.com" className="link-underline">hello@kreativeinfluss.com</a></li>
                <li><a href="tel:+237000000000" className="link-underline">+237 000 000 000</a></li>
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">{t("contact.info.hours")}</p>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <div>
              <p className="eyebrow">· Social</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="link-underline">Instagram</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="link-underline">LinkedIn</a></li>
                <li><a href="https://behance.net" target="_blank" rel="noreferrer" className="link-underline">Behance</a></li>
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          {sent ? (
            <Reveal>
              <div className="border border-primary p-10">
                <p className="eyebrow text-primary">· ✓</p>
                <p className="mt-4 font-display text-3xl">{t("contact.form.sent")}</p>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <form onSubmit={submit} className="space-y-8">
                <Field label={t("contact.form.name")} name="name" required />
                <Field label={t("contact.form.email")} name="email" type="email" required />
                <Field label={t("contact.form.company")} name="company" />

                <div>
                  <p className="eyebrow mb-4">· {t("contact.form.budget")}</p>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <label key={b} className="cursor-pointer">
                        <input type="radio" name="budget" value={b} className="peer sr-only" />
                        <span className="inline-block rounded-full border border-border px-4 py-2 text-sm transition-colors peer-checked:bg-primary peer-checked:border-primary peer-checked:text-primary-foreground hover:border-foreground">
                          {b}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block eyebrow mb-3">· {t("contact.form.message")}</label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="w-full bg-transparent border-0 border-b border-border focus:border-primary focus:outline-none py-3 font-display text-xl resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors"
                >
                  {t("contact.form.submit")} <ArrowUpRight size={16} />
                </button>
              </form>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block eyebrow mb-3">· {label}{required ? " *" : ""}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-0 border-b border-border focus:border-primary focus:outline-none py-3 font-display text-xl"
      />
    </div>
  );
}
