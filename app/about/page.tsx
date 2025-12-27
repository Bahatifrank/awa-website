"use client";

import React from 'react';

export default function AboutPage() {
  const objectives = [
    { id: 1, text: "Promote Mental and Emotional Well-Being" },
    { id: 2, text: "Build Life Skills and Resilience" },
    { id: 3, text: "Support Healthy Identity and Sexual Development" },
    { id: 4, text: "Prevent Risky Behaviours and Harm" },
    { id: 5, text: "Strengthen School and Community Wellness Systems" },
    { id: 6, text: "Empower the Boy Child and Vulnerable Adolescents" },
    { id: 7, text: "Enhance Academic and Social Functioning" },
    { id: 8, text: "Build Capacity of Adults Working with Adolescents" },
    { id: 9, text: "Promote Early Identification and Intervention" },
    { id: 10, text: "Advocate for Adolescent Mental Health and Wellness" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section - Blue Background with White Text for high visibility */}
      <section className="bg-blue-900 py-24 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
            About AdolescentsWellnes-Africa          </h1>
          <div className="w-24 h-1.5 bg-blue-400 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-blue-100 text-lg md:text-xl leading-relaxed">
            A national social enterprise advancing adolescent mental health, life skills, 
            and positive behaviour across Kenya.
          </p>
        </div>
      </section>

      {/* Mission & Vision - Deep Slate text to ensure visibility on white */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 border-l-8 border-blue-600 pl-6">
            Our Mission
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            To strengthen adolescent mental health and psychosocial well-being through 
            school-based counselling, life skills education, preventive interventions, 
            and capacity-building for teachers, parents, and peer leaders.
          </p>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 border-l-8 border-blue-600 pl-6">
            Our Vision
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            Schools and communities where adolescents are emotionally healthy, resilient, 
            values-driven, and equipped to succeed academically and socially.
          </p>
        </div>
      </section>

      {/* Objectives Section - Light background with dark cards */}
      <section className="bg-slate-50 py-20 px-6 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 mb-16">
            Strategic Objectives
          </h2>
          {/* Responsive Grid: 1 column on mobile, 2 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((obj) => (
              <div key={obj.id} className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:border-blue-500 transition-colors">
                <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg">
                  {obj.id}
                </span>
                <p className="text-slate-800 font-bold text-lg">{obj.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-8 uppercase tracking-widest">
            Our Core Commitment
        </h2>
        <div className="relative">
          <span className="text-6xl text-blue-100 absolute -top-8 left-0 font-serif">“</span>
          <p className="text-slate-600 italic text-xl md:text-2xl leading-relaxed relative z-10 px-6">
            Adolescents Wellness–Africa seeks to promote holistic adolescent well-being by strengthening 
            mental health, life skills, sexual integrity, and supportive systems within schools, 
            families, and communities across Africa.
          </p>
        </div>
      </section>
    </main>
  );
}