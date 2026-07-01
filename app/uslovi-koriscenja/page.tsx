import { FileCheck2 } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { contact } from "@/lib/contact";

export const metadata = {
  title: "Uslovi korišćenja",
  description: "Uslovi korišćenja sajta Sigurnost Borvin."
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page legal-page">
        <SectionTitle
          eyebrow="Uslovi"
          title="Uslovi korišćenja"
          text="Korišćenjem sajta prihvatate osnovna pravila koja se odnose na sadržaj, upite, informacije i komunikaciju preko sajta."
          align="center"
        />
        <article className="legal-card">
          <div className="legal-intro">
            <FileCheck2 size={30} />
            <p>
              Sajt služi za predstavljanje usluga, opreme i informacija o firmi Sigurnost Borvin. Sadržaj je
              informativan i ne zamenjuje stručni pregled objekta ili opreme.
            </p>
          </div>

          <h2>Informacije na sajtu</h2>
          <p>
            Trudimo se da podaci budu tačni i ažurni, ali se ponuda, dostupnost proizvoda i detalji usluga mogu
            menjati. Za tačnu ponudu potrebno je poslati upit ili nas kontaktirati direktno.
          </p>

          <h2>Slanje upita</h2>
          <p>
            Slanjem upita potvrđujete da su podaci koje ste uneli tačni i da ih možemo koristiti kako bismo vam
            odgovorili, pripremili ponudu ili dogovorili sledeći korak.
          </p>

          <h2>Autorska prava</h2>
          <p>
            Tekstovi, raspored elemenata, vizuelni identitet i drugi materijali na sajtu ne smeju se kopirati ili
            koristiti bez odobrenja, osim kada je drugačije naznačeno.
          </p>

          <h2>Odgovornost</h2>
          <p>
            Sigurnost Borvin ne odgovara za štetu nastalu pogrešnim tumačenjem informacija sa sajta. Za konkretan
            objekat, opremu ili zakonsku obavezu potreban je stručan pregled i dogovor.
          </p>

          <h2>Kontakt</h2>
          <p>
            Za pitanja u vezi sa korišćenjem sajta pišite nam na{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
