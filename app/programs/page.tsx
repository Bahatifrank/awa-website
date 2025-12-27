"use client";

import React from 'react';
import Link from 'next/link';

export default function ProgramsPage() {
  const programs = [
    {
      id: 1,
      title: "Adolescent-Based Mental Health Support",
      description: "Counselling services, psychosocial assessments, and referral systems for learners at risk.",
      
    },
    {
      id: 2,
      title: "Life Skills and Character Development",
      description: "Programs that build self-awareness, emotional regulation, responsibility, leadership, and resilience.",
      
    },
    {
      id: 3,
      title: "Values-Based Sexuality and Protection Education",
      description: "Age-appropriate education promoting self-respect, personal safety, and responsible decision-making.",
      
    },
    {
      id: 4,
      title: "Prevention and Early Intervention",
      description: "Addressing substance abuse, violence, bullying, radicalization, abuse, and school disengagement.",
      
    },
    {
      id: 5,
      title: "Capacity Building for Schools and Families",
      description: "Training teachers, parents, peer counsellors, and school leaders in adolescent wellness and safeguarding.",
      
    },
    {
      id: 6,
      title: "Monitoring, Evaluation, and Learning (MEL)",
      description: "Tracking psychosocial outcomes, behaviour change, and school climate improvement.",
      
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-blue-900 py-20 px-6 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">Our Programs</h1>
        <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-blue-100 text-lg">
          Evidence-based interventions designed to foster resilience and mental 
          well-being in schools and communities across Africa.
        </p>
      </section>

      {/* Programs Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div 
              key={program.id} 
              className="group p-8 bg-white border-2 border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-600 transition-all duration-300 flex flex-col items-start"
            >
              <div className="text-4xl mb-4 bg-slate-50 w-16 h-16 flex items-center justify-center rounded-xl group-hover:bg-blue-50 transition-colors">
                
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3 leading-tight group-hover:text-blue-700 transition-colors">
                {program.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {program.description}
              </p>
              <div className="mt-auto pt-4 border-t border-slate-50 w-full">
                 <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">AWA Core Program</span>
              </div>
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
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest transition-all shadow-lg hover:scale-105 active:scale-95"
          >
            Partner With Us
          </Link>
        </div>
      </section>
    </main>
  );
}