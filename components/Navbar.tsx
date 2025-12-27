"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav className="w-full bg-white border-b border-slate-100 sticky top-0 z-[999] shadow-sm">
      {/* Container: Use px-4 on mobile and px-12 on desktop */}
      <div className="w-full flex items-center justify-between px-4 md:px-12 py-4">
        
        {/* LOGO SECTION - Left Aligned */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
          <div className="flex flex-col">
            <span className="text-xl font-black text-blue-800 leading-none">AWA</span>
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter block md:hidden lg:block">
              Adolescents Wellness-Africa
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV - Pushed to the far right */}
        <div className="hidden lg:flex items-center gap-6 ml-auto">
          <div className="flex items-center space-x-6 text-slate-700 font-bold">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <Link href="/about" className="hover:text-blue-600 transition">About</Link>
            <Link href="/programs" className="hover:text-blue-600 transition">Programs</Link>
            <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
            <Link href="/gallery" className="hover:text-blue-600 transition">Gallery</Link>
            <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
          </div>
          <Link href="/contact" className="bg-blue-800 text-white px-5 py-2.5 rounded-xl font-bold text-sm">
            Get Involved
          </Link>
        </div>

        {/* MOBILE TOGGLE - Only shows on small/medium screens */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 text-slate-800 focus:outline-none"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-current transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 w-full bg-current transition duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-current transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* FULL SCREEN MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-white z-[998] flex flex-col p-6 animate-in slide-in-from-right duration-300">
          <div className="flex flex-col space-y-6 text-2xl font-black text-blue-900 mt-10">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/programs" onClick={() => setIsOpen(false)}>Programs</Link>
            <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="mt-auto mb-20 w-full text-center bg-blue-800 text-white py-5 rounded-2xl text-xl font-bold"
          >
            Get Involved
          </Link>
        </div>
      )}
    </nav>
  );
}