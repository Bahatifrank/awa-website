import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { programsNav } from "../../lib/programsNav";

export const metadata: Metadata = {
  title: "Adolescent Mentorship Programs in Kenya",
  description: "AWA's mentorship program pairs adolescents with trained near-peer mentors for structured goal-setting, guidance, and positive youth development.",
  alternates: { canonical: "/programs/mentorship" },
};

const includes = [
  "Structured group mentorship sessions led by trained near-peer mentors",
  "Goal-setting and progress tracking for each mentee",
  "Positive youth development framework focused on strengths, not deficits",
  "Safe spaces to discuss ambitions, challenges, and identity",
  "Regular check-ins that build consistency and trust over time",
];

const whoFor = [
  "Schools wanting to give students access to relatable, positive role models",
  "Community organisations running youth development or after-school programs",
  "Adolescents who would benefit from consistent, one-on-one or small-group guidance",
];

export default function MentorshipPage() {
  const related = programsNav.filter((p) => p.slug !== "mentorship");

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-blue-900 py-16 md:py-20 px-6 text-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/programs" className="text-blue-200 hover:text-white text-sm font-bold inline-flex items-center gap-2 mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            View All AWA Programs
          </Link>
          <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-amber-300 mb-4">
            Mentorship
          </span>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6 max-w-2xl">
            Adolescent Mentorship Programs in Kenya
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Many adolescents just need someone slightly further along the
            path who understands what they're going through. AWA's
            mentorship program pairs young people with trained near-peer
            mentors who guide, listen, and hold them accountable to their own
            goals.
          </p>
        </div>
      </section>

      {/* Image */}
      <section className="px-6 -mt-10 relative z-10 max-w-4xl mx-auto mb-4">
        <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(11,42,91,0.35)] ring-1 ring-black/5">
          <Image
            src="/gallery/pic9.jpg"
            alt="AWA mentorship program participants in a group session"
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Body */}
      <section className="py-12 md:py-16 px-6 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Why Mentorship Matters</h2>
              <p className="text-slate-600 leading-relaxed">
                Adolescents are more likely to open up to someone who feels
                relatable — not a distant authority figure. Near-peer mentors,
                trained and supervised by AWA, offer that middle ground:
                credible enough to be trusted, close enough in age and
                experience to be understood. Over time, consistent mentorship
                relationships build the confidence and accountability that
                classroom instruction alone can't provide.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">What This Program Includes</h2>
              <ul className="space-y-3">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 mt-0.5 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="12" r="9" strokeWidth={1.8} />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m9 12 2 2 4-4" />
                    </svg>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Who This Is For</h2>
              <ul className="space-y-3">
                {whoFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 mt-0.5 shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div>
            <div className="sticky top-24 bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-2">Start a Mentorship Cohort</h3>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                We work with schools and organisations to set up and run
                structured mentorship cohorts.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-bold text-sm transition-colors"
              >
                Partner With AWA
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related programs */}
      <section className="bg-slate-50 py-16 px-6 border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-blue-900 mb-6">Related Programs</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/programs/${p.slug}`}
                className="group bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-blue-700 transition-colors">
                  {p.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">{p.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}