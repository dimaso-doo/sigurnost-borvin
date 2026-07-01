import { Building2 } from "lucide-react";
import { ContactBand } from "@/components/ContactBand";
import { SectionTitle } from "@/components/SectionTitle";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { enReferences } from "@/lib/enData";

export const metadata = {
  title: "References",
  description: "Facility types and clients served by Sigurnost Borvin."
};

export default function EnglishReferencesPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <SectionTitle
          eyebrow="References"
          title="A reliable partner for facilities with clear safety obligations."
          text="Sigurnost Borvin equips and maintains different types of spaces, from residential buildings to commercial and production facilities."
          align="center"
        />
        <div className="reference-grid">
          {enReferences.map((item) => (
            <article key={item}>
              <Building2 size={26} />
              <h2>{item}</h2>
              <p>Equipment, inspection, service or protection systems adapted to the purpose of the space.</p>
            </article>
          ))}
        </div>
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
