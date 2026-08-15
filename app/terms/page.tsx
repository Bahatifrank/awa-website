import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Read the terms and conditions governing use of the Adolescents Wellness Africa (AWA) website and programs.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    heading: "1. Acceptance of Terms",
    body: `By accessing or using the Adolescents Wellness–Africa ("AWA", "we", "us", or "our") website, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use our website.`,
  },
  {
    heading: "2. About Our Organisation",
    body: `AWA is an organisation supporting adolescent mental health, life skills, and positive behaviour across Kenya through counselling, mentorship, and school-based programs. Content on this website is provided for general informational purposes about our work.`,
  },
  {
    heading: "3. Use of the Website",
    body: `You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, this site by any third party. You may not use this website to transmit harmful, offensive, or unlawful content.`,
  },
  {
    heading: "4. Intellectual Property",
    body: `All content on this website, including text, graphics, logos, and images, is the property of AWA or its licensors and is protected by applicable intellectual property laws. You may view and share content for personal, non-commercial use, but may not reproduce, modify, or distribute it without our prior written consent.`,
  },
  {
    heading: "5. Program Participation",
    body: `Participation in AWA programs, including counselling and mentorship services, is subject to separate consent processes, particularly where adolescents are involved. Enrolment in a program does not create a binding obligation and may be subject to eligibility, capacity, and safeguarding requirements.`,
  },
  {
    heading: "6. No Professional Advice",
    body: `Information provided on this website is for general awareness purposes only and is not a substitute for individualised professional counselling, medical, or psychological advice. If you or someone you know is in crisis, please seek immediate support from a qualified professional or emergency service.`,
  },
  {
    heading: "7. Third-Party Links",
    body: `Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of any linked external sites.`,
  },
  {
    heading: "8. Limitation of Liability",
    body: `AWA makes reasonable efforts to ensure the accuracy of information on this website but does not guarantee completeness or accuracy. To the fullest extent permitted by law, AWA shall not be liable for any loss or damage arising from your use of this website.`,
  },
  {
    heading: "9. Changes to These Terms",
    body: `We may update these Terms of Use from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.`,
  },
  {
    heading: "10. Governing Law",
    body: `These Terms of Use are governed by the laws of the Republic of Kenya.`,
  },
  {
    heading: "11. Contact Us",
    body: `If you have questions about these Terms of Use, please contact us at info@adolescentswellness-africa.org or +254 742 631 201.`,
  },
];

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-blue-900 py-16 md:py-20 px-6 text-white text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tight">Terms of Use</h1>
        <div className="w-20 h-1 bg-amber-400 mx-auto mb-6" aria-hidden="true" />
        <p className="max-w-2xl mx-auto text-blue-100 text-base md:text-lg">
          The terms and conditions governing use of the AWA website and programs.
        </p>
      </section>

      {/* Body */}
      <section className="py-16 md:py-20 px-6 max-w-3xl mx-auto">
        <p className="text-slate-500 text-sm mb-10">Effective date: January 2026</p>

        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-3">{s.heading}</h2>
              <p className="text-slate-600 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 text-sm text-slate-500">
          Have questions?{" "}
          <Link href="/contact" className="text-blue-700 font-semibold hover:text-blue-900 transition">
            Get in touch with us
          </Link>
          .
        </div>
      </section>
    </main>
  );
}