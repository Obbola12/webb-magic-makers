import * as React from "react";
import { useState, type ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import umegolvLogo from "../assets/umegolv-logo-clean.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Sidan hittades inte</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Sidan du letar efter finns inte eller har flyttats.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Till startsidan
          </Link>
        </div>
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
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Sidan kunde inte laddas
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Något gick fel. Du kan prova att ladda om sidan eller gå till startsidan.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Försök igen
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Till startsidan
          </Link>
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
      { title: "UmeGolv — Golvslipning, lackning & trägolvsättning i Umeå" },
      { name: "description", content: "UmeGolv erbjuder professionell golvslipning, lackning och läggning av trägolv i Umeå med omnejd. Hantverkskvalitet och personlig service." },
      { name: "author", content: "UmeGolv" },
      { property: "og:title", content: "UmeGolv — Golvslipning, lackning & trägolvsättning i Umeå" },
      { property: "og:description", content: "UmeGolv erbjuder professionell golvslipning, lackning och läggning av trägolv i Umeå med omnejd. Hantverkskvalitet och personlig service." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="sv" className="dark">
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

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-44 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={umegolvLogo.url} alt="UmeGolv" className="h-40 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            activeProps={{ className: "text-foreground font-medium" }}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Start
          </Link>
          <Link
            to="/tjanster"
            activeProps={{ className: "text-foreground font-medium" }}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Tjänster
          </Link>
          <Link
            to="/om-oss"
            activeProps={{ className: "text-foreground font-medium" }}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Om oss
          </Link>
          <Link
            to="/kontakt"
            activeProps={{ className: "text-foreground font-medium" }}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Kontakt
          </Link>
        </nav>
        <div className="hidden md:block">
          <Link
            to="/kontakt"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Få offert
          </Link>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent"
        aria-label="Öppna meny"
        aria-expanded={open}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {open ? (
            <>
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </>
          ) : (
            <>
              <path d="M4 12h16" />
              <path d="M4 18h16" />
              <path d="M4 6h16" />
            </>
          )}
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-44 border-b border-border bg-background px-4 py-4 shadow-sm">
          <nav className="flex flex-col gap-3">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="text-base text-muted-foreground transition-colors hover:text-foreground"
            >
              Start
            </Link>
            <Link
              to="/tjanster"
              onClick={() => setOpen(false)}
              className="text-base text-muted-foreground transition-colors hover:text-foreground"
            >
              Tjänster
            </Link>
            <Link
              to="/om-oss"
              onClick={() => setOpen(false)}
              className="text-base text-muted-foreground transition-colors hover:text-foreground"
            >
              Om oss
            </Link>
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="text-base text-muted-foreground transition-colors hover:text-foreground"
            >
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="w-full border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-foreground">Snabblänkar</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Start
                </Link>
              </li>
              <li>
                <Link to="/tjanster" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Tjänster
                </Link>
              </li>
              <li>
                <Link to="/om-oss" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Om oss
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Kontakt</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Östrakyrkogatan 65A, 90343 Umeå</li>
              <li>
                <a href="tel:+46702555035" className="transition-colors hover:text-foreground">
                  070-255 50 35
                </a>
              </li>
              <li>
                <a href="mailto:info@umegolv.se" className="transition-colors hover:text-foreground">
                  info@umegolv.se
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} UmeGolv. Alla rättigheter förbehållna.
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
