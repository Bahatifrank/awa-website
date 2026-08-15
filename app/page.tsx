import Image from 'next/image';
import HeroCarousel from "../components/HeroCarousel";

const activityPhotos = [
  { src: "/gallery/pic7.jpg", alt: "AWA team facilitating a school wellness activity" },
  { src: "/gallery/pic9.jpg", alt: "AWA mentorship program participants in a group session" },
  { src: "/gallery/pic13.jpg", alt: "AWA facilitators and students during a school visit" },
  { src: "/gallery/D5.jpeg", alt: "AWA counselling session with an adolescent participant" },
  { src: "/gallery/pic20.jpg", alt: "Adolescents engaged in an AWA resilience-building exercise" },
  { src: "/gallery/D4.jpeg", alt: "AWA team building activity with program participants" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Main Info Row: Leadership, Mission, & Vision */}
      <section className="py-20 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div className="bg-slate-50 rounded-3xl p-8 shadow-xl border border-white flex flex-col items-center text-center">
            <div className="relative w-48 h-48 mb-6 flex-shrink-0">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-3"></div>
              <Image
                src="/pp.jpeg"
                alt="Dr. Adonijah Kimanzi, Lead Coordinator at Adolescents Wellness Africa"
                fill
                sizes="192px"
                className="relative z-10 object-cover rounded-2xl shadow-lg grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
            <h4 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2">Leadership</h4>
            <h5 className="text-xl font-bold text-slate-900">Dr. Adonijah Kimanzi</h5>
            <p className="text-slate-500 text-sm mb-4">Lead Coordinator</p>
            <p className="text-slate-600 text-sm italic leading-relaxed">
              "Our focus on mental health is a commitment to the future of Africa."
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-center">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 font-bold">1</div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              To strengthen adolescent mental health and psychosocial well-being through school-based counselling, life skills education, and preventive interventions.
            </p>
          </div>

          <div className="bg-blue-600 p-10 rounded-3xl text-white shadow-xl flex flex-col justify-center">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mb-6 font-bold text-blue-100">2</div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-blue-50 text-lg leading-relaxed">
              Schools and communities where adolescents are emotionally healthy, resilient, values-driven, and equipped to succeed academically and socially.
            </p>
          </div>
        </div>
      </section>

      {/* Activity Photos Grid */}
    
    </main>
  );
}