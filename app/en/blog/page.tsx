import { ArrowRight } from "lucide-react";
import { ContactBand } from "@/components/ContactBand";
import { SectionTitle } from "@/components/SectionTitle";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { enPosts } from "@/lib/enData";

export const metadata = {
  title: "Insights",
  description: "Practical insights about fire extinguishers, hydrant equipment, fire detection and training."
};

export default function EnglishBlogPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <SectionTitle
          eyebrow="Insights"
          title="Practical answers for facility owners and managers."
          text="Short articles about equipment, service, obligations and fire protection systems."
          align="center"
        />
        <div className="post-grid">
          {enPosts.map((post) => {
            return (
              <article className="post-card" key={post.title}>
                {"image" in post ? <img src={post.image as string} alt={post.title} /> : null}
                <span>{post.tag}</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <a href="/en/contact">
                  Ask us <ArrowRight size={16} />
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
