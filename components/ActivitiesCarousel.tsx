"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const activities = [
  { src: "/gallery/pic1.jpg", alt: "AWA facilitator leading a one-on-one adolescent mentorship session", caption: "One-on-One Mentorship" },
  { src: "/gallery/pic4.jpg", alt: "Adolescents participating in an AWA life skills workshop", caption: "Life Skills Workshops" },
  { src: "/gallery/pic5.jpg", alt: "AWA group counselling session with secondary school students", caption: "Group Counselling" },
  { src: "/gallery/pic10.jpg", alt: "AWA community outreach event with adolescents and families", caption: "Community Outreach" },
  { src: "/gallery/pic11.jpg", alt: "Adolescent leadership training session led by AWA", caption: "Leadership Training" },
  { src: "/gallery/D2.jpeg", alt: "Adolescents engaged in an AWA youth engagement activity", caption: "Youth Engagement" },
];

const SLIDE_DURATION = 5000;

export default function ActivitiesCarousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % activities.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + activities.length) % activities.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const current = activities[index];

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden bg-white p-2 shadow-[0_20px_60px_-15px_rgba(11,42,91,0.35)] ring-1 ring-black/5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Image frame */}
      <div className="relative h-[300px] md:h-[460px] w-full rounded-xl overflow-hidden bg-slate-100">
        {activities.map((activity, i) => (
          <div
            key={activity.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={activity.src}
              alt={activity.alt}
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              priority={i === 0}
              className={`object-cover transition-transform duration-[6000ms] ease-out ${
                i === index ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

        {/* Eyebrow + caption */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 flex items-end justify-between gap-4">
          <div>
            <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-amber-300 mb-2">
              AWA in Action
            </span>
            <h3 className="text-white text-xl md:text-2xl font-bold leading-tight drop-shadow-sm">
              {current.caption}
            </h3>
          </div>
          <span className="hidden sm:block text-white/70 text-sm font-medium tabular-nums shrink-0 pb-1">
            {String(index + 1).padStart(2, "0")} / {String(activities.length).padStart(2, "0")}
          </span>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          aria-label="Previous activity"
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Next activity"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Progress strip */}
      <div className="flex gap-1.5 px-2 pt-2 pb-1">
        {activities.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative h-1 flex-1 rounded-full bg-slate-200 overflow-hidden"
          >
            <span
              className={`absolute inset-y-0 left-0 bg-blue-900 rounded-full ${
                i === index ? "animate-[fill_5s_linear]" : i < index ? "w-full" : "w-0"
              }`}
              style={i === index ? { animationPlayState: isPaused ? "paused" : "running" } : undefined}
            />
          </button>
        ))}
      </div>

      <style>{`
        @keyframes fill {
          from { width: 0% }
          to { width: 100% }
        }
      `}</style>
    </div>
  );
}