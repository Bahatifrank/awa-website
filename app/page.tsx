export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[85vh] flex items-center justify-center text-center px-6 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/hero-bg.jpg')` 
        }}
      >
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-xl">
            Supporting Adolescents Move From Where They Are To Where They Ought To 
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-slate-200 drop-shadow-md">
            Adolescents Wellness–Africa (AWA) advances mental health, life skills, 
            and positive behaviour across Kenya.
          </p>
        </div>
      </section>

      {/* Main Info Row: Leadership, Mission, & Vision */}
      <section className="py-20 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* 1. Leadership Profile Card */}
          <div className="bg-slate-50 rounded-3xl p-8 shadow-xl border border-white flex flex-col items-center text-center">
            <div className="relative w-48 h-48 mb-6 flex-shrink-0">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-3"></div>
              <img 
                src="/pp.jpeg"alt="AWA Leadership" 
                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-lg grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
            <h4 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2">Leadership</h4>
            <h5 className="text-xl font-bold text-slate-900">Dr. Adonijah Kimanzi</h5>
            <p className="text-slate-500 text-sm mb-4">Lead Coordinator</p>
            <p className="text-slate-600 text-sm italic leading-relaxed">
              "Our focus on mental health is a commitment to the future of Africa."
            </p>
          </div>

          {/* 2. Mission Card */}
          <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-center">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 font-bold">1</div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              To strengthen adolescent mental health and psychosocial well-being through school-based counselling, life skills education, and preventive interventions.
            </p>
          </div>

          {/* 3. Vision Card */}
          <div className="bg-blue-600 p-10 rounded-3xl text-white shadow-xl flex flex-col justify-center">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mb-6 font-bold text-blue-100">2</div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-blue-50 text-lg leading-relaxed">
              Schools and communities where adolescents are emotionally healthy, resilient, values-driven, and equipped to succeed academically and socially.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}