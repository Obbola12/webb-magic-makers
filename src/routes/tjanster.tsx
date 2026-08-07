import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Droplets, Layers, Sparkles } from "lucide-react";

import slipningImage from "@/assets/service-slipning.jpg";
import lackningImage from "@/assets/hero-golv.jpg";

export const Route = createFileRoute("/tjanster")({
  head: () => ({
    meta: [
      { title: "Våra tjänster — UmeGolv" },
      { name: "description", content: "UmeGolv erbjuder golvslipning, lackning, oljning och läggning av trägolv i Umeå. Se vad vi kan hjälpa dig med." },
      { property: "og:title", content: "Våra tjänster — UmeGolv" },
      { property: "og:description", content: "UmeGolv erbjuder golvslipning, lackning, oljning och läggning av trägolv i Umeå." },
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
            Oavsett om du vill fräscha upp ett slitet golv eller lägga helt nytt trägolv har vi kompetensen och utrustningen.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            <ServiceDetail
              icon={<Sparkles className="h-6 w-6" />}
              title="Golvslipning"
              description="Slipning är det mest kostnadseffektiva sättet att ge gamla trägolv nytt liv. Vi tar bort ytslitage, repor, färgstänk och mindre skador, och förbereder ytan inför lack eller olja."
              features={["Maskinslipning av de flesta trägolvstyper", "Kantslipning längs väggar och lister", "Dammsugning och ytförberedelse", "Grundbehandling före lack eller olja"]}
              image={slipningImage}
              imageAlt="Golvslipning med professionell utrustning"
              reversed={false}
            />
            <ServiceDetail
              icon={<Droplets className="h-6 w-6" />}
              title="Lackning & oljning"
              description="Rätt ytbehandling skyddar träet och ger golvet dess slutgiltiga utseende. Vi hjälper dig välja mellan lack och olja utifrån slitstyrka, skötsel och estetik."
              features={["Vattenbaserad lack med låg lukt", "Hårdvaxolja för naturlig känsla", "Flera strykningar för hållbarhet", "Miljövänliga alternativ"]}
              image={lackningImage}
              imageAlt="Vackert lackerat trägolv i ljust vardagsrum"
              reversed={true}
            />
            <ServiceDetail
              icon={<Layers className="h-6 w-6" />}
              title="Trägolvsättning"
              description="Vi lägger nya trägolv i privatbostäder, kontor och lokaler. Allt från råspont och plank till parkett och stavparkett — alltid med noggrant underarbete."
              features={["Rådgivning kring golvval och material", "Fuktmätning och underlagskontroll", "Isolering och ångspärr vid behov", "Färdigbehandling enligt önskemål"]}
              image={null}
              imageAlt=""
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
