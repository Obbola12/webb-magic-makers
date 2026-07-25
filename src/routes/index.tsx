import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Phone, Shield, Star } from "lucide-react";

import heroImage from "@/assets/hero-golv.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UmeGolv — Golvslipning, lackning & trägolvsättning i Umeå" },
      { name: "description", content: "UmeGolv erbjuder professionell golvslipning, lackning och läggning av trägolv i Umeå med omnejd. Hantverkskvalitet och personlig service." },
      { property: "og:title", content: "UmeGolv — Golvslipning, lackning & trägolvsättning i Umeå" },
      { property: "og:description", content: "UmeGolv erbjuder professionell golvslipning, lackning och läggning av trägolv i Umeå med omnejd." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-2xl">
              <p className="text-lg text-muted-foreground">
                UmeGolv är din lokala golventreprenör. Vi renoverar, slipar, lackar och lägger trägolv med fokus på hållbart hantverk och ett resultat du kan leva med i många år.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Få en kostnadsfri offert
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/tjanster"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent"
                >
                  Se våra tjänster
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Försäkrade</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Rot-avdrag</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Snabb återkoppling</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-auto lg:h-[560px]">
              <img
                src={heroImage}
                alt="Vackert slipat och lackat trägolv i ett ljust vardagsrum"
                className="h-full w-full object-cover"
                width={1440}
                height={912}
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="border-t border-border bg-muted/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Vad vi gör
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Från slitna golv till nyinstallerade trägolv — vi hanterar hela processen med precision.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<Shield className="h-6 w-6" />}
              title="Golvslipning"
              description="Vi slipar bort slitage, repor och fläckar så att träet får nytt liv. Fungerar på de flesta trägolvstyper."
              to="/tjanster"
            />
            <ServiceCard
              icon={<Star className="h-6 w-6" />}
              title="Lackning & oljning"
              description="Skydda och förstärk träets naturliga skönhet med hållbara lacker och oljor anpassade efter användning."
              to="/tjanster"
            />
            <ServiceCard
              icon={<Phone className="h-6 w-6" />}
              title="Trägolvsättning"
              description="Vi lägger nya trägolv i plank, parkett eller stav med millimeterprecision och rätt grundarbete."
              to="/tjanster"
            />
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Varför välja UmeGolv?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Vi är ett litet, lokalt företag som tar personligt ansvar för varje uppdrag. När du anlitar oss får du samma hantverkare från start till mål.
          </p>
          <ul className="mt-8 space-y-4 text-left">
            <BenefitItem text="Lång erfarenhet av golvrenovering och installation" />
            <BenefitItem text="Noggrant arbete med rena snitt och jämna ytor" />
            <BenefitItem text="Miljövänliga och hållbara materialval" />
            <BenefitItem text="Tydliga offerter och inga dolda kostnader" />
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
            Redo att förnya dina golv?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Kontakta oss för en kostnadsfri besiktning och offert. Vi svarar vanligtvis inom 24 timmar.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-foreground px-6 py-3 text-base font-medium text-primary transition-colors hover:bg-primary-foreground/90"
            >
              Kontakta oss
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+46701234567"
              className="inline-flex items-center justify-center rounded-md border border-primary-foreground/30 bg-transparent px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <Phone className="mr-2 h-4 w-4" />
              070-123 45 67
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  to,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  to: string;
}) {
  return (
    <Link
      to={to as "/"}
      className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/20 hover:bg-accent"
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-card-foreground">{title}</h3>
      <p className="mt-2 flex-1 text-muted-foreground">{description}</p>
      <div className="mt-4 inline-flex items-center text-sm font-medium text-primary">
        Läs mer
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Check className="h-3 w-3" />
      </div>
      <span className="text-foreground">{text}</span>
    </li>
  );
}

