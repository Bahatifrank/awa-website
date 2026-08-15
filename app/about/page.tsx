import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Adolescent Mental Health & Life Skills Programs | AWA Kenya",
  description: "Explore AWA's evidence-based programs in adolescent mental health, life skills, prevention, and capacity building for schools and communities in Kenya.",
  alternates: { canonical: "/programs" },
};

type AccentType = "amber" | "blue";

interface Program {
  id: number;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  accent: AccentType;
  icon: React.ReactNode;
}

const programs: Program[] = [
  {
    id: 1,
    title: "Adolescent-Based Mental Health Support",
    description: "Counselling services, psychosocial assessments, and referral systems for learners at risk.",
    bullets: ["Individual & group counselling", "Psychosocial risk assessments", "Structured referral pathways"],
    image: "/gallery/pic5.jpg",
    accent: "amber",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 0 1 6.364 0L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 21l-7.682-8.318a4.5 4.5 0 0 1 0-6.364Z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Life Skills and Character Development",
    description: "Programs that build self-awareness, emotional regulation, responsibility, leadership, and resilience.",
    bullets: ["Emotional regulation training", "Leadership & responsibility building", "Resilience-focused activities"],
    image: "/gallery/pic11.jpg",
    accent: "blue",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Values-Based Sexuality and Protection Education",
    description: "Age-appropriate education promoting self-respect, personal safety, and responsible decision-making.",
    bullets: ["Age-appropriate curriculum", "Personal safety awareness", "Responsible decision-making skills"],
    image: "/gallery/pic13.jpg",
    accent: "amber",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12.75 11.25 15 15 9.75M21 12c0 4.556-3.04 8.325-7.19 9.542a1.99 1.99 0 0 1-1.62 0C7.04 20.325 4 16.556 4 12V6.741a1.5 1.5 0 0 1 1.5-1.5h.5a5.5 5.5 0 0 0 4.5-2.25 5.5 5.5 0 0 0 4.5 2.25h.5a1.5 1.5 0 0 1 1.5 1.5V12Z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Prevention and Early Intervention",
    description: "Addressing substance abuse, violence, bullying, radicalization, abuse, and school disengagement.",
    bullets: ["Substance abuse prevention", "Anti-bullying & anti-violence work", "Early warning identification"],
    image: "/gallery/D2.jpeg",
    accent: "blue",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Capacity Building for Schools and Families",
    description: "Training teachers, parents, peer counsellors, and school leaders in adolescent wellness and safeguarding.",
    bullets: ["Teacher & peer counsellor training", "Parenting workshops", "School safeguarding practices"],
    image: "/gallery/D4.jpeg",
    accent: "amber",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Monitoring, Evaluation, and Learning (MEL)",
    description: "Tracking psychosocial outcomes, behaviour change, and school climate improvement.",
    bullets: ["Psychosocial outcome tracking", "Behaviour change measurement", "School climate reporting"],
    image: "/gallery/pic20.jpg",
    accent: "blue",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "1,000+", label: "Adolescents Reached" },
  { value: "10+", label: "Partner Schools" },
  { value: "50+", label: "Trained Facilitators" },
  { value: "200+", label: "Counselling Sessions" },
];

function accentClasses(accent: AccentType) {
  return accent === "amber"
    ? { border: "border-amber-200", iconBg: "bg-amber-50", iconText: "text-amber-600", check: "text-amber-500" }
    : { border: "border-blue-200", iconBg: "bg-blue-50", iconText: "text-blue-600", check: "text-blue-600" };
}

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-blue-900 py-20 px-6 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">Our Programs</h1>
        <div className="w-20 h-1 bg-amber-400 mx-auto mb-6" aria-hidden="true" />
        <p className="max-w-2xl mx-auto text-blue-100 text-lg">
          Evidence-based interventions designed to foster resilience and mental
          well-being in schools and communities across Africa.
        </p>
      </section>

      {/* Alternating Program Blocks */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-24">
        {programs.map((program, idx) => {
          const c = accentClasses(program.accent);
          const imageFirst = idx % 2 === 0;
          const rotate = idx % 2 === 0 ? "-rotate-2" : "rotate-2";

          return (
            <div
              key={program.id}
              className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
            >
              {/* Image */}
              <div className={imageFirst ? "md:order-1" : "md:order-2"}>
                <div className={`relative ${rotate} hover:rotate-0 transition-transform duration-500`}>
                  <div className={`rounded-3xl border-8 ${c.border} bg-white shadow-xl overflow-hidden`}>
                    <div className="relative h-64 md:h-80 w-full">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className={imageFirst ? "md:order-2" : "md:order-1"}>
                <div className={`w-14 h-14 rounded-full ${c.iconBg} ${c.iconText} flex items-center justify-center mb-6`}>
                  {program.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 leading-tight">
                  {program.title}
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  {program.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {program.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3">
                      <svg className={`w-5 h-5 shrink-0 ${c.check}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <circle cx="12" cy="12" r="9" strokeWidth={1.8} />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m9 12 2 2 4-4" />
                      </svg>
                      <span className="text-slate-700 font-medium">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-block bg-blue-900 hover:bg-blue-800 text-white px-7 py-3 rounded-full font-bold transition-colors shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  Support This Program
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      {/* Stats Bar */}
      <section className="bg-blue-900 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-black text-amber-400 mb-2">{stat.value}</div>
              <div className="text-blue-100 text-sm md:text-base tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership CTA Section */}
      <section className="bg-slate-900 py-16 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Want to implement these programs in your Society?</h2>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            We partner with secondary schools, community organizations, and government agencies
            to deliver these vital services to adolescents.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-blue-950 px-10 py-4 rounded-full font-black uppercase tracking-widest transition-all shadow-lg hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
          >
            Partner With Us
          </Link>
        </div>
      </section>
    </main>
  );
}