import { ContactBand } from "@/components/ContactBand";
import { SectionTitle } from "@/components/SectionTitle";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { services } from "@/lib/data";

export const metadata = {
  title: "Usluge",
  description: "Servis PP aparata, hidrantska oprema, dojava požara, alarmi, video nadzor i dokumentacija."
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <SectionTitle
          eyebrow="Usluge"
          title="Zaštita od požara i tehnička bezbednost iz jednog sistema."
          text="Od redovnog servisa do dojave požara i dokumentacije, usluge su organizovane tako da klijent brzo pronađe sledeći korak."
          align="center"
        />
        <div className="service-grid roomy">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card large" key={service.title}>
                <Icon size={30} />
                <h2>{service.title}</h2>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
