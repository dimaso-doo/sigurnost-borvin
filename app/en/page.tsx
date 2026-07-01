import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";
import { ContactBand } from "@/components/ContactBand";
import { SectionTitle } from "@/components/SectionTitle";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { contact, stats } from "@/lib/data";
import { enCategories, enSectors, enServices } from "@/lib/enData";

export const metadata = {
  title: "Fire protection equipment and service",
  description:
    "Fire protection equipment, fire extinguisher service, hydrant equipment, fire detection, alarm systems and facility monitoring."
};

export default function EnglishHome() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Novi Sad · since 1997</span>
            <h1>Fire protection equipment, service and safety systems for facilities that must stay ready.</h1>
            <p>
              Sigurnost Borvin brings together firefighting equipment, service, hydrant systems, fire detection,
              alarm systems and technical support for companies, residential buildings and institutions.
            </p>
            <div className="hero-actions">
              <Link href="/en/contact" className="button primary">
                Send inquiry <ArrowRight size={18} />
              </Link>
              <a href={`tel:${contact.mobile.replaceAll("/", "").replaceAll("-", "")}`} className="button ghost">
                <PhoneCall size={18} />
                {contact.mobile}
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <img src="/borvin-products/servis.jpg" alt="Fire protection equipment service" />
            <div className="hero-card">
              <Image src="/logo-sigurnost-borvin.png" width={72} height={72} alt="" />
              <div>
                <strong>Service and equipment</strong>
                <span>Extinguishers · hydrants · detection · alarms</span>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-row">
          {stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>
                {stat.label === "godina osnivanja"
                  ? "founded"
                  : stat.label === "fokus na ispravnost sistema"
                    ? "focus on system readiness"
                    : "equipment, service and documentation"}
              </span>
            </div>
          ))}
        </section>

        <section className="section">
          <SectionTitle
            eyebrow="Core services"
            title="Everything a facility needs to stay inspection-ready and prepared for real situations."
            text="The offer is organized around practical client needs: equipment, service, systems and documentation."
            align="center"
          />
          <div className="service-grid">
            {enServices.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.title}>
                  <Icon size={26} />
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section tinted">
          <SectionTitle
            eyebrow="Catalog"
            title="Products are organized as a clear catalog, ready for a future webshop."
            text="For now, each category leads to an inquiry. Later, prices, stock and checkout can be added."
          />
          <div className="category-grid">
            {enCategories.slice(0, 4).map((category) => {
              const Icon = category.icon;
              return (
                <article className="category-card" key={category.title}>
                  <img src={category.image} alt={category.title} />
                  <div>
                    <span>{category.eyebrow}</span>
                    <h3>{category.title}</h3>
                    <p>{category.text}</p>
                    <Link href="/en/catalog">
                      <Icon size={17} />
                      View
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section split">
          <div>
            <SectionTitle
              eyebrow="Why Borvin"
              title="Clear safety communication without unnecessary noise."
              text="A direct offer, quick contact and organized categories for clients who want to solve equipment, service or protection systems efficiently."
            />
            <ul className="check-list">
              <li>
                <CheckCircle2 size={20} />
                Categories match the real offer: extinguishers, hydrants, detection, alarms and PPE.
              </li>
              <li>
                <CheckCircle2 size={20} />
                Contact and service are visible immediately.
              </li>
              <li>
                <CheckCircle2 size={20} />
                The catalog supports fast inquiries for products and services.
              </li>
            </ul>
          </div>
          <div className="sector-stack">
            {enSectors.map((sector) => (
              <article key={sector.title}>
                <CheckCircle2 size={23} />
                <div>
                  <h3>{sector.title}</h3>
                  <p>{sector.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
