import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPost } from "../../lib/blogPosts";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | AWA Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      images: [post.image],
      type: "article",
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const siteUrl = "https://www.adolescentswellness-africa.org";

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            image: `${siteUrl}${post.image}`,
            author: { "@type": "Organization", name: "Adolescents Wellness Africa" },
            publisher: { "@type": "Organization", name: "Adolescents Wellness Africa" },
            mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
          }),
        }}
      />

      {/* Header */}
      <section className="bg-blue-900 pt-20 pb-14 px-6 text-white">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-blue-200 hover:text-white text-sm font-bold inline-flex items-center gap-2 mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Resources
          </Link>
          <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-amber-300 mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-blue-200 text-sm">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Hero image — overlapping card, consistent with rest of site */}
      <section className="px-6 -mt-10 relative z-10 max-w-3xl mx-auto mb-4">
        <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(11,42,91,0.35)] ring-1 ring-black/5">
          <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" priority />
        </div>
      </section>

      {/* Article body */}
      <article className="px-6 py-12 max-w-3xl mx-auto">
        {post.content.map((paragraph, i) => (
          <p key={i} className="text-slate-700 text-lg leading-relaxed mb-6">
            {paragraph}
          </p>
        ))}

        <div className="mt-10 pt-8 border-t border-slate-100">
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-colors shadow-md"
          >
            Talk to Our Team
          </Link>
        </div>
      </article>

      {/* Related posts */}
      <section className="bg-slate-50 py-16 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-extrabold text-blue-900 mb-8">More Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((rp) => (
              <Link
                key={rp.slug}
                href={`/blog/${rp.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="relative h-40 w-full">
                  <Image src={rp.image} alt={rp.title} fill sizes="33vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-blue-700 transition-colors">
                    {rp.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}