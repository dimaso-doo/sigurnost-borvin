import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AdvicePreview } from "@/components/AdvicePreview";
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
            return (
              <article className="catalog-card" key={category.title}>
                <Image src={category.image} alt={category.title} width={900} height={900} loading="lazy" />
                <div>
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
        <AdvicePreview />
      </main>
      <SiteFooter />
    </>
  );
}
