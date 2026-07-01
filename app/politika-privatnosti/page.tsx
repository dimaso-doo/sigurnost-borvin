import { ShieldCheck } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { contact } from "@/lib/contact";

export const metadata = {
  title: "Politika privatnosti",
  description: "Kako Sigurnost Borvin prikuplja, koristi i čuva podatke posetilaca sajta."
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page legal-page">
        <SectionTitle
          eyebrow="Privatnost"
          title="Politika privatnosti"
          text="Ova stranica objašnjava koje podatke možemo dobiti preko sajta i kako ih koristimo kada nam pošaljete upit ili nas kontaktirate."
          align="center"
        />
        <article className="legal-card">
          <div className="legal-intro">
            <ShieldCheck size={30} />
            <p>
              Sigurnost Borvin koristi podatke odgovorno i samo za komunikaciju sa klijentima, pripremu ponuda,
              organizaciju servisa i unapređenje sajta.
            </p>
          </div>

          <h2>Koje podatke prikupljamo</h2>
          <p>
            Kada popunite kontakt formu ili nam se obratite direktno, možemo dobiti vaše ime, naziv firme,
            telefon, email adresu, poruku i podatke o objektu ili opremi za koju tražite informaciju.
          </p>

          <h2>Kako koristimo podatke</h2>
          <p>
            Podatke koristimo da odgovorimo na upit, pripremimo ponudu, dogovorimo servis ili isporuku i vodimo
            osnovnu evidenciju komunikacije sa klijentima.
          </p>

          <h2>Analitika i kolačići</h2>
          <p>
            Sajt može koristiti Google Analytics kako bismo razumeli koje stranice se najčešće posećuju i kako
            posetioci koriste sajt. Ti podaci nam pomažu da sadržaj bude jasniji i korisniji.
          </p>

          <h2>Deljenje podataka</h2>
          <p>
            Podatke ne prodajemo trećim licima. Možemo ih podeliti samo kada je to potrebno za izvršenje usluge,
            zakonsku obavezu ili tehničko održavanje sajta.
          </p>

          <h2>Kontakt za privatnost</h2>
          <p>
            Za pitanja u vezi sa privatnošću možete nas kontaktirati putem email adrese{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
