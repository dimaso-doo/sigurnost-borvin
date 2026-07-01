import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { AdvicePreview } from "@/components/AdvicePreview";
import { ContactBand } from "@/components/ContactBand";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { postSlug, posts } from "@/lib/data";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: postSlug(post.title) }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((item) => postSlug(item.title) === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((item) => postSlug(item.title) === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="inner-page blog-detail">
        <Link className="back-link" href="/blog">
          <ArrowLeft size={17} />
          Svi saveti
        </Link>
        <article className="blog-article">
          <div className="blog-article-media">
            <img src={post.image} alt={post.title} />
          </div>
          <div className="blog-article-content">
            <div className="blog-article-copy">
              <span className="eyebrow">{post.tag}</span>
              <h1>{post.title}</h1>
              <p>{post.excerpt}</p>
              <div className="article-meta">
                <span>Praktičan savet za protivpožarnu zaštitu</span>
              </div>
            </div>
            <div className="article-body">
              <p>
                Ova tema je važna jer ispravna oprema, jasna evidencija i redovna kontrola smanjuju rizik
                i olakšavaju svakodnevno upravljanje objektom.
              </p>
              <p>
                Preporuka je da se stanje opreme ne proverava samo pred inspekciju, već kroz redovan ritam:
                vizuelni pregled, servisni rokovi, dostupnost opreme i ažurna dokumentacija.
              </p>
              <p>
                Ako niste sigurni šta je potrebno za vaš prostor, najbolje je poslati osnovne informacije o
                objektu i opremi kako bi se predložio sledeći korak.
              </p>
              <Link className="article-cta" href="/kontakt">
                Zatraži proveru ili servis
              </Link>
            </div>
          </div>
        </article>
        <ContactBand />
        <AdvicePreview />
      </main>
      <SiteFooter />
    </>
  );
}
