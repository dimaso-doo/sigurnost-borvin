import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { postSlug, posts } from "@/lib/data";

export function AdvicePreview() {
  return (
    <section className="section advice-preview">
      <SectionTitle
        eyebrow="Saveti"
        title="Kratki vodiči za opremu, servis i obaveze objekta."
        text="Praktične teme za vlasnike, upravnike i firme koje žele da oprema bude spremna, a obaveze jasne."
      >
        <Link className="button ghost section-title-action" href="/blog">
          Vidi sve savete <ArrowRight size={16} />
        </Link>
      </SectionTitle>
      <div className="advice-grid">
        {posts.slice(0, 3).map((post) => (
          <article className="advice-card" key={post.title}>
            <img src={post.image} alt={post.title} loading="lazy" decoding="async" />
            <div>
              <span>{post.tag}</span>
              <h3>
                <Link href={`/blog/${postSlug(post.title)}`}>{post.title}</Link>
              </h3>
              <p>{post.excerpt}</p>
              <Link href={`/blog/${postSlug(post.title)}`}>
                Pročitaj više <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
