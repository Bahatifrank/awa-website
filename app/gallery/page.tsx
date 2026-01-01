"use client";

import React, { useState } from 'react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string, alt: string } | null>(null);

  const photos = [
    { src: "/gallery/pic1.jpg", alt: "Adolescent Mentorship Session" },
    { src: "/gallery/pic4.jpg", alt: "our photo" },
    { src: "/gallery/pic5.jpg", alt: "our photo" },
    { src: "/gallery/pic6.jpg", alt: "our photo" },
    { src: "/gallery/pic7.jpg", alt: "our photo" },
    { src: "/gallery/pic8.jpg", alt: "our photo" },
    { src: "/gallery/pic9.jpg", alt: "our photo" },
    { src: "/gallery/pic10.jpg", alt: "Our gallery" },
    { src: "/gallery/pic11.jpg", alt: "our photo" },
    { src: "/gallery/pic12.jpg", alt: "our gallery" },
    { src: "/gallery/pic13.jpg", alt: "photos" },
    { src: "/gallery/pic14.jpg", alt: "photos" },
    { src: "/gallery/pic15.jpg", alt: "photos" },
    { src: "/gallery/pic16.jpg", alt: "Adolescent Mentorship Session" },
    { src: "/gallery/pic17.jpg", alt: "Adolescent Mentorship Session" },
    { src: "/gallery/pic18.jpg", alt: "Adolescent Mentorship Session" },
    { src: "/gallery/pic19.jpg", alt: "Adolescent Mentorship Session" },
    { src: "/gallery/pic20.jpg", alt: "Adolescent Mentorship Session" },
    { src: "/gallery/pic21.jpg", alt: "photosMentorship Session" },
    { src: "/gallery/pic22.jpg", alt: "Adolescent Mentorship Session" },
    { src: "/gallery/pic23.jpg", alt: "Adolescent Mentorship Session" },
    { src: "/gallery/pic24.jpg", alt: "photos" },
    { src: "/gallery/pic25.jpg", alt: "Adolescent Mentorship Session" },
    { src: "/gallery/pic26.jpg", alt: "Adolescent Mentorship Session" },
    { src: "/gallery/pic2.jpg", alt: "Adolescent Mentorship Session" },
    { src: "/gallery/pic2.png", alt: "Community Outreach" },
    { src: "/gallery/pic3.jpg", alt: "School Wellness Program" },
    { src: "/gallery/D2.jpeg", alt: "Youth Engagement" },
    { src: "/gallery/D5.jpeg", alt: "Counseling Session" },
    { src: "/gallery/D4.jpeg", alt: "Team Building" },
    { src: "/gallery/D1.jpeg", alt: "Workshop Activity" },
    { src: "/gallery/pic8.jpg", alt: "Student Wellness" },
    { src: "/gallery/pic16.jpg", alt: "Relaxing after workshop" },
    // ... add all your other pic references here
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-blue-900 py-20 px-6 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
          Our Impact in Photos
        </h1>
        <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-blue-100 text-lg md:text-xl">
          Capturing moments of growth and resilience across Kenya.
        </p>
      </section>

      {/* Masonry Grid Section */}
      <section className="py-12 px-4 md:px-8 lg:px-12 bg-slate-50">
        {/* 'columns-1' for mobile
            'sm:columns-2' for tablets
            'lg:columns-3' for small laptops
            'xl:columns-4' for large screens 
        */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className="break-inside-avoid relative group cursor-zoom-in rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedImage(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay with description that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold text-sm tracking-wide">
                  {photo.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 p-4 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative max-w-5xl w-full flex flex-col items-center">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl animate-in zoom-in-95 duration-300"
            />
            <div className="mt-4 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
              <p className="text-white font-medium">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
