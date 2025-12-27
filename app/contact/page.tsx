"use client";

import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="py-20 px-6 max-w-4xl mx-auto text-center animate-in fade-in duration-500">
        <h2 className="text-4xl font-bold mb-4 text-green-600">Message Sent!</h2>
        <p className="text-gray-600 text-lg">
          Thank you for reaching out to Adolescents Wellness Africa. 
          We have received your email and will get back to you shortly.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-md"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section - Dark Background for White Text visibility */}
      <section className="bg-blue-900 py-20 px-6 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight text-white">
            Contact Us
          </h1>
          <div className="w-20 h-1 bg-blue-400 mb-8"></div>
          <p className="text-blue-100 text-lg max-w-2xl">
            Have questions about our programs or want to partner with us? 
            Reach out to our team today.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="py-16 px-6 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="p-4 border-l-4 border-blue-600 bg-blue-50">
              <h3 className="font-bold text-lg text-gray-900">Head Office</h3>
              <p className="text-gray-700">JKUAT Road, Juja, Kiambu County, Kenya</p>
            </div>
            <div className="p-4 border-l-4 border-blue-600 bg-blue-50">
              <h3 className="font-bold text-lg text-gray-900">Phone</h3>
              <p className="text-gray-700">+254 742 631 201</p>
            </div>
            <div className="p-4 border-l-4 border-blue-600 bg-blue-50">
              <h3 className="font-bold text-lg text-gray-900">Email</h3>
              <p className="text-blue-700 font-medium">adolescentswellness.africa@gmail.coma</p>
            </div>
          </div>

          {/* Formspree Form */}
          <form 
            action="https://formspree.io/f/xojqqyvr" 
            method="POST"
            onSubmit={() => setTimeout(() => setSubmitted(true), 800)}
            className="space-y-5 bg-white p-6 rounded-xl shadow-2xl border border-gray-100"
          >
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                Full Name
              </label>
              <input 
                type="text" 
                name="name" 
                placeholder="Enter your full name" 
                className="w-full p-4 bg-gray-50 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 outline-none text-gray-900 placeholder-gray-400 transition-all shadow-sm" 
                required 
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                Email Address
              </label>
              <input 
                type="email" 
                name="email" 
                placeholder="name@example.com" 
                className="w-full p-4 bg-gray-50 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 outline-none text-gray-900 placeholder-gray-400 transition-all shadow-sm" 
                required 
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                Message
              </label>
              <textarea 
                name="message" 
                placeholder="Tell us how we can help you..." 
                rows={5} 
                className="w-full p-4 bg-gray-50 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 outline-none text-gray-900 placeholder-gray-400 transition-all shadow-sm" 
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white px-6 py-4 rounded-lg font-extrabold w-full transition-all shadow-md text-lg uppercase tracking-wider"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}