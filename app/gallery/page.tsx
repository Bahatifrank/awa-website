"use client";

import { useState } from 'react';
import Image from 'next/image';

const photos = [
  { src: "/gallery/pic1.jpg", alt: "AWA facilitator leading a one-on-one adolescent mentorship session" },
  { src: "/gallery/pic4.jpg", alt: "Adolescents participating in an AWA life skills workshop" },
  { src: "/gallery/pic5.jpg", alt: "AWA group counselling session with secondary school students" },
  { src: "/gallery/pic6.jpg", alt: "Adolescents engaged in a peer support discussion circle" },
  { src: "/gallery/pic7.jpg", alt: "AWA team facilitating a school wellness activity" },
  { src: "/gallery/pic8.jpg", alt: "Students participating in an AWA school wellness program" },
  { src: "/gallery/pic9.jpg", alt: "AWA mentorship program participants in a group session" },
  { src: "/gallery/pic10.jpg", alt: "AWA community outreach event with adolescents and families" },
  { src: "/gallery/pic11.jpg", alt: "Adolescent leadership training session led by AWA" },
  { src: "/gallery/pic12.jpg", alt: "AWA gallery photo from a life skills training day" },
  { src: "/gallery/pic13.jpg", alt: "AWA facilitators and students during a school visit" },
  { src: "/gallery/pic14.jpg", alt: "Adolescents taking part in an AWA capacity-building session" },
  { src: "/gallery/pic15.jpg", alt: "AWA team members engaging with students on campus" },
  { src: "/gallery/pic16.jpg", alt: "Students relaxing together after an AWA workshop" },
  { src: "/gallery/pic17.jpg", alt: "AWA mentorship session with adolescent participants" },
  { src: "/gallery/pic18.jpg", alt: "Group activity during an AWA mentorship program" },
  { src: "/gallery/pic19.jpg", alt: "AWA facilitator guiding an adolescent group discussion" },
  { src: "/gallery/pic20.jpg", alt: "Adolescents engaged in an AWA resilience-building exercise" },
  { src: "/gallery/pic21.jpg", alt: "AWA mentorship session photo from a school visit" },
  { src: "/gallery/pic22.jpg", alt: "AWA team facilitating a values-based education session" },
  { src: "/gallery/pic23.jpg", alt: "Adolescents participating in an AWA prevention program activity" },
  { src: "/gallery/pic24.jpg", alt: "AWA gallery photo from a community wellness event" },
  { src: "/gallery/pic25.jpg", alt: "AWA mentorship session with secondary school students" },
  { src: "/gallery/pic26.jpg", alt: "Adolescents and facilitators at an AWA program event" },
  { src: "/gallery/pic2.jpg", alt: "AWA adolescent mentorship session in progress" },
  { src: "/gallery/pic2.png", alt: "AWA community outreach event in Kenya" },
  { src: "/gallery/pic3.jpg", alt: "AWA school wellness program in a classroom setting" },
  { src: "/gallery/D2.jpeg", alt: "Adolescents engaged in an AWA youth engagement activity" },
  { src: "/gallery/D5.jpeg", alt: "AWA counselling session with an adolescent participant" },
  { src: "/gallery/D4.jpeg", alt: "AWA team building activity with program participants" },
  { src: "/gallery/D1.jpeg", alt: "Adolescents taking part in an AWA workshop activity" },
];

export default function GalleryClient() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <section className="py-12 px-4 md:px-8 lg:px-12 bg-slate-50">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {photos.map((photo, index) => (
            <div
              key={photo.src + index}
              className="break-inside-avoid relative group cursor-zoom-in rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedImage(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold text-sm tracking-wide">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative max-w-5xl w-full flex flex-col items-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-4 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
              <p className="text-white font-medium">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}