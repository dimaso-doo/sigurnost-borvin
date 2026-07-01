import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";
import { ContactBand } from "@/components/ContactBand";
import { SectionTitle } from "@/components/SectionTitle";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { categories, contact, sectors, services, stats, structuredLocalBusiness } from "@/lib/data";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredLocalBusiness) }}
        />
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Novi Sad · od 1997.</span>
            <h1>Protivpožarna oprema, servis i sistemi zaštite za objekte koji moraju biti sigurni.</h1>
            <p>
              Sigurnost Borvin objedinjuje vatrogasnu opremu, servis, hidrantske sisteme, dojavu požara,
              alarmne sisteme i tehničku podršku za firme, stambene zajednice i ustanove.
            </p>
            <div className="hero-actions">
              <Link href="/kontakt" className="button primary">
                Pošalji upit <ArrowRight size={18} />
              </Link>
              <a href={`tel:${contact.mobile.replaceAll("/", "").replaceAll("-", "")}`} className="button ghost">
                <PhoneCall size={18} />
                {contact.mobile}
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src="/borvin-products/servis.jpg"
              alt="Servis protivpožarne opreme"
            />
            <div className="hero-card">
              <Image src="/logo-sigurnost-borvin.png" width={72} height={72} alt="" />
              <div>
                <strong>Servis i oprema</strong>
                <span>Vatrogasni aparati · hidranti · dojava · alarmi</span>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-row">
          {stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="section">
          <SectionTitle
            eyebrow="Glavne usluge"
            title="Sve što objektu treba da bude spreman za kontrolu i za stvarnu situaciju."
            text="Ponuda je organizovana oko praktičnih potreba klijenata: oprema, servis, sistemi i dokumentacija."
            align="center"
          />
          <div className="service-grid">
            {services.map((service) => {
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
            eyebrow="Katalog"
            title="Proizvodi kao pregledan katalog, spremni za budući webshop."
            text="Za početak bez korpe i plaćanja: svaka kategorija vodi ka upitu, a kasnije se mogu dodati cene, lager i naručivanje."
          />
          <div className="category-grid">
            {categories.slice(0, 4).map((category) => {
              const Icon = category.icon;
              return (
                <article className="category-card" key={category.title}>
                  <img src={category.image} alt={category.title} />
                  <div>
                    <span>{category.eyebrow}</span>
                    <h3>{category.title}</h3>
                    <p>{category.text}</p>
                    <Link href="/katalog">
                      <Icon size={17} />
                      Pogledaj
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
              eyebrow="Zašto Borvin"
              title="Sigurnost bez nepotrebne buke."
              text="Jasna ponuda, direktan kontakt i pregledne kategorije za klijente koji žele brzo da reše opremu, servis ili sistem zaštite."
            />
            <ul className="check-list">
              <li>
                <CheckCircle2 size={20} />
                Kategorije odgovaraju realnoj ponudi: aparati, hidranti, dojava, alarmi i HTZ oprema.
              </li>
              <li>
                <CheckCircle2 size={20} />
                Kontakt i servis su vidljivi odmah, bez traženja kroz meni.
              </li>
              <li>
                <CheckCircle2 size={20} />
                Katalog omogućava brz upit za proizvode i usluge.
              </li>
            </ul>
          </div>
          <div className="sector-stack">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <article key={sector.title}>
                  <Icon size={23} />
                  <div>
                    <h3>{sector.title}</h3>
                    <p>{sector.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
