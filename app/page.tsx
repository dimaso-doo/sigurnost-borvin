import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, CheckCircle2, Flame, PhoneCall, ShieldCheck } from "lucide-react";
import { AdvicePreview } from "@/components/AdvicePreview";
import { ContactBand } from "@/components/ContactBand";
import { HeroShowcase } from "@/components/HeroShowcase";
import { SectionTitle } from "@/components/SectionTitle";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { categories, contact, sectors, services, stats, structuredLocalBusiness } from "@/lib/data";

const statIcons = [CalendarDays, Flame, ShieldCheck];

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
          <HeroShowcase badgeTitle="Servis i oprema" badgeText="Vatrogasni aparati · hidranti · dojava · alarmi" />
        </section>

        <section className="stats-row">
          {stats.map((stat, index) => {
            const Icon = statIcons[index] ?? ShieldCheck;
            return (
              <div key={stat.label}>
                <Icon className="stats-icon" size={52} />
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            );
          })}
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

        <section className="section tinted burned-section">
          <SectionTitle
            eyebrow="Katalog"
            title="Pronađite protivpožarnu opremu koja odgovara vašem objektu."
            text="Pregledajte najtraženije kategorije, izaberite šta vam treba i pošaljite upit. Brzo ćemo pomoći oko izbora, dostupnosti i sledećeg koraka."
          >
            <Link className="button ghost section-title-action" href="/katalog">
              Vidi sve <ArrowRight size={16} />
            </Link>
          </SectionTitle>
          <div className="category-grid">
            {categories.slice(0, 4).map((category) => {
              return (
                <article className="category-card" key={category.title}>
                  <Image src={category.image} alt={category.title} width={900} height={900} loading="lazy" />
                  <div>
                    <span>{category.eyebrow}</span>
                    <h3>{category.title}</h3>
                    <p>{category.text}</p>
                    <Link href="/katalog">
                      Pogledaj <ArrowRight size={17} />
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
              text="Mirna, tačna i proverljiva zaštita: oprema koja je dostupna, servis koji se pamti po roku i podrška koja zna šta objektu stvarno treba."
            />
            <ul className="check-list">
              <li>
                <CheckCircle2 size={20} />
                Jedan partner za PP aparate, hidrante, dojavu, alarme, video nadzor i HTZ opremu.
              </li>
              <li>
                <CheckCircle2 size={20} />
                Servisni rokovi, evidencija i oprema organizovani su tako da inspekcija ne bude stres.
              </li>
              <li>
                <CheckCircle2 size={20} />
                Svaki upit brzo vodi ka konkretnom sledećem koraku: pregled, ponuda, servis ili isporuka.
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
        <AdvicePreview />
      </main>
      <SiteFooter />
    </>
  );
}
