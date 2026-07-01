import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactBand } from "@/components/ContactBand";
import { SectionTitle } from "@/components/SectionTitle";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { enCategories } from "@/lib/enData";

export const metadata = {
  title: "Catalog",
  description: "Catalog of fire protection equipment, hydrant equipment, fire detection, PPE and spare parts."
};

export default function EnglishCatalogPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <SectionTitle
          eyebrow="Catalog"
          title="Products are presented clearly and every category leads to an inquiry."
          text="An overview of the main fire protection and technical equipment categories for companies, institutions and residential facilities."
          align="center"
        />
        <div className="catalog-grid">
          {enCategories.map((category) => {
            const Icon = category.icon;
            return (
              <article className="catalog-card" key={category.title}>
                <img src={category.image} alt={category.title} />
                <div>
                  <Icon size={25} />
                  <span>{category.eyebrow}</span>
                  <h2>{category.title}</h2>
                  <p>{category.text}</p>
                  <Link href="/en/contact">
                    Request offer <ArrowRight size={17} />
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
