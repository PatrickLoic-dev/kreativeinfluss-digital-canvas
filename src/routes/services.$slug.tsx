import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { services, type Service } from "@/lib/data";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const s = services.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return { service: s };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const title = s ? `${s.title.fr} · Services` : "Service";
    return {
      meta: [
        { title: `${title} · Kreativstudio Einfluss™` },
        { name: "description", content: s?.short.fr ?? "" },
        { property: "og:title", content: `${title} · Kreativstudio Einfluss™` },
        { property: "og:description", content: s?.short.fr ?? "" },
      ],
    };
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="container-x py-40 text-center">
      <p className="eyebrow">404</p>
      <h1 className="font-display text-4xl mt-4">Service introuvable</h1>
    </div>
  ),
});

function ServiceDetail() {
  const data = Route.useLoaderData() as { service: Service };
  const service = data.service;
  const { t, lang } = useI18n();
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="container-x pt-20 pb-12">
        <Link to="/services" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft size={14} /> {t("nav.services")}
        </Link>
      </section>

      <section className="container-x pb-20 hairline-b">
        <p className="eyebrow">· {service.number}</p>
        <h1 className="font-display text-display-1 mt-6">{service.title[lang]}</h1>
        <Reveal>
          <p className="mt-10 max-w-2xl text-xl text-muted-foreground leading-snug">{service.long[lang]}</p>
        </Reveal>
      </section>

      <section className="container-x py-20 hairline-b">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <p className="md:col-span-4 eyebrow">{t("service.process")}</p>
          <p className="md:col-span-8 text-muted-foreground max-w-2xl">
            {lang === "fr"
              ? "Chaque étape de notre processus produit des livrables concrets."
              : "Each step in our process delivers concrete outputs."}
          </p>
        </div>
        <ol className="space-y-px bg-hairline">
          {service.process[lang].map((step, i) => {
            const deliverable = service.deliverables[lang][i];
            return (
              <Reveal key={i} delay={i * 80}>
                <li className="bg-background grid md:grid-cols-12 gap-8 p-8 md:p-10">
                  <div className="md:col-span-1">
                    <span className="font-display text-sm text-muted-foreground tabular-nums">0{i + 1}</span>
                  </div>
                  <div className="md:col-span-6">
                    <h3 className="font-display text-2xl md:text-3xl tracking-tight">{step}</h3>
                  </div>
                  <div className="md:col-span-5">
                    {deliverable && (
                      <>
                        <p className="eyebrow mb-3">{t("service.deliverables")}</p>
                        <div className="flex items-start gap-3">
                          <span className="text-primary text-lg leading-none mt-1.5">●</span>
                          <span className="font-display text-lg">{deliverable}</span>
                        </div>
                      </>
                    )}
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </section>


      <section className="container-x py-24">
        <p className="eyebrow mb-8">· {t("service.related")}</p>
        <ul>
          {others.map((s, i) => (
            <li key={s.slug}>
              <Reveal delay={i * 60}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group flex items-center justify-between gap-6 hairline-b py-6 hover:bg-surface transition-colors -mx-6 px-6"
                >
                  <div className="flex items-baseline gap-8 min-w-0">
                    <span className="font-display text-sm text-muted-foreground tabular-nums">{s.number}</span>
                    <span className="font-display text-2xl md:text-3xl group-hover:text-primary transition-colors">{s.title[lang]}</span>
                  </div>
                  <ArrowUpRight size={22} className="text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-transform" />
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-x pb-28 text-center">
        <Link to="/contact" className="inline-flex items-center gap-3 rounded-full border border-foreground px-7 py-4 text-sm uppercase tracking-[0.2em] hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors">
          {t("cta.start")}
        </Link>
      </section>
    </>
  );
}
