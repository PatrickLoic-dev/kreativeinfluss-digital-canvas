import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { I18nProvider } from "@/lib/i18n";
import { CustomCursor } from "@/components/CustomCursor";
import { PageLoader } from "@/components/PageLoader";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RouteTransition } from "@/components/RouteTransition";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display text-5xl">Page introuvable</h1>
        <p className="mt-3 text-sm text-muted-foreground">Cette page n'existe pas ou a été déplacée.</p>
        <a href="/" className="mt-8 inline-flex items-center gap-2 hairline-b pb-1 text-sm uppercase tracking-[0.2em]">
          ← Retour à l'accueil
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Erreur</p>
        <h1 className="mt-3 font-display text-3xl">Cette page n'a pas chargé.</h1>
        <p className="mt-2 text-sm text-muted-foreground">Vous pouvez réessayer ou revenir à l'accueil.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Réessayer
          </button>
          <a href="/" className="rounded-sm border border-border px-4 py-2 text-sm">Accueil</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kreativstudio Einfluss™ — Creative & Tech Studio" },
      { name: "description", content: "Studio créatif et technologique. Design, développement et stratégie pour des marques ambitieuses." },
      { name: "author", content: "Kreativstudio Einfluss" },
      { property: "og:title", content: "Kreativstudio Einfluss™ — Creative & Tech Studio" },
      { property: "og:description", content: "Studio créatif et technologique. Design, développement et stratégie pour des marques ambitieuses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <PageLoader />
        <CustomCursor />
        <Header />
        <main className="pt-16 md:pt-20">
          <RouteTransition />
        </main>
        <Footer />
      </I18nProvider>
    </QueryClientProvider>
  );
}
