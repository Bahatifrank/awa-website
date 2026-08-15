"use client";

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

type Slide = {
  image: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
};

const slides: Slide[] = [
  {
    image: "/gallery/pic10.jpg",
    title: "Supporting Adolescents Move From Where They Are To Where They Ought To Be",
    subtitle: "Adolescents Wellness–Africa advances mental health, life skills, and positive behaviour across Kenya.",
    ctaText: "Read More",
    ctaHref: "/about",
  },
  {
    image: "/gallery/pic5.jpg",
    title: "Building Resilient, Emotionally Healthy Adolescents",
    subtitle: "We partner with schools and families to deliver counselling, mentorship, and life skills education.",
    ctaText: "Our Programs",
    ctaHref: "/programs",
  },
  {
    image: "/gallery/pic11.jpg",
    title: "Empowering Schools to Support Student Wellbeing",
    subtitle: "Training teachers, parents, and peer leaders to recognise and respond to adolescent mental health needs.",
    ctaText: "Our Services",
    ctaHref: "/services",
  },
  {
    image: "/gallery/D2.jpeg",
    title: "Partner With Us to Reach More Young People",
    subtitle: "We work with schools, organisations, and government agencies across Kenya to scale our impact.",
    ctaText: "Get Involved",
    ctaHref: "/contact",
  },
];

const SLIDE_DURATION = 6000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section
      className="relative h-[85vh] min-h-[560px] w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <div className="max-w-4xl mx-auto text-white">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-xl leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl mb-10 text-slate-100 drop-shadow-md max-w-2xl mx-auto">
                {slide.subtitle}
              </p>
              <Link
                href={slide.ctaHref}
                className="inline-block bg-amber-500 hover:bg-amber-400 text-blue-950 px-9 py-4 rounded-full font-black uppercase tracking-widest transition-all shadow-lg hover:scale-105 active:scale-95"
              >
                {slide.ctaText}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/15 hover:bg-white/30 backdrop-blur-sm text-white w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/15 hover:bg-white/30 backdrop-blur-sm text-white w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full border-2 border-white transition-colors ${
              i === index ? "bg-white" : "bg-transparent hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}