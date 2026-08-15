import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-950 text-blue-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="AWA Logo" className="h-10 w-10 object-contain" />
              <div className="flex flex-col">
                <span className="text-lg font-black text-white leading-none">AWA</span>
                <span className="text-[9px] font-bold text-blue-300 uppercase tracking-tighter">
                  Adolescents Wellness-Africa
                </span>
              </div>
            </div>
            <p className="text-sm text-blue-200 leading-relaxed">
              Advancing adolescent mental health, life skills, and positive
              behaviour across Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/programs" className="hover:text-white transition">Programs</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-blue-200">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span>JKUAT Road, Juja, Kiambu County, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <a href="tel:+254742631201" className="hover:text-white transition">+254 742 631 201</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:info@adolescentswellness-africa.org" className="hover:text-white transition break-all">
                  info@adolescentswellness-africa.org
                </a>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-5">
              Get Involved
            </h4>
            <p className="text-sm text-blue-200 mb-5 leading-relaxed">
              Partner with us to reach more adolescents across Kenya.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-blue-950 px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all"
            >
              Get Involved
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-blue-300">
          <p>© {new Date().getFullYear()} Adolescents Wellness-Africa. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}