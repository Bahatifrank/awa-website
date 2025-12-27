import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-slate-800 pb-12">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-400">About AWA</h3>
          <p className="text-slate-400 leading-relaxed text-sm">
            Adolescents Wellness–Africa (AWA) is a national social enterprise advancing adolescent mental health, 
            life skills, and positive behaviour across Kenya through school- and community-based programs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-400">Quick Links</h3>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/programs" className="hover:text-white transition">Our Programs</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-white transition">Resources</Link></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-400">Contact Us</h3>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-blue-400">📍</span>
              JKUAT Road, Juja, Kiambu County, Kenya
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">📞</span>
              +254 742 631 201
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">✉️</span>
              <a href="mailto:adolescentswellness.africa@gmail.com" className="hover:text-white transition">
                adolescentswellness.africa@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
        <p>© {currentYear} Adolescents Wellness–Africa (AWA). All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-slate-300">Privacy Policy</Link>
          <Link href="#" className="hover:text-slate-300">Terms of Service</Link>
          <Link href="#" className="hover:text-slate-300">Developed by Bahati Frank +254745546762</Link>
        </div>
      </div>
    </footer>
  );
}