import { ContactBand } from "@/components/ContactBand";
import { SectionTitle } from "@/components/SectionTitle";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { enServices } from "@/lib/enData";

export const metadata = {
  title: "Services",
  description: "Fire extinguisher service, hydrant equipment, fire detection, alarms, video surveillance and documentation."
};

export default function EnglishServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <SectionTitle
          eyebrow="Services"
          title="Fire protection and technical safety from one place."
          text="From regular service to fire detection and documentation, services are organized so clients can quickly find the next step."
          align="center"
        />
        <div className="service-grid roomy">
          {enServices.map((service) => {
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
