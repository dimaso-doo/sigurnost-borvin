import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactBand } from "@/components/ContactBand";
import { SectionTitle } from "@/components/SectionTitle";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { categories } from "@/lib/data";

export const metadata = {
  title: "Katalog",
  description: "Katalog protivpožarne opreme, hidrantske opreme, dojave požara, HTZ opreme i rezervnih delova."
};

export default function CatalogPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <SectionTitle
          eyebrow="Katalog"
          title="Proizvodi su predstavljeni jasno, a svaka kategorija vodi ka upitu."
          text="Pregled osnovnih kategorija protivpožarne i tehničke opreme za firme, ustanove i stambene objekte."
          align="center"
        />
        <div className="catalog-grid">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <article className="catalog-card" key={category.title}>
                <img src={category.image} alt={category.title} />
                <div>
                  <Icon size={25} />
                  <span>{category.eyebrow}</span>
                  <h2>{category.title}</h2>
                  <p>{category.text}</p>
                  <Link href="/kontakt">
                    Zatraži ponudu <ArrowRight size={17} />
                  </Link>
                </div>
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
