"use client";

import React from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "Mental Health & Psychosocial Support",
      items: [
        "Individual and group counselling",
        "Trauma-informed support (grief, bullying, crisis)",
        "Early identification and intervention",
        "Specialized referral and linkage services"
      ]
    },
    {
      title: "Mentorship & Youth Development",
      items: [
        "Structured mentorship programs",
        "Identity, self-esteem, and resilience building",
        "Leadership and character development",
        "Peer support and role-model engagement"
      ]
    },
    {
      title: "Life Skills & Values Education",
      items: [
        "CBC-aligned life skills training",
        "Emotional intelligence workshops",
        "Decision-making and problem-solving",
        "Values: Integrity, empathy, and work ethic"
      ]
    },
    {
      title: "Mediation & Conflict Resolution",
      items: [
        "Family, school, and peer mediation",
        "Restorative dialogue sessions",
        "Non-violent communication training",
        "Community peace-building initiatives"
      ]
    },
    {
      title: "Consultations & Advisory",
      items: [
        "Psychosocial assessments",
        "Guidance for parents and caregivers",
        "School-based behavioral consultations",
        "Individualized support plans"
      ]
    },
    {
      title: "Training & Capacity Building",
      items: [
        "Peer counsellor and mentor training",
        "Positive parenting workshops",
        "Teacher training on child protection",
        "Facilitator professional development"
      ]
    },
    {
      title: "Advocacy & Outreach",
      items: [
        "Anti-stigma and awareness campaigns",
        "Community sensitization forums",
        "School outreach programs",
        "Adolescent-friendly policy advocacy"
      ]
    },
    {
      title: "Research & Development",
      items: [
        "Needs assessments and baseline studies",
        "Program monitoring and evaluation",
        "Documentation of best practices",
        "Manual and curricula development"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-blue-900 py-20 px-6 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Our Services</h1>
        <div className="w-24 h-1.5 bg-blue-400 mx-auto mb-6"></div>
        <p className="max-w-3xl mx-auto text-blue-100 text-lg md:text-xl">
          Comprehensive psychosocial interventions and development programs designed to empower the African adolescent.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                
              </div>
              <h2 className="text-xl font-extrabold text-blue-900 mb-4 leading-tight">
                {service.title}
              </h2>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="text-slate-600 text-sm flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PUBLISHED BOOK FEATURE CARD */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-[3rem] p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            {/* Book Image Placeholder */}
            {/* Book Image from Public Folder */}
<div className="w-48 h-64 md:w-64 md:h-80 bg-white/10 backdrop-blur-md rounded-lg shadow-2xl flex items-center justify-center border border-white/20 shrink-0 overflow-hidden">
  <img 
    src="/book.png"  // <-- filename in the public folder
    alt="AWA Published Book" 
    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
  />
</div>
            
            <div className="text-center md:text-left">
              <span className="bg-blue-400 text-blue-900 text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest">
                New Publication
              </span>
              <h2 className="text-3xl md:text-4xl font-black mt-4 mb-6 uppercase tracking-tight">
                Featured Work by the Founder
              </h2>
              <p className="text-blue-50 text-lg mb-8 max-w-xl">
                The founder has published a relevant lifeskills guide-book for adolescents on transition.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-white text-blue-900 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg"
              >
                Order Your Copy
              </Link>
            </div>
          </div>
          {/* Abstract Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Need a customized intervention plan?</h2>
        <Link 
          href="/contact" 
          className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition shadow-lg"
        >
          Book a Consultation
        </Link>
      </section>
    </main>
  );
}