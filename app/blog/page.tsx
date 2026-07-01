import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ContactBand } from "@/components/ContactBand";
import { SectionTitle } from "@/components/SectionTitle";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { postSlug, posts } from "@/lib/data";

export const metadata = {
  title: "Saveti",
  description: "Praktični saveti o protivpožarnim aparatima, hidrantskoj opremi, dojavi požara i obukama."
};

const POSTS_PER_PAGE = 12;

type BlogPageProps = {
  searchParams?: Promise<{
    page?: string;
  }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const currentPage = Math.min(
    Math.max(Number.parseInt(params?.page ?? "1", 10) || 1, 1),
    Math.ceil(posts.length / POSTS_PER_PAGE)
  );
  const pageCount = Math.ceil(posts.length / POSTS_PER_PAGE);
  const visiblePosts = posts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

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
          {visiblePosts.map((post) => {
            return (
              <article className="post-card" key={post.title}>
                <img src={post.image} alt={post.title} loading="lazy" decoding="async" />
                <span>{post.tag}</span>
                <h2>
                  <Link href={`/blog/${postSlug(post.title)}`}>{post.title}</Link>
                </h2>
                <p>{post.excerpt}</p>
                <Link href={`/blog/${postSlug(post.title)}`}>
                  Pitajte nas <ArrowRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>
        {pageCount > 1 ? (
          <nav className="pagination" aria-label="Paginacija saveta">
            {Array.from({ length: pageCount }, (_, index) => {
              const page = index + 1;
              const href = page === 1 ? "/blog" : `/blog?page=${page}`;

              return (
                <Link className={page === currentPage ? "active" : ""} href={href} key={page}>
                  {page}
                </Link>
              );
            })}
          </nav>
        ) : null}
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
