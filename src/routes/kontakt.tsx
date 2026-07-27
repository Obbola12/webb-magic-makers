import * as React from "react";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check, Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — UmeGolv" },
      { name: "description", content: "Kontakta UmeGolv för offert eller frågor om golvslipning, lackning och trägolvsättning i Umeå." },
      { property: "og:title", content: "Kontakt — UmeGolv" },
      { property: "og:description", content: "Kontakta UmeGolv för offert eller frågor om golvslipning, lackning och trägolvsättning i Umeå." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Kontakt
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Berätta om ditt projekt så återkommer vi med en kostnadsfri offert. Du kan också nå oss direkt på telefon eller mejl.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Så når du oss
              </h2>
              <p className="mt-4 text-muted-foreground">
                Vi finns tillgängliga vardagar mellan 07:00 och 17:00. Är vi upptagna i ett arbete så ringer vi tillbaka så snart vi kan.
              </p>
              <div className="mt-8 space-y-6">
                <ContactInfoItem
                  icon={<Phone className="h-5 w-5" />}
                  label="Telefon"
                  value="070-255 50 35"
                  href="tel:+46702555035"
                />
                <ContactInfoItem
                  icon={<Mail className="h-5 w-5" />}
                  label="E-post"
                  value="info@umegolv.se"
                  href="mailto:info@umegolv.se"
                />
                <ContactInfoItem
                  icon={<MapPin className="h-5 w-5" />}
                  label="Adress"
                  value="Umeå, Sverige"
                  href={null}
                />
              </div>
              <div className="mt-8 rounded-xl border border-border bg-muted/30 p-6">
                <h3 className="text-lg font-semibold text-foreground">Öppettider</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Måndag – Fredag</span>
                    <span className="font-medium text-foreground">07:00 – 17:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Lördag – Söndag</span>
                    <span className="font-medium text-foreground">Stängt</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact form */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-card-foreground">Tack för ditt meddelande!</h3>
                  <p className="mt-2 text-muted-foreground">
                    Vi har tagit emot din förfrågan och återkommer så snart vi kan.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Namn
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Ditt namn"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        E-post
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="din@epost.se"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Telefon
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Ditt telefonnummer"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-foreground">
                      Tjänst
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                    >
                      <option value="">Välj tjänst</option>
                      <option value="slipning">Golvslipning</option>
                      <option value="lackning">Lackning / oljning</option>
                      <option value="laggning">Trägolvsättning</option>
                      <option value="annat">Annat / osäker</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Meddelande
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Beskriv ditt projekt, exempelvis golvtyp, yta och önskemål..."
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Skicka förfrågan
                  </button>
                  <p className="text-xs text-muted-foreground">
                    Genom att skicka formuläret godkänner du att vi sparar dina uppgifter för att hantera din förfrågan.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactInfoItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string | null;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        {href ? (
          <a href={href} className="text-lg font-medium text-foreground transition-colors hover:text-primary">
            {value}
          </a>
        ) : (
          <p className="text-lg font-medium text-foreground">{value}</p>
        )}
      </div>
    </div>
  );
}
