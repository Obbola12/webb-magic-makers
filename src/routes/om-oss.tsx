import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Heart, MapPin, Shield } from "lucide-react";

export const Route = createFileRoute("/om-oss")({
  head: () => ({
    meta: [
      { title: "Om oss — UmeGolv" },
      { name: "description", content: "Lär känna UmeGolv — ett lokalt hantverksföretag i Umeå specialiserat på golvslipning, lackning och trägolvsättning." },
      { property: "og:title", content: "Om oss — UmeGolv" },
      { property: "og:description", content: "Lär känna UmeGolv — ett lokalt hantverksföretag i Umeå specialiserat på golvslipning, lackning och trägolvsättning." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OmOssPage,
});

function OmOssPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Om UmeGolv
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              UmeGolv är ett lokalt hantverksföretag som hjälper privatpersoner och företag i Umeå med golvslipning, lackning och läggning av trägolv. Vi tror på kvalitet över kvantitet, och på att varje golv förtjänar omsorg.
            </p>
          </div>
        </div>
      </section>

      {/* Story & values */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Vår historia
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Företaget startades med en enkel idé: att erbjuda Umeåborna ett pålitligt och personligt alternativ för golvrenovering. Med åren har vi slipat, lackat och lagt golv i allt från små lägenheter till större villor och lokaler.
                </p>
                <p>
                  Vi är stolta över att vara ett lokalt företag. Det betyder att vi känner till förutsättningarna i regionen, från fuktiga källare till torra vinterklimat, och kan ge råd som håller i längden.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Våra värderingar
              </h2>
              <div className="mt-6 grid gap-6">
                <ValueCard
                  icon={<Heart className="h-5 w-5" />}
                  title="Engagemang"
                  description="Vi lämnar inte ett arbete förrän vi själva skulle vara nöjda med resultatet."
                />
                <ValueCard
                  icon={<Shield className="h-5 w-5" />}
                  title="Pålitlighet"
                  description="Tydliga avtal, punktliga leveranser och öppen kommunikation genom hela uppdraget." />
                <ValueCard
                  icon={<Award className="h-5 w-5" />}
                  title="Kvalitet"
                  description="Vi använder beprövad teknik och material av hög kvalitet för ett hållbart resultat." />
                <ValueCard
                  icon={<MapPin className="h-5 w-5" />}
                  title="Lokalt"
                  description="Umeå och närområdet är vår hemmaplan. Det gör att vi kan vara flexibla och snabbt på plats." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="border-t border-border bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Verksamhetsområde
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Vi arbetar primärt i Umeå och närliggande orter. Bor du inom Västerbottens län och undrar om vi tar oss till dig? Tveka inte att höra av dig.
            </p>
            <div className="mt-8">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Kontakta oss
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
