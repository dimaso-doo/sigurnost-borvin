import { ArrowRight } from "lucide-react";
import { ContactBand } from "@/components/ContactBand";
import { SectionTitle } from "@/components/SectionTitle";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { posts } from "@/lib/data";

export const metadata = {
  title: "Saveti",
  description: "Praktični saveti o protivpožarnim aparatima, hidrantskoj opremi, dojavi požara i obukama."
};

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <SectionTitle
          eyebrow="Saveti"
          title="Praktični odgovori za vlasnike i upravnike objekata."
          text="Kratki saveti o opremi, servisima, obavezama i sistemima zaštite od požara."
          align="center"
        />
        <div className="post-grid">
          {posts.map((post) => {
            const Icon = post.icon;
            return (
              <article className="post-card" key={post.title}>
                <span>{post.tag}</span>
                <Icon size={26} />
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <a href="/kontakt">
                  Pitajte nas <ArrowRight size={16} />
                </a>
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
