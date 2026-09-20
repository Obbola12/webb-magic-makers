import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Droplets, Layers, Sparkles } from "lucide-react";

import slipningImage from "@/assets/service-slipning.jpg";
import golvvardImage from "@/assets/service-golvvard.jpg";
import epoxiImage from "@/assets/service-epoxi.jpg";

export const Route = createFileRoute("/tjanster")({
  head: () => ({
    meta: [
      { title: "Våra tjänster — UmeGolv & Interiör" },
      { name: "description", content: "Golvslipning och lackning av trägolv, golvvård med nollställning och polish av plast- och linoleummatta samt betongslipning och epoxiläggning i Umeå." },
      { property: "og:title", content: "Våra tjänster — UmeGolv & Interiör" },
      { property: "og:description", content: "Golvslipning och lackning av trägolv, golvvård och polish av plast- och linoleummatta samt betongslipning och epoxiläggning i Umeå." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TjansterPage,
});

function TjansterPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Våra tjänster
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Från slipning och lackning av trägolv till golvvård av mattgolv och slitstarka betong- och epoxigolv.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            <ServiceDetail
              icon={<Sparkles className="h-6 w-6" />}
              title="Golvslipning & lackning av trägolv"
              description="Komplett renovering av trä- och parkettgolv. Vi slipar bort repor, slitage och ojämnheter och förseglar med slitstark lack, hårdvaxolja eller lut/såpa."
              features={[
                "Maskinslipning med modern och dammreducerad utrustning",
                "Kantslipning och noggrann förberedelse längs lister",
                "Ytbehandling med slitstark lack eller naturlig hårdvaxolja",
                "Renovering av både furutiljor, stavparkett och lamellparkett",
              ]}
              image={slipningImage}
              imageAlt="Golvslipning med professionell utrustning"
              reversed={false}
            />
            <ServiceDetail
              icon={<Droplets className="h-6 w-6" />}
              title="Golvvård, nollställning & polish (Plast & linoleum)"
              description="Professionell djuprengöring, nollställning (strippning av gamla polishlager) och ny skyddande polishbehandling som återger mattans färg, lyster och slitstyrka."
              features={[
                "Maskinell nollställning och borttagning av gamla beläggningar",
                "Djuprengöring av porer och svåra fläckar",
                "Flera lager skyddspolish för maximal livslängd och smutsavvisning",
                "Underhållsavtal med high-speed polering",
                "Förlänger golvets livslängd och underlättar daglig städning",
              ]}
              image={golvvardImage}
              imageAlt="Nypolerat linoleumgolv i en ljus korridor"
              reversed={true}
            />
            <ServiceDetail
              icon={<Layers className="h-6 w-6" />}
              title="Betongslipning & epoxiläggning"
              description="Slitstarka lösningar för garage, källare, verkstäder och kommersiella ytor. Vi slipar betong för jämnhet och finish eller lägger fogfria, kemikalie- och slagtåliga epoxibeläggningar."
              features={[
                "Diamantslipning av betongplattor och avjämning",
                "Fogfria eller målade epoxigolv med hög tålighet mot fukt, olja och kemikalier",
                "Lättstädade, dammfria och extremt slitstarka ytor",
                "Anpassas med färg och halkskydd efter behov",
              ]}
              image={epoxiImage}
              imageAlt="Fogfritt grått epoxigolv i ett garage"
              reversed={false}
            />
          </div>
        </div>
      </section>


      {/* Process */}
      <section className="border-t border-border bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Så går det till
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Från första kontakt till färdigt golv — vi arbetar i tydliga steg så att du vet vad som händer.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard number="01" title="Kontakt" description="Du beskriver ditt projekt så återkommer vi med en tid för besiktning." />
            <StepCard number="02" title="Offert" description="Efter besiktningen får du en tydlig, kostnadsfri offert utan dolda avgifter." />
            <StepCard number="03" title="Utförande" description="Vi bokar in arbetet och genomför det med noggrannhet och respekt för ditt hem." />
            <StepCard number="04" title="Färdigställande" description="Tillsammans går vi igenom resultatet och ser till att du är nöjd." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Har du frågor om en specifik tjänst?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Vi berättar gärna mer om vad som passar ditt golv och dina behov.
          </p>
          <div className="mt-8">
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Kontakta UmeGolv
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceDetail({
  icon,
  title,
  description,
  features,
  image,
  imageAlt,
  reversed,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string | null;
  imageAlt: string;
  reversed: boolean;
}) {
  return (
    <div className={`grid items-center gap-10 lg:grid-cols-2 ${reversed ? "lg:flex-row-reverse" : ""}`}>
      <div className={reversed ? "lg:order-2" : "lg:order-1"}>
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">{title}</h2>
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        <ul className="mt-6 space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <div className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-3 w-3" />
              </div>
              <span className="text-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      {image && (
        <div className={`overflow-hidden rounded-2xl ${reversed ? "lg:order-1" : "lg:order-2"}`}>
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover"
            loading="lazy"
            width={944}
            height={704}
          />
        </div>
      )}
    </div>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="relative rounded-xl border border-border bg-card p-6">
      <span className="text-3xl font-bold text-primary/30">{number}</span>
      <h3 className="mt-4 text-xl font-semibold text-card-foreground">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
  );
}
