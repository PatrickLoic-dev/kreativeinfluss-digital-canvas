import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="hairline-t bg-background">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 space-y-6">
            <Logo />
            <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
              {t("footer.tagline")}
            </p>
            <p className="eyebrow">{t("footer.based")}</p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <p className="eyebrow">{t("nav.services")}</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/$slug" params={{ slug: "web-mobile" }} className="link-underline">Web & Mobile</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "ui-ux" }} className="link-underline">UI/UX Design</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "graphic-design" }} className="link-underline">Graphic Design</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "strategy" }} className="link-underline">Strategy</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "community" }} className="link-underline">Community</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <p className="eyebrow">Studio</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="link-underline">{t("nav.about")}</Link></li>
              <li><Link to="/work" className="link-underline">{t("nav.work")}</Link></li>
              <li><Link to="/contact" className="link-underline">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <p className="eyebrow">Contact</p>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:hello@kreativeinfluss.com" className="link-underline">hello@kreativeinfluss.com</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="link-underline">Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="link-underline">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 md:flex-row md:items-end md:justify-between hairline-t pt-8">
          <p className="font-display text-[14vw] leading-none md:text-[10vw] tracking-tighter text-foreground/95 select-none">
            EINFLUSS<span className="text-primary">.</span>
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-2 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Kreativstudio Einfluss™. {t("footer.rights")}</p>
          <p>Crafted with intention.</p>
        </div>
      </div>
    </footer>
  );
}
