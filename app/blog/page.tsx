import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from "../lib/blogPosts";
export const metadata: Metadata = {
  title: "Resources & Insights | Adolescents Wellness Africa Blog",
  description: "Articles on adolescent mental health, life skills, and school wellness from Adolescents Wellness Africa — practical guidance for parents, schools, and communities in Kenya.",
  alternates: { canonical: "/blog" },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-blue-900 pt-20 pb-16 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
            Resources &amp; Insights
          </h1>
          <div className="w-24 h-1.5 bg-amber-400 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-blue-100 text-lg leading-relaxed">
            Practical guidance on adolescent mental health, life skills, and school
            wellness — for parents, teachers, and communities across Kenya.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="px-6 -mt-10 relative z-10 max-w-6xl mx-auto mb-16">
        <Link
          href={`/blog/${featured.slug}`}
          className="group grid md:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(11,42,91,0.35)] ring-1 ring-black/5"
        >
          <div className="relative h-64 md:h-full min-h-[280px]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-amber-600 mb-3 w-fit">
              {featured.category} · Featured
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-4 leading-tight group-hover:text-blue-700 transition-colors">
              {featured.title}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">{featured.excerpt}</p>
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <span>{formatDate(featured.date)}</span>
              <span>·</span>
              <span>{featured.readTime}</span>
            </div>
          </div>
        </Link>
      </section>

      {/* Post grid */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-blue-600 mb-3">
                  {post.category}
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 mb-2 leading-snug group-hover:text-blue-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span>{formatDate(post.date)}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}