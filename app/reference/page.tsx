import { Building2 } from "lucide-react";
import { ContactBand } from "@/components/ContactBand";
import { SectionTitle } from "@/components/SectionTitle";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { references } from "@/lib/data";

export const metadata = {
  title: "Reference",
  description: "Tipovi objekata i klijenata za koje Sigurnost Borvin isporučuje opremu, servis i sisteme zaštite."
};

export default function ReferencesPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <SectionTitle
          eyebrow="Reference"
          title="Pouzdan partner za objekte koji imaju jasne obaveze zaštite."
          text="Sigurnost Borvin oprema i održava različite tipove prostora, od stambenih zgrada do poslovnih i proizvodnih objekata."
          align="center"
        />
        <div className="reference-grid">
          {references.map((item) => (
            <article key={item}>
              <Building2 size={26} />
              <h2>{item}</h2>
              <p>Oprema, pregled, servis ili sistemi zaštite prilagođeni nameni prostora.</p>
            </article>
          ))}
        </div>
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
